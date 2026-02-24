import React, { useContext, useEffect, useState } from "react";
import "../AdminDashboard/AdminDashboard.css";
import "./MemberDashboard.css";

// Material UI Icons
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import GetAppIcon from "@material-ui/icons/GetApp"; 
import HistoryIcon from "@material-ui/icons/History";
import StarIcon from "@material-ui/icons/Star"; 
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import CloseIcon from "@material-ui/icons/Close";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import { IconButton } from "@material-ui/core";

// Context & Tools
import { AuthContext } from "../../../Context/AuthContext";
import axios from "axios";

function MemberDashboard() {
  const [active, setActive] = useState("profile");
  const [sidebar, setSidebar] = useState(false);
  
  // Feedback States
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [selectedResource, setSelectedResource] = useState("");
  const [feedbackText, setFeedbackText] = useState("");
  const [rating, setRating] = useState(0);

  const API_URL = process.env.REACT_APP_API_URL;
  const { user } = useContext(AuthContext);
  const [memberDetails, setMemberDetails] = useState(null);

  useEffect(() => {
    const getMemberDetails = async () => {
      try {
        const response = await axios.get(API_URL + "api/users/getuser/" + user._id);
        setMemberDetails(response.data);
      } catch (err) {
        console.log("Error fetching user data");
      }
    };
    getMemberDetails();
  }, [API_URL, user]);

  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    alert(`Success! You gave "${selectedResource}" a ${rating}-star rating.`);
    setShowFeedbackModal(false);
    setFeedbackText("");
    setRating(0);
  };

  const renderStars = () => {
    return [1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        className="star-icon"
        style={{ color: star <= rating ? "#ffc107" : "#e4e5e9" }}
        onClick={() => setRating(star)}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="dashboard">
      <div className="dashboard-card">
        {/* SIDEBAR */}
        <div className="sidebar-toggler" onClick={() => setSidebar(!sidebar)}>
          <IconButton>
            {sidebar ? <CloseIcon style={{ color: "#ea444a" }} /> : <DoubleArrowIcon style={{ color: "#ea444a" }} />}
          </IconButton>
        </div>

        <div className={sidebar ? "dashboard-options active" : "dashboard-options"}>
          <div className="dashboard-logo">
            <LibraryBooksIcon style={{ fontSize: 50 }} />
            <p className="logo-name">Nexus LMS</p>
          </div>
          <a href="#profile" className={`dashboard-option ${active === "profile" ? "clicked" : ""}`} onClick={() => { setActive("profile"); setSidebar(false); }}>
            <AccountCircleIcon className="dashboard-option-icon" /> Profile
          </a>
          <a href="#downloads" className={`dashboard-option ${active === "active" ? "clicked" : ""}`} onClick={() => { setActive("active"); setSidebar(false); }}>
            <GetAppIcon className="dashboard-option-icon" /> My Downloads
          </a>
          <a href="#saved" className={`dashboard-option ${active === "reserved" ? "clicked" : ""}`} onClick={() => { setActive("reserved"); setSidebar(false); }}>
            <StarIcon className="dashboard-option-icon" /> Saved Items
          </a>
          <a href="#history" className={`dashboard-option ${active === "history" ? "clicked" : ""}`} onClick={() => { setActive("history"); setSidebar(false); }}>
            <HistoryIcon className="dashboard-option-icon" /> Activity Log
          </a>
          <a href="#logout" className="dashboard-option" onClick={logout}>
            <PowerSettingsNewIcon className="dashboard-option-icon" /> Log out
          </a>
        </div>

        {/* CONTENT */}
        <div className="dashboard-option-content">
          
          {active === "profile" && (
            <div className="member-profile-content">
              <div className="user-details-topbar">
                <img className="user-profileimage" src="./assets/images/Profile.png" alt="User" />
                <div className="user-info">
                  <p className="user-name">{memberDetails?.userFullName || "Member"}</p>
                  <p className="user-id">Library ID: {memberDetails?.admissionId || "USER-7721"}</p>
                  <p className="user-email">{memberDetails?.email}</p>
                </div>
              </div>
              <div className="user-details-specific">
                <div className="specific-left">
                   <p><b>Gender:</b> {memberDetails?.gender}</p>
                   <p><b>DOB:</b> {memberDetails?.dob}</p>
                   <p><b>Address:</b> {memberDetails?.address}</p>
                </div>
                <div className="specific-right">
                  <div className="stat-card">
                    <p><b>Resources Downloaded</b></p>
                    <p className="stat-number">12</p>
                  </div>
                  <div className="stat-card">
                    <p><b>Feedback Points</b></p>
                    <p className="stat-number">{memberDetails?.points || 45}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {active === "active" && (
            <div className="member-activebooks-content">
              <p className="member-dashboard-heading">Downloaded Resources</p>
              <table className="activebooks-table">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Resource Title</th>
                    <th>Category</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {memberDetails?.activeTransactions?.map((data, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{data.bookName}</td>
                      <td>Research Paper</td>
                      <td>
                        <button className="feedback-btn" onClick={() => { setSelectedResource(data.bookName); setShowFeedbackModal(true); }}>
                          Review
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {active === "reserved" && (
            <div className="member-reservedbooks-content">
              <p className="member-dashboard-heading">Reading List (Saved Items)</p>
              <table className="activebooks-table">
                <thead><tr><th>S.No</th><th>Resource Title</th><th>Saved On</th><th>Action</th></tr></thead>
                <tbody><tr><td>1</td><td>Deep Learning Basics PDF</td><td>2024-05-22</td><td><button className="download-btn-small">Download Now</button></td></tr></tbody>
              </table>
            </div>
          )}

          {active === "history" && (
            <div className="member-history-content">
              <p className="member-dashboard-heading">Activity Log</p>
              <table className="activebooks-table">
                <thead><tr><th>S.No</th><th>Resource</th><th>Action</th><th>Timestamp</th></tr></thead>
                <tbody><tr><td>1</td><td>Physics Textbook Vol 1</td><td>Downloaded</td><td>May 23, 2:15 PM</td></tr></tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* STAR RATING MODAL */}
      {showFeedbackModal && (
        <div className="modal-overlay">
          <div className="feedback-modal">
            <div className="modal-header">
              <h3>Submit Resource Review</h3>
              <IconButton onClick={() => setShowFeedbackModal(false)}><CloseIcon /></IconButton>
            </div>
            <form onSubmit={handleFeedbackSubmit}>
              <p>Rating for: <b>{selectedResource}</b></p>
              <div className="star-rating-container">{renderStars()}</div>
              <textarea placeholder="Share your experience with this resource..." required value={feedbackText} onChange={(e) => setFeedbackText(e.target.value)} />
              <div className="modal-actions">
                <button type="button" className="cancel-btn" onClick={() => setShowFeedbackModal(false)}>Cancel</button>
                <button type="submit" className="submit-btn">Post Feedback</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default MemberDashboard;
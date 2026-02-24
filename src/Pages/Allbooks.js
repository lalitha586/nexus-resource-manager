import React from "react";
import "./Allbooks.css";

// This is your library "Database"
const libraryData = [
  {
    id: 1,
    title: "Wings Of Fire",
    author: "APJ Abdul Kalam",
    category: "Autobiography",
    type: "Book",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp16xiXu1ZtTzbLy-eSwEK4Ng6cUpUZnuGbQ&usqp=CAU"
  },
  {
    id: 2,
    title: "Quantum Physics Research",
    author: "Dr. Sarah Hall",
    category: "Science",
    type: "Research Paper",
    img: "https://img.freepik.com/premium-photo/abstract-science-illustration-with-atom-cogs-test-tubes_339976-11014.jpg"
  },
  {
    id: 3,
    title: "The Power Of Subconscious Mind",
    author: "Joseph Murphy",
    category: "Psychology",
    type: "Book",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Rb2t6jA5ml7n57qdTZbAOWX1qSfsLCbaOA&usqp=CAU"
  },
  {
    id: 4,
    title: "Semester 1 Study Guide",
    author: "University Press",
    category: "Mathematics",
    type: "Study Guide",
    img: "https://th.bing.com/th/id/OIP.niBQi-VaG5C8Vne6Uxv1lgHaFQ?w=261&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  }
];

function Allbooks() {
  return (
    <div className="library-container">
      {/* Sidebar Section */}
      <aside className="sidebar">
        <div className="filter-group">
          <h3>Categories</h3>
          <label><input type="checkbox" /> Textbooks</label>
          <label><input type="checkbox" /> Research Papers</label>
          <label><input type="checkbox" /> Study Guides</label>
        </div>
        <div className="filter-group">
          <h3>Subjects</h3>
          <label><input type="checkbox" /> Science</label>
          <label><input type="checkbox" /> Mathematics</label>
          <label><input type="checkbox" /> History</label>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="books-page">
        <div className="books-grid">
          {libraryData.map((item) => (
            <div className="book-card" key={item.id}>
              <div className="card-tag">{item.type}</div>
              <img src={item.img} alt={item.title} className="book-image" />
              <div className="book-info">
                <h4 className="bookcard-title">{item.title}</h4>
                <p className="bookcard-author">By {item.author}</p>
                <span className="bookcard-category">{item.category}</span>
                <div className="card-actions">
                  <button className="download-btn">Download PDF</button>
                  <button className="feedback-btn">Give Feedback</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Allbooks;
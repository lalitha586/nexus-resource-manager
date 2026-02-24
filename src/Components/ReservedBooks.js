import React from 'react'
import './ReservedBooks.css'

function ReservedBooks() {
    return (
        <div className='reservedbooks-container'>
            <h className='reservedbooks-title'>Books On Hold</h>
            <table className='reservedbooks-table'>
                <tr>
                    <th>Name</th>
                    <th>Book</th>
                    <th>Date</th>
                </tr>
                <tr>
                    <td>Pranav</td>
                    <td>Internet of Things</td>
                    <td>12/12/2025</td>
                </tr>
                <tr>
                    <td>Ramya</td>
                    <td>vedic maths</td>
                    <td>29/12/2025</td>
                </tr>
                <tr>
                    <td>Kavya</td>
                    <td>algebra</td>
                    <td>04/1/2026</td>
                </tr>
                <tr>
                    <td>Teja</td>
                    <td>Modern CryptAnalysis</td>
                    <td>02/2/2026</td>
                </tr>
                <tr>
                    <td>Surya</td>
                    <td>Unix Operating System</td>
                    <td>11/2/2026</td>
                </tr>
                <tr>
                    <td>Sridevi</td>
                    <td>Java</td>
                    <td>21/2/2026</td>
                </tr>
            </table>
        </div>
    )
}

export default ReservedBooks

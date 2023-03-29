import React from 'react'
import records from '../components/records';
import "../styles/history.css";

const History = () => {
  return (
    <div className='table-container'>
      <h2>Recently Played</h2>
    <table className="history-table">
      <tr>
        <th>Title</th> <th>Link</th> <th>Played On</th>
      </tr>
      {records.map((record) => {
        return <tr>
          <td>{record.t}</td>
          <td>{record.l}</td>
          <td>{record.time}</td>
        </tr>
      })}
    </table>



      
    </div>
  )
}

export default History
import React from 'react'
import records from '../components/records';
import "../styles/history.css";

const History = () => {
  return (
    <div className='table-container'>
      <h2>Recently Played</h2>
      <div className="table-scroll">
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
    



      <h6>*Note : History will be deleted when you refresh the Page. But your cards and Buckets are stored in your local Storage. </h6>
    </div>
  )
}

export default History
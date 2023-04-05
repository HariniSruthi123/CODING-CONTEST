import React from 'react'

export default function Singers() {
  return (
    <div>
      <table style={{width:"30%" ,marginLeft:"32rem"}} class="table  table-bordered  table-hover mt-5 pd-5">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>Gv prakash</th>
            <td>2010</td>
          </tr>
          <tr>
            <th scope='row'>Taylor Swift</th>
            <td>2010</td>
          </tr>
          <tr>
            <th scope='row'>Zayn Malik</th>
            <td>2022</td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}
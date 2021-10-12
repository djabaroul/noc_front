import React from 'react'
import {Link} from "react-router-dom"
import Table from '../components/table/Table'
import customerList from '../assets/JsonData/admin.json'

const customerTableHead = [
    
    'Object Name',
    'IP Address',
    'NE Family',
    'Actions'
    
]

const renderHead= (item,index) =><th key={index}>{item}</th>

const renderBody = (item,index) =>(
    <tr>
      
      <td>{item.Object_Name}</td>
      <td>{item.IP_Address}</td>
      <td>{item.NE_Family}</td>
      <td><Link to={`/analytics`}>View All</Link></td>
    </tr>
)

const Customers = () => {
    return (
        <div>
           <h2 className="page-header">
             customers
           </h2>
           <div className="row">
             <div className="col-12">
               <div className="card">
                 <div className="card__body">
                   <Table 
                       limit='10'
                       headData={customerTableHead}
                       renderHead={(item, index)=>renderHead(item,index)}
                       bodyData={customerList}
                       renderBody={(item,index)=>renderBody(item,index)}
                   />
                 </div>
               </div>
             </div>
           </div>
        </div>
    )
}

export default Customers

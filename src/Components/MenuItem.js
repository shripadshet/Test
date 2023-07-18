import React from "react";


function MenuItem({ id, name, price,sold }) {
 
  return (
    
    <>
    <table style={{border: "10px"}}>
  <tr>
    <th>Product name</th>
    <td> {name} </td>
    <th>total revenue</th>
    <td> {price} </td>
    </tr>
      
   
 
 
</table>
   
    </>
  );
}

export default MenuItem;
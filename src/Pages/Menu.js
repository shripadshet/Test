import React from "react";
import { MenuList } from "../Helpers/MenuList";
import MenuItem from "../Components/MenuItem";
import "../Styles/Menu.css";

function Menu() {
  let sortedProducts = [...MenuList["products"]];
  sortedProducts.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  console.log(sortedProducts);
  const totalPrice = sortedProducts.map((item) => item.sold).reduce((a, b) => a + b, 0);
  
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <h1>Revenue aggregator application</h1>
      <table>
        <thead>
          <tr>
          <th>Product Id</th>
            <th>Product Name</th>
            <th>Sold</th>
          
          </tr>
        </thead>
        <tbody>
          {sortedProducts.map((value, key) => {
            return (
              <tr key={key}>
                 <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.sold}</td>
              
              </tr>
            );
          })}
        </tbody>
        <td></td>
        <td><b>Total Revenue</b></td>
        <td><b>{parseInt(totalPrice)}</b></td>
      </table>
    
    </div>
  );
}

export default Menu;
import React from "react";
import "./App.css";
import logo from './cat.jpg'
import { cats } from "./data";


function Header() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;
}
let x = Header(); 

export const Stocks = () => {
  return (
    <>
      <div className="stock-container">
        {cats.map((data, key) => { 
          return (
            <div key={key}>
              <Stock
                type={data.type}
                
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
console.log(logo);
const Stock = ({  type}) => {

  return (
    
    <table>
      <tbody>
        <tr>
          <td>

            <h5>{type}</h5>
            {x}

          </td>
        </tr>
      </tbody>
    </table>
 );
}; // 
import React from "react";
import "./App.css";
import { cats } from "./data";

export const Stocks = () => {
  return (
    <>
      <div className="stock-container">
        {cats.map((data, key) => {
          return (
            <div key={key}>
              {data.type +
                " , " +
                data.title +
                " ," +
                data.position }
            </div>
          );
        })}
      </div>
    </>
  );
};
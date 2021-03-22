/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2021-03-17 07:43:47
 * @modify date 2021-03-17 07:43:47
 * @desc [Page Not found - if there is an invalid URL]
 */
import React from "react";
import ImagePageNotFound from "../images/pagenotfound.jpg";

export default function PageNotFound() {
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Sorry ! We can't help you..:)</h3>
      <img src={ImagePageNotFound} alt="Page Not Found" />
    </div>
  );
}

/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2021-03-17 07:32:45
 * @modify date 2021-03-17 07:32:45
 * @desc [Footer Component]
 */
import React from "react";
const Footer = () => {

  var style = {
    textAlign: "center",
    padding: "10px",
    bottom: "0",
    left: "0",
    position: "fixed",
    color: "white",
    width: "100%",
    height: "150px"
  };
   
  return (
    <React.Fragment>
      <div className="site-footer py-5 bg-black "  style={style} >
        <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">
                <i>We4You</i>
              </p>
            </div>
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; 2021 All Rights Reserved by {" "}
                <a href="/">We4You</a>.
              </p>
            </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;

import React from "react";
import "./Beforenav.css";

function Beforenav() {
  return (
    <div className="d-none d-md-block before-nav container-fluid p-3">
      <div className="row">
        <div className="col">
          <div className="container">
            <div className="row">
              <div className="col d-flex gap-5">
                <div>
                  <i class="fa-solid fa-phone"></i> +2547 08258617
                </div>
                <div>
                  <i class="fa-solid fa-envelope"></i> alumni@gmail.com
                </div>
              </div>
              <div className="col d-flex justify-content-end gap-5">
                {" "}
                <span>Help Center</span>
                <span>Blog</span>
                <span>Career</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Beforenav;

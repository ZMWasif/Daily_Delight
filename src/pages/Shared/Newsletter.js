import React from "react";
import divider from "../../../src/assets/divider.png";

import "./Newsletter.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Newsletter = () => (
  <div className="bg-[url('/src/assets/header_bg.jpg')]">
    <div className="text-center flex flex-col flex__center">
      <div>
        <h1 className="headtext__cormorant">Subscribe to Our Newsletter</h1>
        <div className="flex__center">
          <img className="flex__center" src={divider} alt="" />
        </div>
        <div className="d-flex flex__center">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full max-w-xs"
            />
            <Button as={Link} to="/happyfood" className="menu-btn">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Newsletter;

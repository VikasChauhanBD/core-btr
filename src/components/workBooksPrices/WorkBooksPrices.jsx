import React from "react";
import "./WorkBooksPrices.css";
import { NavLink } from "react-router-dom";

function WorkBooksPrices() {
  return (
    <div className="workbook-prices-container">
      <div className="workbook-prices-sections">
        <section className="workbook-prices-highlights">
          <h2 className="workbook-prices-section-heading">Set of 5 Books</h2>
          <h4 className="workbook-prices-section-sub-heading">
            Annotated Notes - 3 | Unannotated Workbooks - 2
          </h4>

          <p>
            Original Price: Rs. 5700/- <br />
            Intro Price: Rs. 4600/-
          </p>

          <p>
            Launch Offer : Flat 25% off <br />
            Launch Price: Rs. 3450/- ( after 25% off)
          </p>
          <h6>
            This offer is valid till 25<sup>th</sup> April 2026
          </h6>
          <br />

          <NavLink to="https://portal.corebtr.com/books" target="_blank">
            Buy Now
          </NavLink>

          <br />

          {/* <p className="plan-prices-dispatch">
            Dispatch will start from 15<sup>th</sup> April, on first come first
            serve basis.
          </p> */}

          <div className="plan-prices-help-div">
            {/* <p className="plan-prices-register">
              Registration starts from 11:00 AM on 1<sup>st</sup> April 2026
            </p> */}
            <p className="plan-prices-help">
              For any queries, feel free to contact our Helpline:{" "}
              <a href="tel:7428581909">7428581909</a> (Only For Calling)
            </p>
            <p className="plan-prices-help">
              Send us Whatsapp:{" "}
              <a
                href="https://wa.me/919266682739"
                target="_blank"
                rel="noreferrer"
                className="contact-us-contact-value"
              >
                +91-9266682739
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default WorkBooksPrices;

import React from "react";
import "./Schedule.css";

const scheduleData = [
  {
    dates: (
      <>
        3<sup>rd</sup> April
      </>
    ),
    subject: "Grand Test 1",
    highlight: true,
  },
  {
    dates: (
      <>
        4<sup>th</sup>-6<sup>th</sup> April
      </>
    ),
    subject: "Surgery",
  },
  {
    dates: (
      <>
        7<sup>th</sup>-10<sup>th</sup> April
      </>
    ),
    subject: "Ortho-Radiology-FMT",
  },
  {
    dates: (
      <>
        11<sup>th</sup>-12<sup>th</sup> April
      </>
    ),
    subject: "Biochemistry",
  },
  {
    dates: (
      <>
        13<sup>th</sup> April
      </>
    ),
    subject: "Mini Test 1",
    highlight: true,
  },
  {
    dates: (
      <>
        14<sup>th</sup>-16<sup>th</sup> April
      </>
    ),
    subject: "Microbiology",
  },
  {
    dates: (
      <>
        15<sup>th</sup> April
      </>
    ),
    subject: "Grand Test 2",
    highlight: true,
  },
  {
    dates: (
      <>
        17<sup>th</sup>-19<sup>th</sup> April
      </>
    ),
    subject: "Anatomy",
  },
  {
    dates: (
      <>
        20<sup>th</sup>-21<sup>st</sup> April
      </>
    ),
    subject: "Psychiatry + ENT",
  },
  {
    dates: (
      <>
        22<sup>nd</sup> April
      </>
    ),
    subject: "Mini Test 2",
    highlight: true,
  },
  {
    dates: (
      <>
        23<sup>rd</sup>-28<sup>th</sup> April
      </>
    ),
    subject: "Integrated Systems",
  },
  {
    dates: (
      <>
        29<sup>th</sup>-30<sup>th</sup> April
      </>
    ),
    subject: "Dermatology + Anesthesia",
  },
  {
    dates: (
      <>
        29<sup>th</sup> April
      </>
    ),
    subject: "Grand Test 3",
    highlight: true,
  },
  {
    dates: (
      <>
        01<sup>st</sup> May
      </>
    ),
    subject: "Mini Test 3",
    highlight: true,
  },
  {
    dates: (
      <>
        2<sup>nd</sup>-4<sup>th</sup> May
      </>
    ),
    subject: "PSM",
  },
  {
    dates: (
      <>
        5<sup>th</sup>-7<sup>th</sup> May
      </>
    ),
    subject: "Ophthalmology + Pediatrics",
  },
  {
    dates: (
      <>
        8<sup>th</sup>-10<sup>th</sup> May
      </>
    ),
    subject: "OBG",
  },
  {
    dates: (
      <>
        13<sup>th</sup> May
      </>
    ),
    subject: "Grand Test 4 ( Mock INI-CET )",
    highlight: true,
  },
];

const Schedule = () => {
  return (
    <div className="schedule-container">
      <div className="schedule-card">
        <h1 className="brand-title">
          core<span className="brand-highlight">BTR</span>
        </h1>
        <h2 className="schedule-title">
          45 Days Schedule for INI-CET May 2026
        </h2>

        <table className="schedule-table">
          <thead>
            <tr>
              <th>Dates</th>
              <th>Cover Subject with Videos</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((item, index) => (
              <tr key={index} className={item.highlight ? "highlight-row" : ""}>
                <td>{item.dates}</td>
                <td className={item.highlight ? "bold-text" : ""}>
                  {item.subject}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* <div className="mock-test">
          Grand Test 1 will be available in the app from 2<sup>nd</sup> April
        </div> */}
      </div>
    </div>
  );
};

export default Schedule;

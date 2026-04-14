import React from "react";
import "./InicetSchedule.css";
import { Helmet } from "react-helmet";

function InicetSchedule() {
  const neetPgSchedule = [
    { date: "2026-01-18", subject: "Orientation" },
    { date: "2026-01-19", subject: "OBG-1" },
    { date: "2026-01-20", subject: "OBG-2" },
    { date: "2026-01-24", subject: "OBG Test-Discussion" },
    { date: "2026-01-26", subject: "PSM-1" },
    { date: "2026-01-27", subject: "PSM-2" },
    { date: "2026-01-31", subject: "PSM Test-Discussion" },
    { date: "2026-02-02", subject: "Surgery-1" },
    { date: "2026-02-04", subject: "Surgery-2" },
    { date: "2026-02-07", subject: "Surgery Test-Discussion" },
    { date: "2026-02-09", subject: "CVS" },
    { date: "2026-02-11", subject: "Hemat" },
    { date: "2026-02-14", subject: "Neuro" },
    { date: "2026-02-16", subject: "Renal + Rheumat" },
    { date: "2026-02-20", subject: "Endocrine + GI" },
    { date: "2026-02-21", subject: "Respi + General Physio" },
    { date: "2026-02-23", subject: "General Path + Pharma" },
    { date: "2026-02-26", subject: "Integrated Systems Test-1" },
    { date: "2026-02-28", subject: "Integrated Systems Test-2" },
    { date: "2026-03-02", subject: "Pediatrics" },
    { date: "2026-03-06", subject: "Pediatrics Test-Discussion (+OBG)" },
    { date: "2026-03-08", subject: "Anatomy" },
    { date: "2026-03-12", subject: "Anatomy Test-Discussion (+PSM)" },
    { date: "2026-03-14", subject: "Microbiology" },
    { date: "2026-03-19", subject: "Microbiology Test-Discussion" },
    { date: "2026-03-22", subject: "Biochemistry" },
    { date: "2026-03-25", subject: "Biochemistry Test-Discussion (+Surgery)" },
    { date: "2026-03-26", subject: "Ophthalmology" },
    {
      date: "2026-03-30",
      subject: "Ophthal Test-Discussion (+CVS/Hemat/renal/GI)",
    },
    { date: "2026-04-01", subject: "Radiology" },
    {
      date: "2026-04-04",
      subject:
        "Radio Test-Discussion (+neuro/endocrine/respiratory/rheumatology)",
    },
    { date: "2026-04-06", subject: "ENT" },
    { date: "2026-04-08", subject: "FMT" },
    { date: "2026-04-11", subject: "ENT + FMT Test-Discussion" },
    { date: "2026-04-19", subject: "Psychiatry" },
    { date: "2026-04-21", subject: "Dermatology" },
    { date: "2026-04-24", subject: "Psychi-Derma Test-Discussion" },
    { date: "2026-04-25", subject: "Anesthesia" },
    { date: "2026-04-28", subject: "Orthopedics" },
    { date: "2026-05-01", subject: "Anesthesia-Ortho Test-Discussion" },
    { date: "2026-05-07", subject: "Mock-GT-1" },
    { date: "2026-05-09", subject: "Mock-GT-2" },
    { date: "2026-05-11", subject: "INICET Mock GT" },
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <>
      <Helmet>
        <title>INI-CET May 2026 Bootcamp Schedule - CoreBTR</title>

        <meta
          name="description"
          content="Schedule INI CET May 2026 with CoreBTR and stay ahead with a focused revision plan designed to strengthen concepts and improve exam readiness for aspirants."
        />
      </Helmet>

      <div className="inicet-schedule-container">
        <div className="inicet-schedule-wrapper">
          {/* Header */}
          <div className="inicet-schedule-header">
            <h2 className="inicet-schedule-title">
              INICET May 2026 Bootcamp Schedule
            </h2>
            <p className="inicet-schedule-description">
              A well-organized approach that helps you master all subjects
              through live interactive sessions and dedicated revision.
            </p>
          </div>

          {/* Schedule */}
          <div className="inicet-schedule-list">
            {neetPgSchedule.map((item, index) => (
              <div key={index} className="inicet-schedule-day">
                <div className="inicet-schedule-day-content">
                  {/* Date */}
                  <div className="inicet-schedule-day-name">
                    <svg
                      className="inicet-schedule-icon-small"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span className="inicet-schedule-day-text">
                      {formatDate(item.date)}
                    </span>
                  </div>

                  {/* Subject */}
                  <div className="btr-sessions-grid">
                    <div className="btr-session-item">
                      <div className="btr-session-subject">
                        <span className="btr-session-subject-name">
                          {item.subject}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default InicetSchedule;

import React from "react";
import "./LeadForm.css";

const LeadForm = () => {
  return (
    <div className="lead-form-container">
      <div className="lead-form-header">
        <img
          src="https://cdn.dribbble.com/userupload/47136926/file/f77686c97121b5cd4268f9979f308699.png"
          alt="CoreBTR"
        />
      </div>

      <div className="lead-form-wrapper">
        <form
          action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DdN00000sQYJx"
          method="POST"
        >
          <input type="hidden" name="oid" value="00DdN00000sQYJx" />
          <input type="hidden" name="retURL" value="http://corebtr.com" />

          <input type="hidden" name="lead_source" value="Website" />

          <div className="lead-form-grid">
            <div className="lead-form-group">
              <label>
                First Name<span className="lead-form-required">*</span>
              </label>
              <input name="first_name" type="text" required />
            </div>

            <div className="lead-form-group">
              <label>
                Last Name<span className="lead-form-required">*</span>
              </label>
              <input name="last_name" type="text" required />
            </div>

            <div className="lead-form-group">
              <label>
                Email<span className="lead-form-required">*</span>
              </label>
              <input name="email" type="email" required />
            </div>

            <div className="lead-form-group">
              <label>
                Phone<span className="lead-form-required">*</span>
              </label>
              <input
                name="phone"
                type="tel"
                pattern="[0-9]{10}"
                maxLength="10"
                required
                title="Please enter a valid 10-digit phone number"
              />
            </div>

            <div className="lead-form-group">
              <label>
                Whatsapp Number<span className="lead-form-required">*</span>
              </label>
              <input
                name="Whatsapp_Number__c"
                type="tel"
                pattern="[0-9]{10}"
                maxLength="10"
                required
                title="Please enter a valid 10-digit WhatsApp number"
              />
            </div>

            <div className="lead-form-group">
              <label>
                College Name<span className="lead-form-required">*</span>
              </label>
              <input name="College_Name__c" type="text" required />
            </div>

            <div className="lead-form-group">
              <label>
                Studying Year<span className="lead-form-required">*</span>
              </label>
              <input name="Studying_Year__c" type="text" required />
            </div>

            <div className="lead-form-group">
              <label>
                Plan Enquired<span className="lead-form-required">*</span>
              </label>
              <select name="Plan_Enquired__c" required>
                <option value="">--None--</option>
                <option value="3 Months">3 Months</option>
                <option value="6 Months">6 Months</option>
                <option value="12 Months">12 Months</option>
              </select>
            </div>
          </div>

          <div className="lead-form-submit-btn">
            <input type="submit" value="Submit" />
          </div>
        </form>

        <div className="lead-form-footer">
          <div className="lead-form-grey-text">CoreBTR by Dr. Zainab Vora</div>
          {/* <div className="blue-text">
            No.1 App to prepare for MS / MD / DNB / SS Exams
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default LeadForm;

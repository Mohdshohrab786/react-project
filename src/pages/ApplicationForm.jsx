import React from "react";
import { useParams, Link } from "react-router-dom";
import "./Careers.css";
function ApplicationForm() {
  const { role } = useParams(); // Role from URL

  return (
    <div className="form-page">
      <h2>Counsel Application Form</h2>
      <form>
        <label>Role Applied For</label>
        <input type="text" value={role} readOnly style={{ background: "#f0f0f0" }} />

        <label>Name</label>
        <input type="text" placeholder="Enter your name" required />

        <label>Your Email</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Name of Law School</label>
        <input type="text" />

        <label>Educational Qualifications</label>
        <input type="text" />

        <label>Year of Graduation</label>
        <input type="number" />

        <label>Practice Area</label>
        <input type="text" />

        <label>Office Location Preference</label>
        <select>
          <option>Delhi</option>
        </select>

        <label>Upload Resume</label>
        <input type="file" />

        <label>Any Other Remarks (optional)</label>
        <textarea></textarea>

        <button type="submit">Submit Application</button>
      </form>

      <div style={{ marginTop: "20px" }}>
        <Link to="/Careers" className="back-btn">
          ← Back to Careers
        </Link>
      </div>
    </div>
  );
}

export default ApplicationForm;

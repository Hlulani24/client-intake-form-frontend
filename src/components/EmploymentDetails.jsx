function EmploymentDetails({ formData, handleChange }) {
  return (
    <div className="form-section">
      <h2>Employment Details</h2>
      <div className="form-row">
        <div className="form-field field-lg">
          <label>Company Name</label>
          <input type="text" name="company_name"
            value={formData.company_name} onChange={handleChange}
            placeholder="e.g. ABC (Pty) Ltd" />
        </div>
        <div className="form-field field-md">
          <label>Occupation</label>
          <input type="text" name="occupation"
            value={formData.occupation} onChange={handleChange}
            placeholder="e.g. Software Developer" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-field field-sm">
          <label>Salary Date (Day of Month)</label>
          <input type="text" name="salary_date"
            value={formData.salary_date} onChange={handleChange}
            placeholder="e.g. 25" />
        </div>
        <div className="form-field field-md">
          <label>Gross Monthly Income</label>
          <input type="text" name="gross_income"
            value={formData.gross_income} onChange={handleChange}
            placeholder="e.g. R 15 000" />
        </div>
      </div>
    </div>
  );
}

export default EmploymentDetails;
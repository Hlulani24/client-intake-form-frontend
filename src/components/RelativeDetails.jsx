function RelativeDetails({ formData, handleChange }) {
  return (
    <div className="form-section">
      <h2>Relative / Friend Details</h2>
      <div className="form-row">
        <div className="form-field field-md">
          <label>First Name</label>
          <input type="text" name="relative_first_name"
            value={formData.relative_first_name} onChange={handleChange}
            placeholder="First name" />
        </div>
        <div className="form-field field-md">
          <label>Surname</label>
          <input type="text" name="relative_surname"
            value={formData.relative_surname} onChange={handleChange}
            placeholder="Last name" />
        </div>
        <div className="form-field field-md">
          <label>Tel No</label>
          <input type="text" name="relative_tel"
            value={formData.relative_tel} onChange={handleChange}
            placeholder="e.g. 082 123 4567" />
        </div>
        <div className="form-field field-md">
          <label>Relationship</label>
          <input type="text" name="relative_relationship"
            value={formData.relative_relationship} onChange={handleChange}
            placeholder="e.g. Sister, Friend" />
        </div>
      </div>
    </div>
  );
}

export default RelativeDetails;
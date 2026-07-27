function Suretyship({ formData, handleChange }) {
  return (
    <div className="form-section">
      <h2>Suretyship</h2>

      <div className="form-row">
        <div className="form-field field-xs">
          <label>Title</label>
          <input type="text" name="surety_title"
            value={formData.surety_title} onChange={handleChange} placeholder="Mr/Ms" />
        </div>
        <div className="form-field field-sm">
          <label>Initials</label>
          <input type="text" name="surety_initials"
            value={formData.surety_initials} onChange={handleChange} placeholder="e.g. T K" />
        </div>
        <div className="form-field field-md">
          <label>First Name</label>
          <input type="text" name="surety_first_name"
            value={formData.surety_first_name} onChange={handleChange} placeholder="First name" />
        </div>
        <div className="form-field field-md">
          <label>Surname</label>
          <input type="text" name="surety_surname"
            value={formData.surety_surname} onChange={handleChange} placeholder="Last name" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field field-md">
          <label>Relationship to Applicant</label>
          <input type="text" name="surety_relationship"
            value={formData.surety_relationship} onChange={handleChange}
            placeholder="e.g. Spouse, Parent" />
        </div>
        <div className="form-field field-sm">
          <label>Date of Birth</label>
          <input type="date" name="surety_dob"
            value={formData.surety_dob} onChange={handleChange} />
        </div>
        <div className="form-field field-md">
          <label>Home Tel</label>
          <input type="text" name="surety_home_tel"
            value={formData.surety_home_tel} onChange={handleChange}
            placeholder="e.g. 011 123 4567" />
        </div>
      </div>

      <div className="radio-group">
        <span>Gender:</span>
        <label><input type="radio" name="surety_gender" value="male"
          checked={formData.surety_gender === 'male'} onChange={handleChange} /> Male</label>
        <label><input type="radio" name="surety_gender" value="female"
          checked={formData.surety_gender === 'female'} onChange={handleChange} /> Female</label>
        <label><input type="radio" name="surety_gender" value="other"
          checked={formData.surety_gender === 'other'} onChange={handleChange} /> Other</label>
      </div>

      <div className="radio-group">
        <span>Marital Status:</span>
        <label><input type="radio" name="surety_marital_status" value="married"
          checked={formData.surety_marital_status === 'married'} onChange={handleChange} /> Married</label>
        <label><input type="radio" name="surety_marital_status" value="single"
          checked={formData.surety_marital_status === 'single'} onChange={handleChange} /> Single</label>
        <label><input type="radio" name="surety_marital_status" value="divorced"
          checked={formData.surety_marital_status === 'divorced'} onChange={handleChange} /> Divorced</label>
        <label><input type="radio" name="surety_marital_status" value="widowed"
          checked={formData.surety_marital_status === 'widowed'} onChange={handleChange} /> Widowed</label>
      </div>

      <div className="radio-group">
        <span>Identity Type:</span>
        <label><input type="radio" name="surety_identity_type" value="saId"
          checked={formData.surety_identity_type === 'saId'} onChange={handleChange} /> SA ID</label>
        <label><input type="radio" name="surety_identity_type" value="passport"
          checked={formData.surety_identity_type === 'passport'} onChange={handleChange} /> Passport</label>
      </div>

      <div className="form-row">
        <div className="form-field field-lg">
          <label>SA ID / Passport No</label>
          <input type="text" name="surety_id_passport_no"
            value={formData.surety_id_passport_no} onChange={handleChange}
            placeholder="13-digit ID or passport number" />
        </div>
        <div className="form-field field-md">
          <label>Passport Country of Issue</label>
          <input type="text" name="surety_passport_country"
            value={formData.surety_passport_country} onChange={handleChange}
            placeholder="e.g. Zimbabwe" />
        </div>
        <div className="form-field field-sm">
          <label>Passport Expiry Date</label>
          <input type="date" name="surety_passport_exp_date"
            value={formData.surety_passport_exp_date} onChange={handleChange} />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field field-lg">
          <label>Employer Name</label>
          <input type="text" name="surety_employer"
            value={formData.surety_employer} onChange={handleChange}
            placeholder="e.g. ABC (Pty) Ltd" />
        </div>
        <div className="form-field field-md">
          <label>Occupation</label>
          <input type="text" name="surety_occupation"
            value={formData.surety_occupation} onChange={handleChange}
            placeholder="e.g. Accountant" />
        </div>
        <div className="form-field field-md">
          <label>Gross Monthly Income</label>
          <input type="text" name="surety_gross_income"
            value={formData.surety_gross_income} onChange={handleChange}
            placeholder="e.g. R 20 000" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field field-xs">
          <label>Unit No</label>
          <input type="text" name="surety_unit_no"
            value={formData.surety_unit_no} onChange={handleChange} placeholder="e.g. 2A" />
        </div>
        <div className="form-field field-md">
          <label>Building Name</label>
          <input type="text" name="surety_building_name"
            value={formData.surety_building_name} onChange={handleChange}
            placeholder="Building name" />
        </div>
        <div className="form-field field-xs">
          <label>Street No</label>
          <input type="text" name="surety_street_no"
            value={formData.surety_street_no} onChange={handleChange} placeholder="e.g. 5" />
        </div>
        <div className="form-field field-md">
          <label>Street Name</label>
          <input type="text" name="surety_street_name"
            value={formData.surety_street_name} onChange={handleChange}
            placeholder="e.g. Church Street" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field field-md">
          <label>Town / City</label>
          <input type="text" name="surety_town_city"
            value={formData.surety_town_city} onChange={handleChange}
            placeholder="e.g. Johannesburg" />
        </div>
        <div className="form-field field-md">
          <label>Province</label>
          <input type="text" name="surety_province"
            value={formData.surety_province} onChange={handleChange}
            placeholder="e.g. Gauteng" />
        </div>
        <div className="form-field field-xs">
          <label>Code</label>
          <input type="text" name="surety_code"
            value={formData.surety_code} onChange={handleChange} placeholder="0001" />
        </div>
      </div>

      <div className="legal-text">
        I, <input type="text" placeholder="Full name" /> the undersigned agree to be bound as Surety
        and Co-principal Debtor in solidum with the customer for the due and punctual payments of all
        its debts and obligations to Vodacom (Pty) LTD.
        <br /><br />
        Signed this <input type="text" placeholder="day" /> day
        of <input type="text" placeholder="month" /> 20<input type="text" placeholder="year" />
        at <input type="text" placeholder="place" />
        <br /><br />
        Authorised Signatory Name: <input type="text" placeholder="Full name" /> &nbsp;
        Signature: <input type="text" placeholder="Sign here" />
      </div>

    </div>
  );
}

export default Suretyship;
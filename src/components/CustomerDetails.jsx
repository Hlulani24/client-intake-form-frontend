function CustomerDetails({ formData, handleChange }) {
  return (
    <div className="form-section">
      <h2>Customer Details</h2>

      <div className="form-row">
        <div className="form-field field-xs">
          <label>Title</label>
          <input type="text" name="title"
            value={formData.title} onChange={handleChange} placeholder="Mr/Ms" />
        </div>
        <div className="form-field field-sm">
          <label>Initials</label>
          <input type="text" name="initials"
            value={formData.initials} onChange={handleChange} placeholder="e.g. H L" />
        </div>
        <div className="form-field field-md">
          <label>Surname</label>
          <input type="text" name="surname"
            value={formData.surname} onChange={handleChange} placeholder="Last name" />
        </div>
        <div className="form-field field-md">
          <label>First Name</label>
          <input type="text" name="first_name"
            value={formData.first_name} onChange={handleChange} placeholder="First name" />
        </div>
      </div>

      <div className="radio-group">
        <span>Gender:</span>
        <label><input type="radio" name="gender" value="male"
          checked={formData.gender === 'male'} onChange={handleChange} /> Male</label>
        <label><input type="radio" name="gender" value="female"
          checked={formData.gender === 'female'} onChange={handleChange} /> Female</label>
      </div>

      <div className="radio-group">
        <span>Marital Status:</span>
        <label><input type="radio" name="marital_status" value="married"
          checked={formData.marital_status === 'married'} onChange={handleChange} /> Married</label>
        <label><input type="radio" name="marital_status" value="single"
          checked={formData.marital_status === 'single'} onChange={handleChange} /> Single</label>
        <label><input type="radio" name="marital_status" value="divorced"
          checked={formData.marital_status === 'divorced'} onChange={handleChange} /> Divorced</label>
        <label><input type="radio" name="marital_status" value="widowed"
          checked={formData.marital_status === 'widowed'} onChange={handleChange} /> Widowed</label>
        <label><input type="radio" name="marital_status" value="other"
          checked={formData.marital_status === 'other'} onChange={handleChange} /> Other</label>
      </div>

      <div className="radio-group">
        <span>Identity Type:</span>
        <label><input type="radio" name="identity_type" value="saId"
          checked={formData.identity_type === 'saId'} onChange={handleChange} /> SA ID</label>
        <label><input type="radio" name="identity_type" value="passport"
          checked={formData.identity_type === 'passport'} onChange={handleChange} /> Passport</label>
      </div>

      <div className="form-row">
        <div className="form-field field-lg">
          <label>SA ID / Passport No</label>
          <input type="text" name="id_passport_no"
            value={formData.id_passport_no} onChange={handleChange}
            placeholder="13-digit ID or passport number" />
        </div>
        <div className="form-field field-md">
          <label>Passport Country of Issue</label>
          <input type="text" name="passport_country"
            value={formData.passport_country} onChange={handleChange}
            placeholder="e.g. Zimbabwe" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field field-sm">
          <label>Passport Exp Date</label>
          <input type="date" name="passport_exp_date"
            value={formData.passport_exp_date} onChange={handleChange} />
        </div>
        <div className="form-field field-sm">
          <label>Date of Birth</label>
          <input type="date" name="date_of_birth"
            value={formData.date_of_birth} onChange={handleChange} />
        </div>
        <div className="form-field field-md">
          <label>Home Tel No</label>
          <input type="text" name="home_tel"
            value={formData.home_tel} onChange={handleChange}
            placeholder="e.g. 011 123 4567" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field field-xs">
          <label>Unit No</label>
          <input type="text" name="unit_no"
            value={formData.unit_no} onChange={handleChange} placeholder="e.g. 4B" />
        </div>
        <div className="form-field field-md">
          <label>Building Name</label>
          <input type="text" name="building_name"
            value={formData.building_name} onChange={handleChange}
            placeholder="e.g. Sunset Towers" />
        </div>
        <div className="form-field field-xs">
          <label>Street No</label>
          <input type="text" name="street_no"
            value={formData.street_no} onChange={handleChange} placeholder="e.g. 12" />
        </div>
        <div className="form-field field-md">
          <label>Street Name</label>
          <input type="text" name="street_name"
            value={formData.street_name} onChange={handleChange}
            placeholder="e.g. Main Street" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field field-md">
          <label>Town / City</label>
          <input type="text" name="town_city"
            value={formData.town_city} onChange={handleChange} placeholder="e.g. Pretoria" />
        </div>
        <div className="form-field field-md">
          <label>Province</label>
          <input type="text" name="province"
            value={formData.province} onChange={handleChange} placeholder="e.g. Gauteng" />
        </div>
        <div className="form-field field-xs">
          <label>Code</label>
          <input type="text" name="physical_code"
            value={formData.physical_code} onChange={handleChange} placeholder="0001" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field field-lg">
          <label>Postal Address</label>
          <input type="text" name="postal_address"
            value={formData.postal_address} onChange={handleChange}
            placeholder="PO Box or street address" />
        </div>
        <div className="form-field field-xs">
          <label>Postal Code</label>
          <input type="text" name="postal_code"
            value={formData.postal_code} onChange={handleChange} placeholder="0001" />
        </div>
      </div>

      <div className="radio-group">
        <span>Residence:</span>
        <label><input type="radio" name="residence" value="owned"
          checked={formData.residence === 'owned'} onChange={handleChange} /> Owned</label>
        <label><input type="radio" name="residence" value="livingWithParents"
          checked={formData.residence === 'livingWithParents'} onChange={handleChange} /> Living with Parents</label>
        <label><input type="radio" name="residence" value="rent"
          checked={formData.residence === 'rent'} onChange={handleChange} /> Rent</label>
        <label><input type="radio" name="residence" value="other"
          checked={formData.residence === 'other'} onChange={handleChange} /> Other</label>
      </div>

      <div className="radio-group">
        <span>Receive Bill via Email?</span>
        <label><input type="radio" name="bill_via_email" value="yes"
          checked={formData.bill_via_email === 'yes'} onChange={handleChange} /> Yes</label>
        <label><input type="radio" name="bill_via_email" value="no"
          checked={formData.bill_via_email === 'no'} onChange={handleChange} /> No</label>
      </div>

      <div className="form-row">
        <div className="form-field field-lg">
          <label>Email Address</label>
          <input type="text" name="email"
            value={formData.email} onChange={handleChange}
            placeholder="e.g. name@email.com" />
        </div>
      </div>

      <div className="radio-group">
        <span>Number of Lines Required:</span>
        <label><input type="radio" name="lines_required" value="1"
          checked={formData.lines_required === '1'} onChange={handleChange} /> 1</label>
        <label><input type="radio" name="lines_required" value="2"
          checked={formData.lines_required === '2'} onChange={handleChange} /> 2</label>
      </div>

    </div>
  );
}

export default CustomerDetails;
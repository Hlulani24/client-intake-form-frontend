function PaymentDetails({ formData, handleChange }) {
  return (
    <div className="form-section">
      <h2>Payment Details - Debit Order</h2>

      <div className="radio-group">
        <span>Bank Account Type:</span>
        <label><input type="radio" name="bank_type" value="current"
          checked={formData.bank_type === 'current'} onChange={handleChange} /> Current</label>
        <label><input type="radio" name="bank_type" value="saving"
          checked={formData.bank_type === 'saving'} onChange={handleChange} /> Saving</label>
      </div>

      <div className="form-row">
        <div className="form-field field-sm">
          <label>Age of Account</label>
          <input type="date" name="age_of_account"
            value={formData.age_of_account} onChange={handleChange} />
        </div>
        <div className="form-field field-sm">
          <label>Debit Order Date</label>
          <input type="text" name="debit_order_date"
            value={formData.debit_order_date} onChange={handleChange}
            placeholder="e.g. 1" />
        </div>
        <div className="form-field field-md">
          <label>Account Holder's Name</label>
          <input type="text" name="acc_holder_name"
            value={formData.acc_holder_name} onChange={handleChange}
            placeholder="Full name as on bank card" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field field-md">
          <label>Bank Name</label>
          <input type="text" name="bank_name"
            value={formData.bank_name} onChange={handleChange}
            placeholder="e.g. FNB, ABSA, Nedbank" />
        </div>
        <div className="form-field field-md">
          <label>Account No</label>
          <input type="text" name="account_no"
            value={formData.account_no} onChange={handleChange}
            placeholder="e.g. 62012345678" />
        </div>
        <div className="form-field field-md">
          <label>Branch Name</label>
          <input type="text" name="branch_name"
            value={formData.branch_name} onChange={handleChange}
            placeholder="e.g. Sandton City" />
        </div>
        <div className="form-field field-sm">
          <label>Bank Code</label>
          <input type="text" name="bank_code"
            value={formData.bank_code} onChange={handleChange}
            placeholder="e.g. 250655" />
        </div>
      </div>

      <div className="legal-text">
        Please deduct payment as per the payment method selected above in favour of
        Vodacom (Pty) LTD with the total amount owing per month under this agreement.
        <br /><br />
        Authorised Signatory Name: <input type="text" placeholder="Full name" /> &nbsp;
        Signature: <input type="text" placeholder="Sign here" />
      </div>

    </div>
  );
}

export default PaymentDetails;
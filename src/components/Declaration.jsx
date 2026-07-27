function Declaration({ formData, handleChange }) {
  return (
    <div className="form-section">
      <h2>Declaration</h2>
      <div className="legal-text">
        I hereby warrant that I have the requisite authorisation to provide the information
        contained here and that I have read, understood and agree to be bound by the terms
        and conditions that accompany this application form. I declare that the information
        given above is true and correct and hereby consent to Vodacom (Pty) Ltd credit
        vetting this application.
        <br /><br />
        Vodacom will process your personal information in accordance with its Privacy Statement
        available at{' '}
        <a href="https://www.vodacom.co.za/vodacom/privacy-policy/terms"
          target="_blank" rel="noreferrer">
          www.vodacom.co.za/privacy-policy
        </a>.
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

export default Declaration;

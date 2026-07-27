import { useState } from 'react';
import './App.css';
import logo from './assets/Logo.png';
import CustomerDetails from './components/CustomerDetails';
import RelativeDetails from './components/RelativeDetails';
import EmploymentDetails from './components/EmploymentDetails';
import PaymentDetails from './components/PaymentDetails';
import Suretyship from './components/Suretyship';
import Declaration from './components/Declaration';
import Dashboard from './components/Dashboard';


function App() {
  const [formData, setFormData] = useState({
    // Customer Details
    title: '', initials: '', surname: '', first_name: '',
    gender: '', marital_status: '', identity_type: '',
    id_passport_no: '', passport_country: '', passport_exp_date: '',
    date_of_birth: '', home_tel: '', unit_no: '', building_name: '',
    street_no: '', street_name: '', town_city: '', province: '',
    physical_code: '', postal_address: '', postal_code: '',
    residence: '', bill_via_email: '', email: '', lines_required: '',

    // Relative Details
    relative_first_name: '', relative_surname: '',
    relative_tel: '', relative_relationship: '',

    // Employment Details
    company_name: '', occupation: '', salary_date: '', gross_income: '',

    // Payment Details
    bank_type: '', age_of_account: '', debit_order_date: '',
    acc_holder_name: '', bank_name: '', account_no: '',
    branch_name: '', bank_code: '',

    // Suretyship
    surety_title: '', surety_initials: '', surety_first_name: '',
    surety_surname: '', surety_relationship: '', surety_dob: '',
    surety_home_tel: '', surety_gender: '', surety_marital_status: '',
    surety_identity_type: '', surety_id_passport_no: '',
    surety_passport_country: '', surety_passport_exp_date: '',
    surety_employer: '', surety_occupation: '', surety_gross_income: '',
    surety_unit_no: '', surety_building_name: '', surety_street_no: '',
    surety_street_name: '', surety_town_city: '', surety_province: '',
    surety_code: ''
  });

  const [status, setStatus] = useState('');

  const [view, setView] = useState('form');

  if (view === 'dashboard') {
  return <Dashboard onBack={() => setView('form')} />;
}

  // One function handles ALL field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setStatus('Submitting...');
    try {
      const response = await fetch('https://vodacom-backend.onrender.com/submit-application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (result.success) {
        setStatus('Application submitted successfully!');
      } else {
        setStatus('Submission failed. Please try again.');
      }
    } catch (error) {
      setStatus('Could not connect to server. Please try again.');
    }
  };

  return (
    <div className="form-wrapper">

      <div className="form-header">
        <div className="header-left">
          <img src={logo} width="140" height="auto" alt="Vodacom Logo" />
          <div className="header-address">
            Vodacom Corporate Park, 082 Vodacom Boulevard<br />
            Midrand, 1685 South Africa<br />
            Private Bag X9904, Sandton 2146<br />
            Tel: 082 111 | Fax: 086 0082 082<br />
            <a href="https://www.vodacom.co.za" target="_blank" rel="noreferrer">
              www.vodacom.co.za
            </a><br />
            Vodacom (Pty) Ltd<br />
            Reg No: 1993/003367/07 | VAT Reg No: 4010139121
          </div>
        </div>

        <div className="header-right">
          <h2>Individual Application Form</h2>
          <div className="form-row">
            <label>Contract No:</label>
            <input type="text" name="contract_no" onChange={handleChange} />
          </div>
          <div className="form-row">
            <label>Referral No:</label>
            <input type="text" name="referral_no" onChange={handleChange} />
          </div>
          <div className="form-row">
            <label>Approval No:</label>
            <input type="text" name="approval_no" onChange={handleChange} />
          </div>
          <div className="form-row">
            <label>Account No:</label>
            <input type="text" name="account_no" onChange={handleChange} />
          </div>

          <button
  onClick={() => setView('dashboard')}
  style={{
    marginTop: '10px',
    backgroundColor: '#e60000',
    color: 'white',
    border: 'none',
    padding: '8px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '13px'
  }}>
  View Dashboard →
</button>

        </div>
      </div>

      <CustomerDetails formData={formData} handleChange={handleChange} />
      <RelativeDetails formData={formData} handleChange={handleChange} />
      <EmploymentDetails formData={formData} handleChange={handleChange} />
      <PaymentDetails formData={formData} handleChange={handleChange} />
      <Suretyship formData={formData} handleChange={handleChange} />
      <Declaration formData={formData} handleChange={handleChange} />

      {status && (
        <div style={{
          padding: '12px 30px',
          color: status.includes('successfully') ? 'green' : 'red',
          fontWeight: '600'
        }}>
          {status}
        </div>
      )}

      <div className="form-submit">
        <button type="button" onClick={handleSubmit}>
          Submit Application
        </button>
      </div>

    </div>
  );
}

export default App;
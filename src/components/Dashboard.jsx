import { useState, useEffect } from 'react';

function Dashboard({ onBack }) {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://vodacom-backend.onrender.com')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setApplications(data.applications);
        } else {
          setError('Failed to load applications');
        }
        setLoading(false);
      })
      .catch(() => {
        setError('Could not connect to server');
        setLoading(false);
      });
  }, []);

  return (
    <div className="form-wrapper">

      <div className="form-header">
        <div className="header-left">
          <h1 style={{ color: '#e60000', fontSize: '22px', fontWeight: '700' }}>
            Vodacom Applications Dashboard
          </h1>
          <p style={{ color: '#555', fontSize: '13px' }}>
            All submitted applications
          </p>
        </div>
        <div className="header-right">
          <button
            onClick={onBack}
            style={{
              background: 'none',
              border: '2px solid #e60000',
              color: '#e60000',
              padding: '8px 20px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '13px'
            }}>
            ← Back to Form
          </button>
        </div>
      </div>

      <div style={{ padding: '20px 30px' }}>

        {loading && (
          <p style={{ color: '#777', fontSize: '14px' }}>Loading applications...</p>
        )}

        {error && (
          <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>
        )}

        {!loading && !error && applications.length === 0 && (
          <p style={{ color: '#777', fontSize: '14px' }}>No applications submitted yet.</p>
        )}

        {!loading && !error && applications.length > 0 && (
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
            <thead>
              <tr style={{ backgroundColor: '#e60000', color: 'white' }}>
                <th style={th}>ID</th>
                <th style={th}>Name</th>
                <th style={th}>Surname</th>
                <th style={th}>Email</th>
                <th style={th}>Tel</th>
                <th style={th}>Company</th>
                <th style={th}>Submitted</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app, index) => (
                <tr
                  key={app.id}
                  style={{ backgroundColor: index % 2 === 0 ? '#fff' : '#f9f9f9' }}>
                  <td style={td}>{app.id}</td>
                  <td style={td}>{app.title} {app.first_name}</td>
                  <td style={td}>{app.surname}</td>
                  <td style={td}>{app.email || '—'}</td>
                  <td style={td}>{app.home_tel || '—'}</td>
                  <td style={td}>{app.company_name || '—'}</td>
                  <td style={td}>
                    {new Date(app.submitted_at).toLocaleDateString('en-ZA')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

      </div>

    </div>
  );
}

// Table styles as variables to keep JSX clean
const th = {
  padding: '10px 14px',
  textAlign: 'left',
  fontWeight: '600',
  letterSpacing: '0.5px',
  fontSize: '12px',
  textTransform: 'uppercase'
};

const td = {
  padding: '10px 14px',
  borderBottom: '1px solid #f0f0f0',
  color: '#333'
};

export default Dashboard;
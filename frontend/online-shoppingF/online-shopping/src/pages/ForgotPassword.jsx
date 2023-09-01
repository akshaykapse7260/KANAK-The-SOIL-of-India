import React, { useState } from 'react';

const ForgotEmail = () => {
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [resetToken, setResetToken] = useState('');
  const [enteredToken, setEnteredToken] = useState('');
  const [showVerification, setShowVerification] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const generateResetToken = () => {
    // Generate a random token (you can modify this logic as needed)
    const token = Math.random().toString(36).substring(7);
    setResetToken(token);
    setShowVerification(true);
  };

  const verifyToken = () => {
    if (enteredToken === resetToken) {
      // Token matched, perform password reset action here
      console.log('Token matched, initiate password reset');
    } else {
      // Token didn't match, show error message or take appropriate action
      console.log('Token does not match');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateResetToken();
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} style={formStyle}>
        <h3 style={headingStyle}>Forgot Email</h3>
        <input type="email" name="email" id="email" placeholder="Email Id" required style={inputStyle} onChange={handleEmailChange} />
        <input type="text" name="mobile" id="mobile" placeholder="Mobile Number" required style={inputStyle} onChange={handleMobileChange} />
        <button type="submit" style={buttonStyle}>Send</button>
      </form>
      {showVerification && (
        <form style={formStyle}>
          <input type="text" placeholder="Enter verification code" value={enteredToken} onChange={(e) => setEnteredToken(e.target.value)} style={inputStyle} />
          <button type="button" onClick={verifyToken} style={buttonStyle}>Verify</button>
        </form>
      )}
    </div>
  );
}



const formStyle = {
  background: 'white',
  display: 'flex',
  flexDirection: 'column',
  padding: '2vw 4vw',
  width: '90%',
  maxWidth: '600px',
  borderRadius: '10px',
};

const headingStyle = {
  color: '#555',
  fontWeight: '800',
  marginBottom: '20px',
};

const inputStyle = {
  border: '0',
  margin: '10px 0',
  padding: '20px',
  outline: 'none',
  background: '#f5f5f5',
  fontSize: '16px',
};

const buttonStyle = {
  padding: '15px',
  background: '#0e908a',
  color: '#fff',
  fontSize: '18px',
  border: '0',
  outline: 'none',
  cursor: 'pointer',
  width: '150px',
  margin: '20px auto 0',
  borderRadius: '30px',
};

export default ForgotEmail;

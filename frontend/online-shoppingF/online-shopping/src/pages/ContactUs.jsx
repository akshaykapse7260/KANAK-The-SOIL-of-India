import React from 'react';

const ContactUs = () => {
  return (
    <div className="container">
      <form target="_blank" action="https://formsubmit.co/akshaykapse11@gmail.com" method="POST" style={formStyle}>
        <h3 style={headingStyle}>Get In Touch</h3>
        <input type="text" name="name" id="name" placeholder="Your Name" required style={inputStyle} />
        <input type="email" name="email" id="email" placeholder="Email Id" required style={inputStyle} />
        <input type="text" name="phone" id="phone" placeholder="Phone no" required style={inputStyle} />
        <textarea id="message" name="message" rows="4" placeholder="How can we help you?" style={textareaStyle} />
        <button type="submit" style={buttonStyle}>Send</button>
      </form>
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

const textareaStyle = {
  border: '0',
  margin: '10px 0',
  padding: '20px',
  outline: 'none',
  background: '#f5f5f5',
  fontSize: '16px',
  resize: 'none',
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

// export default ContactUs;
// import React, { useState } from 'react';

// const ContactUs = () => {
//   const [email, setEmail] = useState('');
  
//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const formAction = `https://formsubmit.co/${email}`;

//   return (
//     <div className="container">
//       <form target="_blank" action={formAction} method="POST" style={formStyle}>
//         <h3 style={headingStyle}>Get In Touch</h3>
//         <input type="text" name="name" id="name" placeholder="Your Name" required style={inputStyle} />
//         <input type="email" name="email" id="email" placeholder="Email Id" required style={inputStyle} onChange={handleEmailChange} />
//         <input type="text" name="phone" id="phone" placeholder="Phone no" required style={inputStyle} />
//         <textarea id="message" name="message" rows="4" placeholder="How can we help you?" style={textareaStyle} />
//         <button type="submit" style={buttonStyle}>Send</button>
//       </form>
//     </div>
//   );
// }

// const formStyle = {
//   background: 'white',
//   display: 'flex',
//   flexDirection: 'column',
//   padding: '2vw 4vw',
//   width: '90%',
//   maxWidth: '600px',
//   borderRadius: '10px',
// };

// const headingStyle = {
//   color: '#555',
//   fontWeight: '800',
//   marginBottom: '20px',
// };

// const inputStyle = {
//   border: '0',
//   margin: '10px 0',
//   padding: '20px',
//   outline: 'none',
//   background: '#f5f5f5',
//   fontSize: '16px',
// };

// const textareaStyle = {
//   border: '0',
//   margin: '10px 0',
//   padding: '20px',
//   outline: 'none',
//   background: '#f5f5f5',
//   fontSize: '16px',
//   resize: 'none',
// };

// const buttonStyle = {
//   padding: '15px',
//   background: '#0e908a',
//   color: '#fff',
//   fontSize: '18px',
//   border: '0',
//   outline: 'none',
//   cursor: 'pointer',
//   width: '150px',
//   margin: '20px auto 0',
//   borderRadius: '30px',
// };

export default ContactUs;

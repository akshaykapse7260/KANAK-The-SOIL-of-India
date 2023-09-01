

// const AboutUs = () => {
//   return (
//     <div className="text-color ms-5 me-5 mr-5 mt-3">
//       <b>
//       Online shopping is a process whereby consumers directly buy goods, services etc. from a seller without an intermediary service over the Internet. Shoppers can visit web stores from the comfort of their house and shop as by sitting in front of the computer.Ecommerce, also known as electronic commerce or internet commerce, refers to the buying and selling of goods or services using the internet, and the transfer of money and data to execute these transactions.

//         <br />
//         <br />
//         In existing system shopping can done in a manual way, the customer has to go for shopping, and then he is having the possibility to choose the products what ever he wants. Selling online also has its advantages when it comes to convincing customers you're the best in the industry. Your website can inform customers about your sales, the quality of your products, and why they should buy from you. You can also show customer reviews, so people know they're buying from a reputable brand. Doing business electronically describes e‐commerce. E-commerce (EC), an abbreviation for electronic commerce, is the buying and selling of goods and services, or the transmitting of funds or data, over an electronic network, primarily the internet.

//         <br />
//         <br />

//         The online shopping system is fast gaining media for to sale or purchase items from anywhere and anytime. It is basically based on Internet, It is related with B2C (Business to Customer) model and status of the design and development of e-commerce platform.E-business or Online business means business transactions that take place online with the help of the internet. The term e-business came into existence in the year 1996. E-business is an abbreviation for electronic business. Therefore, the buyer and the seller do not meet personally. E-commerce is directly link to your business promotions, as it is the age of digital media. Making your business available online is crucial to your business development such as, highly convenience, wide exposure, global customer, easy to run, etc. 

        
//       </b>
//     </div>
//   );
// };

// export default AboutUs;


import React from 'react';
import emailIcon from '../images/logo3.png';

import logo from "../images/user-icon.jpg";
import Carousel from './Carousel';
const AboutUs = () => {
  const containerStyle = {
    margin: '20px',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    border: '1px solid #ddd',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
    alignItems: 'center',
  };

  const textStyle = {
    fontWeight: 'bold',
    color: '#333',
    lineHeight: '1.6',
  };

  const imageStyle = {
    maxWidth: '100%',
    height: '100px',
    marginRight: '10px',
  };

  const emailStyle = {
    display: 'flex',
    alignItems: 'right',
    color: '#777',
    marginRight: '0px',
  };

  const smallIconStyle = {
    marginRight: '10px',
    width: '10px',
    height: '10px',
  };

  const cardStyle = {
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    margin: '8px',
  };

  const aboutSectionStyle = {
    padding: '50px',
    textAlign: 'center',
    backgroundColor: '#474e5d',
    color: 'white',
  };

  const rowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  };

  const columnStyle = {
    flex: '25%', // Each team member should take 25% of the width for 4 people in a row
    marginBottom: '16px',
    padding: '0 8px',
  };

  const containerTextStyle = {
    padding: '0 16px',
  };

  const titleStyle = {
    color: 'grey',
  };

  const buttonStyle = {
    border: 'none',
    outline: '0',
    display: 'inline-block',
    padding: '8px',
    color: 'white',
    backgroundColor: '#000',
    textAlign: 'center',
    cursor: 'pointer',
    width: '100%',
  };

  const buttonHoverStyle = {
    backgroundColor: '#555',
  };

  return (
    <div style={containerStyle}>
    
    <div>
        <img src={emailIcon} alt="Email Icon" style={imageStyle} />
        <span style={emailStyle}>
          <img src={emailIcon} alt="Email Icon" style={smallIconStyle} />
        </span>
      </div>
      <div>
        <p style={textStyle}>
          <h4>Hello, we are Kanak</h4>
          <h4>Welcome to our platform where you can find various supplies required for making your farming experience seamless and easy. We provide a wide range of materials including <b>seeds, fertilizers, pesticides, grains, plants, flowers, tools, etc.</b></h4>
          <br />
          <h4>We hope that you have a wonderful experience here.Welcome to our thriving online marketplace dedicated to enhancing agricultural practices and empowering farmers across the country. With a vision deeply rooted in revolutionizing the way farming essentials are accessed and procured, we proudly introduce ourselves as a leading platform that connects farmers, suppliers, and enthusiasts with an extensive range of high-quality farming products. Our commitment to fostering agricultural excellence drives us to provide a seamless and enriching experience for every stakeholder in the farming community.</h4>
          <br />
         <h4> <b>Thank you for choosing us</b></h4>

        </p>
      </div>
      <div>
        <h2 style={{ textAlign: 'center' }}>Our Team</h2>
        <div className="row" style={rowStyle}>
          <div className="column" style={columnStyle}>
            <div className="card" style={cardStyle}>
            <img src={logo} alt="Jane" style={{ width: '15%' }} />
              <div className="container" style={containerTextStyle}>
                <h2>Akshay Tiwari</h2>
                <p className="title"></p>
                
                <p>akshay@kanak.com</p>
                <p><button className="button" style={buttonStyle}>Member</button></p>
              </div>
            </div>
          </div>

          <div className="column" style={columnStyle}>
            <div className="card" style={cardStyle}>
              <img src={logo} alt="Mike" style={{ width: '15%' }} />
              <div className="container" style={containerTextStyle}>
                <h2>Pratyush pathak</h2>
                <p className="title"></p>
                
                <p>pratiyush@kanak.com</p>
                <p><button className="button" style={buttonStyle}>Member</button></p>
              </div>
            </div>
          </div>

          <div className="column" style={columnStyle}>
            <div className="card" style={cardStyle}>
              <img src={logo} alt="John" style={{ width: '15%' }} />
              <div className="container" style={containerTextStyle}>
                <h2>Akshay Kapse</h2>
                <p className="title"></p>
                <p>Kapse@kanak.com</p>
                <p><button className="button" style={buttonStyle}>Leader</button></p>
              </div>
            </div>
          </div>

          <div className="column" style={columnStyle}>
            <div className="card" style={cardStyle}>
              <img src={logo} alt="John" style={{ width: '15%' }} />
              <div className="container" style={containerTextStyle}>
                <h2>Prashant patel</h2>
                <p className="title"></p>
                
                <p>prashant@kanak.com</p>
                <p><button className="button" style={buttonStyle}>Member</button></p>
              </div>
            </div>
          </div>
        </div>
      </div>
     <Carousel/>
     
     
    </div>
  );
};

export default AboutUs;
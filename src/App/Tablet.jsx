import React from 'react';
import './App.css';

import Navbar from '../Components/Navbar/Navbar.jsx';
import Banner from '../Components/Banner/Banner.jsx';
import Form   from '../Components/Form/Form.jsx'; 
import ContentBar from '../Components/ContentBar/ContentBar.jsx';
import Steps from '../Components/Steps/Steps.jsx';
import FooterForm from '../Components/Form/FooterForm.jsx';
import Footer from '../Components/Footer/Footer.jsx';



function Tablet() {
  return (
    <div className="App">
        <Navbar />
        <Banner style={{ flexDirection: 'column', justifyContent: 'end' }}>
            <ContentBar />
            <Form />
        </Banner>
        <Steps />
        <FooterForm />

        <Footer />
    </div>
  );
}

export default Tablet;

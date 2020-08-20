import React from 'react';
import './App.css';

import Navbar from '../Components/Navbar/Navbar.jsx';
import Banner from '../Components/Banner/Banner.jsx';
import Form   from '../Components/Form/Form.jsx'; 
import ContentBar from '../Components/ContentBar/ContentBar.jsx';
import Steps from '../Components/Steps/Steps.jsx';
import Footer from '../Components/Footer/Footer.jsx';
import Inputs from '../Components/Form/Inputs.jsx'



function Mobile() {
  return (
    <div className="App">
        <Navbar mobile={true} />
        <Banner style={{ flexDirection: 'column', justifyContent: 'end' }}>
            <ContentBar />
            <Form />
        </Banner>
        <Steps />
        <div style={{ height: 'auto' , display: 'flex', flexDirection: 'column', marginTop: '60px', marginBottom: '60px'}}>
            <div style={{ height: 'auto' , backgroundColor: 'rgba(204, 0, 0, 0.1)', padding: '45px', fontSize: '20px', fontWeight: 'bold', marginBottom: '30px'}} >
                <p>Leave your information now and you will be on your way to success</p>
            </div>
            <form>
              <Inputs />
            </form>
        </div>

        <Footer />
    </div>
  );
}

export default Mobile;

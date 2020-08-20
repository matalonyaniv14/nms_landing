import React from 'react';
import { useLocation} from 'react-router-dom';

import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }


const Thanks = () => {
    let match = useQuery();
    const name = match.get('name') ?? '';
    return (
        <div>
            <Navbar mobile={true}/>
            <div style={{height: '80vh'}}>
                <div style={{ height: '100%', textAlign: 'center',color: 'white', margin: '0 auto', width: '100%', backgroundColor: '#84dbc7' }} >
                    <p style={{ paddingTop: '20px', fontSize: '40px'}}>
                        Thanks { name }, We'll get in touch soon.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Thanks;
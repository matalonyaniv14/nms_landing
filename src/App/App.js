import React from 'react';
import Desktop from './Desktop';
import Tablet from './Tablet';
import Mobile from './Mobile';
import { isTablet, isMobile } from '../Utils/matchDevice.jsx'

function App() {
  if ( isTablet() ) {
    return ( <> <Tablet /> </>);
  }

  if ( isMobile() ) {
    return ( <> <Mobile /> </> );
  }

  return ( <> <Desktop /> </>);
}

export default App;

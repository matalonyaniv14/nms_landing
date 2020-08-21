import React from 'react';
import Desktop from './Desktop';
import Tablet from './Tablet';
import Mobile from './Mobile';
import Thanks from '../Components/Thanks/Thanks'
import { isTablet, isMobile } from '../Utils/matchDevice.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const handleApp = () => {    
    if ( isTablet() ) {
      return ( <> <Tablet /> </>);
    }
  
    if ( isMobile() ) {
      return ( <> <Mobile /> </> );
    }
  
    return ( <> <Desktop /> </>);
  }

  return (
    <Router>
        <Switch>
            <Route path='/sign-up'>
                <Thanks />
            </Route>
            <Route path='/'>
              { handleApp() }
            </Route>
        </Switch>
      </Router>
  )

}

export default App;

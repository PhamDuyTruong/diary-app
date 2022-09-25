import React, {Suspense, lazy} from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Loading from './utils/Loading';

import {LanguageProvider} from './context/Language';
import LanguageOption from './Components/LanguageOption';
import './index.css';

const Home = lazy(() => import("./Components/HomePage"));
const Calendar = lazy(() => import("./Components/Calendar"));

function App() {
  return (
     <LanguageProvider>
          <div className='h-screen bg-gradient-to-br from-lila-light  to-rose-light'>
              <Navbar />
              <div className='container mx-auto'>
                  <LanguageOption />
              </div>
              <Suspense fallback={<Loading />}>
                  <Switch>
                       <Route exact path="/">
                            <Home />
                       </Route>
                       <Route exact path="/calendar">
                           <Calendar />
                       </Route>
                  </Switch>
              </Suspense>
          </div>
     </LanguageProvider>
  );
}

export default App;

import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Loading from './utils/Loading';
import { useAuth0 } from '@auth0/auth0-react';
import { LanguageProvider } from './context/Language';
import LanguageOption from './Components/LanguageOption';
import './index.css';
import ProtectedRoute from './auth/protected-route';

const Home = lazy(() => import("./views/home"));
const Calendar = lazy(() => import("./views/calendar"));
const Profile = lazy(() => import("./views/profile"))

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }
  
  return (
     <LanguageProvider>
          <div className='h-screen bg-gradient-to-br from-lila-light  to-rose-light'>
              <Navbar />
              <div className='container mx-auto'>
                  <LanguageOption />
              </div>
              <Suspense fallback={<Loading />}>
                  <Switch>
                    <Route exact path="/" component={Home} />
                     <ProtectedRoute path="/profile" component={Profile} />
                    <ProtectedRoute path="/calendar" component={Calendar} />
                  </Switch>
              </Suspense>
          </div>
     </LanguageProvider>
  );
}

export default App;

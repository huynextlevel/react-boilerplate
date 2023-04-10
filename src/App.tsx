import React, { useEffect } from 'react';
import {
  Route,
  Routes,
  BrowserRouter,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import routes from './routes';
import * as appActions from 'src/store/action/app';
import ScrollIntoView from 'src/components/ScrollIntoView';

const MOBILE_BREAKPOINT = 900; // Define mobile breakpoint of your website.

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth <= MOBILE_BREAKPOINT) {
        dispatch(appActions.checkIsMobile(true));
      } else {
        dispatch(appActions.checkIsMobile(false));
      }
    }

    window.addEventListener('resize', updateSize);

    return () => window.removeEventListener('resize', updateSize);
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ScrollIntoView>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </ScrollIntoView>
    </BrowserRouter>
  );
}

export default App;

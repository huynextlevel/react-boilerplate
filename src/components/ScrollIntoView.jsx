import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import { withRouter } from 'src/hooks';

const ScrollIntoView = ({ children }) => {
  const prevLocation = useRef();
  const location = useLocation();

  useEffect(() => {
    if (prevLocation.current !== location.pathname) {
      window.scrollTo(0, 0);
      prevLocation.current = location.pathname;
    }
  }, [location]);

  return children;
};

ScrollIntoView.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object
};

export default withRouter(ScrollIntoView);

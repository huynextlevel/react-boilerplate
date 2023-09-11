import { useEffect } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import routes from './routes'
import { checkIsMobile } from 'src/store/action/app'

const MOBILE_BREAKPOINT = 900 // Define mobile breakpoint of your website.

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth <= MOBILE_BREAKPOINT) {
        dispatch(checkIsMobile(true))
      } else {
        dispatch(checkIsMobile(false))
      }
    }

    window.addEventListener('resize', updateSize)

    return () => window.removeEventListener('resize', updateSize)
  }, [dispatch])
  console.log(process.env.REACT_APP_URL)

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App

import {
  useRef,
  useEffect
} from 'react'
import { useLocation } from 'react-router-dom'

import { withRouter } from 'src/hooks'

interface IProps {
  children: any
}

const ScrollIntoView = ({ children }: IProps) => {
  const prevLocation = useRef<string | null>()
  const location = useLocation()

  useEffect(() => {
    if (prevLocation.current !== location.pathname) {
      window.scrollTo(0, 0)
      prevLocation.current = location.pathname
    }
  }, [location])

  return children
}

export default withRouter(ScrollIntoView)

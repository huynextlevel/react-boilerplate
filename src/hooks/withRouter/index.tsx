import {
  useParams,
  useLocation,
  useNavigate
} from 'react-router-dom'

type IComponentWithRouterProp = {
  [x: string]: any
}

export function withRouter(Component: Function): Function {
  function ComponentWithRouterProp(
    props: IComponentWithRouterProp
  ): JSX.Element {
    let params = useParams()
    let location = useLocation()
    let navigate = useNavigate()

    return (
      <Component
        {...props}
        router={{
          params,
          location,
          navigate
        }}
      />
    )
  }

  return ComponentWithRouterProp
}

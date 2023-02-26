import React from 'react';
import { Route, Redirect } from 'react-router-dom'


function ProtectedRoute ({component: Component, isAuthenticated, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if(isAuthenticated === true) {
          console.log(props);
          const loc = props.location.pathname;
          console.log(loc);
          if ((loc === '/' || loc === '/login' || loc === '/register') && props.location.state === undefined) {
            return <Redirect to={{pathname: '/listpage', state: props.location}} />
          } else {
            return <Redirect to={{pathname: props.location.state.from.pathname, state: props.location}} />
          }
        } else {
        return <Component {...props} />
        }
        }}
    />
  )
}

export default ProtectedRoute;
import React, { Component } from 'react'
import Login from './Login'
import Register from './Register'
import { connect } from 'react-redux'
import { Route, Switch, Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import PropTypes from 'prop-types'
import './style.css'

export class HomePage extends Component {
  static propTypes = {
    button: PropTypes.bool,
    isAuthenticated: PropTypes.bool
  }

  render () {
    return (
      <div className='HomeContainer'>
        <div className='main'>
          <br></br>
          <h1>
            {' '}
            <strong className='text-primary'>List</strong>
            <span>Wala</span>
          </h1>
          <br />
          <div class='intro-content'>
            <p>
              A ToDo List that supportinsuser authentication, sessions,
              protected routes, CRUD functions on descriptions, checklists and
              status changes and more
            </p>
          </div>
          <br></br>
          <div>
            <Switch>
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
            </Switch>

            {this.props.button && (
              <Link className='divStyle' to='/login'>
                <Button size='lg' color='primary'>
                  Sign In
                </Button>
              </Link>
            )}

            {this.props.button && (
              <Link className='divStyle' to='/register'>
                <Button size='lg' color='primary'>
                  Register
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  button: state.ui.button,
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(HomePage)

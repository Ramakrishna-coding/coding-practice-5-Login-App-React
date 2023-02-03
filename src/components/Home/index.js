import {Component} from 'react'
import './index.css'
import LoginButton from 'Login'
import LogoutButton from 'Logout'
import ChangeHeading from 'Message'

class Home extends Component {
  state = {button: 'Login'}

  clickButton = () => {
    this.setState(prevState => ({button: prevState.button}))
  }

  render() {
    const {button} = this.state
    let buttonText
    let message
    if (button === 'Login') {
      buttonText = 'Logout'
      message = 'Welcome User'
    } else {
      buttonText = 'Login'
      message = 'Please Login'
    }
    return (
      <div className="bg-container">
        <div className="linear-container">
          <ChangeHeading message={message} />
          {buttonText === 'Login' ? (
            <LoginButton text={buttonText} />
          ) : (
            <LogoutButton text={buttonText} />
          )}
        </div>
      </div>
    )
  }
}

export default Home

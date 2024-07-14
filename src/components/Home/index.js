// Write your code here
import {Component} from 'react'
import './index.css'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {isLogin: false}
  isLoggedIn = () => {
    const {isLogin} = this.state
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }
  render() {
    const {isLogin} = this.state
    return (
      <div className="container">
        <div className="home">
          <Message isLogin={isLogin} />
          {isLogin ? (
            <Logout logout={this.isLoggedIn} />
          ) : (
            <Login login={this.isLoggedIn} />
          )}
        </div>
      </div>
    )
  }
}
export default Home

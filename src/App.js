import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: true,
  }
  // ------------------conditional Rendering--------------------
  // --------{1} Using [If...Else] (adding logic inside function)------
  //   authorizationButton = () => {
  //     const {isLoggedIn} = this.state
  //     // if isLoggedIn === true [output:Logout]
  //     // else [output:Login]
  //     if (isLoggedIn === true) {
  //       return <button type="button">Logout</button>
  //     }
  //     return <button type="button">Login</button>
  //   }
  // -------------------------------------------------------------------

  render() {
    // ---{2} Using [Element variable] (adding logic inside render())---
    // const {isLoggedIn} = this.state
    // let authorizeButton
    // if (isLoggedIn === true) {
    //   authorizeButton = <button type="button">Logout</button>
    // } else {
    //   authorizeButton = <button type="button">Login</button>
    // }
    // ------------------------------------------------------------------
    // ---{3} Using [Ternary operator] (adding logic inside render())---
    //  const {isLoggedIn} = this.state
    // ------------------------------------------------------------------
    // ---{3} Using [Logical && operator] (adding logic inside render())---
    const {isLoggedIn} = this.state
    return (
      <div className="container">
        <Welcome />
        {/* [1] {this.authorizationButton()} */}
        {/* [2] {authorizeButton} */}
        {/* [3]
        {isLoggedIn ? (
          <button type="button">Logout</button>
        ) : (
          <button type="button">Login</button>
        )}
         */}
        {isLoggedIn && <button type="button">Logout</button>}
        {!isLoggedIn && <button type="button">Login</button>}
      </div>
    )
  }
}

export default App

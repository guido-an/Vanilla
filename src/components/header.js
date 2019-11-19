import {Link} from "gatsby"
import React, {useState} from "react"
import {graphql} from "gatsby"
import Logo from "./logo"
import "./header.css"

{
  /* site title gets from layout component*/
}

const Header = ({data}) => {
  const [visible, setVisible] = useState(false)

  // showMobileMenu = () => {
  //   this.setState(prevState => {
  //     return { visible: !prevState.visible }
  //   })
  // }

  // access data and use it accordingly
  const {home, about, services, contact} = data.file.childIndexJson

  return (
    <header className="header">
      {visible ? (
        <div className="header-container">
          <div className="logo-container">
            <Logo />
          </div>
          <div>
            <nav>
              <ul>
                <li>{home}</li>
                <li>{about}</li>
                <li>{services}</li>
                <li>{contact}</li>
                <li>{visible}</li>
              </ul>
            </nav>
          </div>
          <div>
            <button onClick={() => setVisible(!visible)}>icon</button>
          </div>
        </div>
      ) : (
        <button onClick={() => setVisible(!visible)}>icon</button>
      )}
    </header>
  )
}

export default Header

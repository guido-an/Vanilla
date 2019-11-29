import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Logo from "./logo"
import "./header.css"
import HamburgerMenu from "react-hamburger-menu"
import LocalizedLink from "./LocalizedLink"
import Cta from "./cta"

const Header = ({ data, linkGetStarted }) => {
  const [visible, setVisible] = useState(false)
  const [Scroll, setScroll] = useState(false)   // stateCheck for Scroll
  console.log(Scroll,"checkScroll")
  const {
    home,
    homeLink,
    about,
    aboutLink,
    services,
    contact,
    contactLink,
  } = data.header.childHeaderJson

  const listenScrollEvent = () => {
    if (window.scrollY > 200) {    // Scroll check / you can define your scroll in pixels eg.200
      setScroll(true)   // if windowScroll to predifined position setState "true"
    } else {
      setScroll(false)  // if windowNOTScrolled or set back to its starting postion setState "false"
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)    // add event listner 
  });

  return (
    <section>
      <header id="header-mobile" className="header">
        <div className="mobile-header-container">
          <div className="logo-container">
            <LocalizedLink to={homeLink}>
              <Logo />
            </LocalizedLink>
          </div>
          <div className="burger-icon">
            <HamburgerMenu
              isOpen={visible}
              menuClicked={() => setVisible(!visible)}
              width={30}
              height={18}
              strokeWidth={3}
              rotate={0}
              color="black"
              borderRadius={0}
              animationDuration={0.1}
            />
          </div>
        </div>
        {visible && (
          <nav className="nav-mobile">
            <ul>
              <LocalizedLink to={homeLink}>{home}</LocalizedLink>
              <LocalizedLink to={aboutLink}>{about}</LocalizedLink>
              <LocalizedLink to="#">{services}</LocalizedLink>
              <LocalizedLink to={contactLink}>{contact}</LocalizedLink>
            </ul>
            <div className="mobile-menu-cta"><Cta linkGetStarted={linkGetStarted} /></div>
          </nav>
        )}
      </header>
  
        <header id="header-desktop" className="header">
          <div className="desktop-header-container">
            <div className="logo-container">
              <LocalizedLink to={homeLink}>
              {!Scroll  &&  <Logo /> }    
              {/* {Scroll  &&  <Logo /> }     if scroll State 'true' unCommentThis & Add your changes in place of <logo/> */}
              </LocalizedLink>
            </div>
            <div>
              <nav className="nav-desktop">
                <ul>
                  <LocalizedLink to={homeLink}>{home}</LocalizedLink>
                  <LocalizedLink to={aboutLink}>{about}</LocalizedLink>
                  <LocalizedLink to="#">{services}</LocalizedLink>
                  <LocalizedLink to={contactLink}>{contact}</LocalizedLink>
                </ul>
              </nav>
            </div>
            <div className="cta-header-container">
              <LocalizedLink className="cta-header-btn" to="#">
                Premium Support
              </LocalizedLink>
            </div>
          </div>
        </header>

    </section>
  )
}

export default Header

import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import {LocaleProvider, LocaleConsumer} from '../constants/localeProviders'
import "./layout.css"



const Layout = ({ children, locale, data }) => {  // accesss data"

  return(  
    <LocaleProvider value={locale}>
      <>
      <Header dataHeader={data} />        {/*pass 'data' to header so it can use GraphQL query  */}
      <div>
      <main>{children}</main>
      <Footer />
      </div>
     </>
    </LocaleProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  path: PropTypes.string,
  locale: PropTypes.string.isRequired
}

Layout.defaultProps = {
  path: '/'
}


export default Layout
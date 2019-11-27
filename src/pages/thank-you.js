import React from 'react'
import {LocaleProvider} from '../constants/localeProviders'
import {Link } from "gatsby"
import Footer from "../components/footer"
import Logo from "../components/logo"



const thankYou = ({ pageContext: { locale }, data }) => {
    return(
<LocaleProvider value={locale}>
    <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 4%",
          }}
        >
          <Link to="/"><Logo /></Link>
          <Link
            style={{
              position: "relative",
              top: "35px",
              color: "#777",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: "500",
            }}
            to="/"
          >
            No, I don't want any advice
          </Link>
        </header>
        <div style={{height: "100vh", textAlign: "center"}}>
          <h1 style={{marginTop: "80px"}}>Grazie per averci contattato!</h1>
          <p>Avrei presto nostre notizie :) </p>
        </div>
     <Footer/>
    </LocaleProvider>
    )
  } 

  export default thankYou
import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import FooterCta from '../components/footerCta'
import PageBody from '../components/pageBody'
import './about.css'

const About = ({ pageContext: { locale }, data }) => {
  const { overtitle, title, subtitle, multiline1, photoOvertitle, photoTitle, photoSubtitle, titleSeo, descriptionSeo } = data.about.childAboutJson

  return (
    <Layout path='/' locale={locale} data={data}>
      <SEO title={titleSeo} description={descriptionSeo} />
      <PageBody
        bigIcon={data.bigIcon.childImageSharp.fluid}
        overtitle={overtitle}
        title={title}
        subtitle={subtitle}
        multiline1={multiline1}
      />
      <div className='about-photo-container'>
        <span className='overtitle-dark'>{photoOvertitle}</span>
        <h1>{photoTitle}</h1>
        <p className='subtitle-page'>
          {photoSubtitle}
        </p>
        <div className='photo-row-1'>
          <Img
            className='about-photo'
            fluid={data.vanillaTeam8.childImageSharp.fluid}
          />
          <Img
            className='about-photo'
            fluid={data.vanillaTeam6.childImageSharp.fluid}
          />
          <Img
            className='about-photo'
            fluid={data.vanillaTeam3.childImageSharp.fluid}
          />

        </div>
        <div className='photo-row-2'>
          <Img
            className='about-photo'
            fluid={data.vanillaTeam4.childImageSharp.fluid}
          />
          <Img
            className='about-photo'
            fluid={data.vanillaTeam9.childImageSharp.fluid}
          />
          <Img
            className='about-photo'
            fluid={data.vanillaTeam5.childImageSharp.fluid}
          />

        </div>
        <div className='photo-row-2'>
          <Img
            className='about-photo'
            fluid={data.vanillaTeam7.childImageSharp.fluid}
          />
          <Img
            className='about-photo'
            fluid={data.vanillaTeam1.childImageSharp.fluid}
          />
          <Img
            className='about-photo'
            fluid={data.vanillaTeam2.childImageSharp.fluid}
          />

        </div>
      </div>
      <FooterCta
        linkGetStarted={data.header.childHeaderJson.linkGetStarted}
        textGetStarted={data.header.childHeaderJson.textGetStarted}
        title={data.footerCta.childFooterCtaJson.title}
        subtitle={data.footerCta.childFooterCtaJson.subtitle}
      />
    </Layout>
  )
}

export const query = graphql`
  query About($locale: String) {
    header: file(name: { eq: $locale }, relativeDirectory: { eq: "header" }) {
      childHeaderJson {
        home
        homeLink
        about
        aboutLink
        services
        contact
        contactLink
        linkGetStarted
        textGetStarted
      }
    }
    about: file(name: { eq: $locale }, relativeDirectory: { eq: "about" }) {
      childAboutJson {
        overtitle
        title
        subtitle
        multiline1
        photoOvertitle,
        photoTitle,
        photoSubtitle
        titleSeo
        descriptionSeo
      }
    }
    bigIcon: file(relativePath: { eq: "vanilla-chi-siamo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 323, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    footerCta: file(
      name: { eq: $locale }
      relativeDirectory: { eq: "footer-cta" }
    ) {
      childFooterCtaJson {
        title
        subtitle
      }
    }
    vanillaTeam1: file(relativePath: { eq: "vanilla-team-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    vanillaTeam2: file(relativePath: { eq: "vanilla-team-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    vanillaTeam3: file(relativePath: { eq: "vanilla-team-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    vanillaTeam4: file(relativePath: { eq: "vanilla-team-4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    vanillaTeam5: file(relativePath: { eq: "vanilla-team-5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    vanillaTeam6: file(relativePath: { eq: "vanilla-team-6.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    vanillaTeam7: file(relativePath: { eq: "vanilla-team-7.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    vanillaTeam8: file(relativePath: { eq: "vanilla-team-8.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    vanillaTeam9: file(relativePath: { eq: "vanilla-team-9.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  
  }

  
`

export default About

// bigV: file(relativePath: { eq: "vanilla-chi-siamo.jpg" }) {
//     childImageSharp {
//       fluid(maxWidth: 400) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
//     fotoV: file(relativePath: { eq: "foto-test.jpg" }) {
//     childImageSharp {
//       fluid(maxWidth: 600) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }

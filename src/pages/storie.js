import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import LocalizedLink from "../components/LocalizedLink"
import FooterCta from "../components/footerCta"
import "./storie.css"

export default ({ pageContext: { locale }, data }) => {
  const [postsCopy, setPostsCopy] = useState(data.allWordpressPost.edges)
  const [posts, setPosts] = useState(data.allWordpressPost.edges)
  const [categoriesSelected, setCategoriesSelected] = useState([])

  const onCategoryChange = e => {
    const { name } = e.target
    if (e.target.checked) {
      setCategoriesSelected([...categoriesSelected, name])
    } else {
      const newArray = categoriesSelected.filter(category => {
        return category !== name
      })
      setCategoriesSelected(newArray)
    }
  }

  React.useEffect(() => {
    const newArray = postsCopy.filter(post => {
      if (categoriesSelected.includes(post.node.categories[0].name)) {
        return post
      }
    })
    setPosts(newArray)
    if (categoriesSelected.length === 0) {
      setPosts(postsCopy)
    }
  }, [categoriesSelected])

  return (
    <Layout path="/" locale={locale} data={data}>
      <Seo
        title="Il blog di Vanilla Marketing | Digital Creators"
        description="Non perderti l'opportunità di leggere guide, news, case history e approfondimenti sul mondo del web marketing all'interno del blog di Vanilla Marketing."
      />
      <div className="blog-section">
        <div className="wrapper-categories">
          <div className="input-wrapper">
            <div className="switch">
              <input
                onChange={onCategoryChange}
                name="Web Development"
                id="switch-1"
                type="checkbox"
                className="switch-input"
              />
              <label htmlFor="switch-1" className="switch-label">
                Web Development
              </label>
            </div>
            <div>Web Development</div>
          </div>
          <div className="input-wrapper">
            <div className="switch">
              <input
                onChange={onCategoryChange}
                name="Social Media Marketing"
                id="switch-2"
                type="checkbox"
                className="switch-input"
              />
              <label htmlFor="switch-2" className="switch-label">
                Social Media
              </label>
            </div>
            <div>Social Media</div>
          </div>
          {/* <div className='input-wrapper'>
            <div className='switch'>
              <input
                onChange={onCategoryChange}
                name='Web Marketing'
                id='switch-3'
                type='checkbox'
                className='switch-input'
              />
              <label htmlFor='switch-3' className='switch-label'>
                Web Marketing
              </label>
            </div>
            <div>Web Marketing</div>
          </div> */}
          <div className="input-wrapper">
            <div className="switch">
              <input
                onChange={onCategoryChange}
                name="Social Media Marketing"
                id="switch-4"
                type="checkbox"
                className="switch-input"
              />
              <label htmlFor="switch-4" className="switch-label">
                Graphic Design
              </label>
            </div>
            <div>Graphic Design</div>
          </div>
          <div className="input-wrapper">
            <div className="switch">
              <input
                onChange={onCategoryChange}
                name="Strategia"
                id="switch-5"
                type="checkbox"
                className="switch-input"
              />
              <label htmlFor="switch-5" className="switch-label">
                Strategia
              </label>
            </div>
            <div>Strategia</div>
          </div>
        </div>

        <div className="blog-container">
          {posts &&
            posts
              .filter(post => {
                return post.node.categories[0].name !== "Scatti"
              })
              .map((blog, i) => (
                <div className="article-wrapper" key={i}>
                  <LocalizedLink to={`/storie/${blog.node.slug}`}>
                    {/* {blog.node.featured_media.localFile && (
                    <BackgroundImage
                      fluid={
                        blog.node.featured_media.localFile.childImageSharp.fluid
                      }
                      className='article-img'
                      style={{
                        height: 350
                      }}
                    />    
                  )} */}
                    <img
                      src={blog.node.featured_media.source_url}
                      className="article-img"
                    />

                    <div className="article-wrapper-text">
                      {/* <h2 style={{ marginBottom: 0 }}>{blog.node.title}</h2> */}
                      <div
                        className="title"
                        dangerouslySetInnerHTML={{ __html: blog.node.title }}
                      />

                      <div
                        className="excerpt"
                        dangerouslySetInnerHTML={{ __html: blog.node.excerpt }}
                      />
                      <p style={{ fontWeight: "500" }}>
                        {"> Leggi l'articolo"}
                      </p>
                    </div>
                  </LocalizedLink>
                </div>
              ))}
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

export const pageQuery = graphql`
  query Blog($locale: String) {
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
        ctaHeader
        feelHappy
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
    allWordpressPost {
      edges {
        node {
          categories {
            name
          }
          title
          slug
          content
          excerpt
          date(fromNow: true)
          featured_media {
            source_url
            localFile {
              childImageSharp {
                fluid(maxWidth: 900) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

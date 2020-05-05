import './prenota-da-mangiare.css'
import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import FooterCta from '../components/footerCta'
import heroImg from '../images/prenota-da-mangiare-hero.jpg'
import checkMark from '../images/check-mark-sign.png'
import whatsapp from '../images/whatsapp.png'
import boatIcon from '../images/boat-icon.jpg'
import elephantIcon from '../images/elephant-icon.jpg'
import hearthIcon from '../images/hearth-icon.jpg'

const prenotaDaMangiare = ({ pageContext: { locale }, data }) => {
  return (
    <Layout path='/' locale={locale} data={data}>
      <SEO title='Prenota Da Mangiare' description='Il Tuo Locale Online' />
      <section className='prenota-da-mangiare-section'>
        <div className='prenota-da-mangiare-hero'>
          <div>
            <span className='overtitle-dark'>IL TUO LOCALE ONLINE</span>
            <h1>Prenota Da Mangiare</h1>
            <div>
              <div className='prenota-da-mangiare-list-item'><img src={checkMark} alt='check-mark' /><p>Fatto su misura per te</p></div>
              <div className='prenota-da-mangiare-list-item'><img src={checkMark} alt='check-mark' /><p>La nostra esperienza a tua disposizione</p></div>
              <div className='prenota-da-mangiare-list-item'><img src={checkMark} alt='check-mark' /><p>Super eroi della customer care</p></div>
            </div>
            <p>Nessun costo di attivazione | Disponibilità immediata | Facile da usare</p>
            <p className='prenota-da-mangiare-cta-text'>Mettiti In Contatto Con Noi Ora <a href='https://wa.me/+393516711311'><img src={whatsapp} alt='whatsapp-icon' /></a></p>
          </div>
          <div>
            <img style={{ width: '400px' }} src={heroImg} alt='prenota-da-mangiare-online' />
          </div>
        </div>
        <div className='prenota-da-mangiare-testimonial'>
          <div className='prenota-da-mangiare-wrapper'>
            <p><strong>Lorem ipsum<br />doloret sin amet:</strong></p>
            <p><span className='quotes'>"</span>Ho scelto prenotadamangiare.it e tutto è diventato più semplice! È facile da usare sia per me che per i miei clienti e questo significa avere più ordini e lavorare con più serenità! L'assistenza, poi, è molto preparata e disponibile. Sono assolutamente soddisfatta!</p>
          </div>
          <p className='testimonial-name'>Sofia, Zazie</p>
        </div>
        <div className='prenota-da-mangiare-values'>
          <h2>Lorem ipsum doloret sin amet</h2>
          <div className='divider' />
          <p className='subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur iure nisi quod quidem eos aspernatur, dicta architecto consequatur cum nemo eius tenetur.</p>
          <div className='icons-wrapper'>
            <div>
              <img src={boatIcon} alt='boat-icon' />
              <p><strong>Lorem Ipsum</strong></p>
              <p className='values-subtitle'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita maiores asperiores magnam architecto iusto quod, quos optio modi exercitationem natus.</p>
            </div>
            <div>
              <img src={elephantIcon} alt='check-mark' />
              <p><strong>Lorem Ipsum</strong></p>
              <p className='values-subtitle'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita maiores asperiores magnam architecto iusto quod, quos optio modi exercitationem natus.</p>
            </div>
            <div>
              <img src={hearthIcon} alt='check-mark' />
              <p><strong>Lorem Ipsum</strong></p>
              <p className='values-subtitle'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita maiores asperiores magnam architecto iusto quod, quos optio modi exercitationem natus.</p>
            </div>
          </div>
        </div>
      </section>
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
  query PrenotaDaMangiare($locale: String) {
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
   
    footerCta: file(
      name: { eq: $locale }
      relativeDirectory: { eq: "footer-cta" }
    ) {
      childFooterCtaJson {
        title
        subtitle
      }
    }
  }
`

export default prenotaDaMangiare

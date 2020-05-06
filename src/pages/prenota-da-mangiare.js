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
import diamondIcon from '../images/diamond-icon.jpg'

const prenotaDaMangiare = ({ pageContext: { locale }, data }) => {
  return (
    <Layout path='/' locale={locale} data={data}>
      <SEO title='Prenota Da Mangiare | Il Tuo Locale Online' />
      <section className='prenota-da-mangiare-section'>
        <div className='prenota-da-mangiare-hero'>
          <div>
            <span className='overtitle-dark'>PORTA IL TUO LOCALE ONLINE CON</span>
            <h1>Prenota Da Mangiare</h1>
            <div>
              <div className='prenota-da-mangiare-list-item'><img src={checkMark} alt='check-mark' /><p>Fatto su misura per te</p></div>
              <div className='prenota-da-mangiare-list-item'><img src={checkMark} alt='check-mark' /><p>La nostra esperienza a tua disposizione</p></div>
              <div className='prenota-da-mangiare-list-item'><img src={checkMark} alt='check-mark' /><p>Super eroi della customer care</p></div>
              <div className='prenota-da-mangiare-list-item'><img src={checkMark} alt='check-mark' /><p>Nessun costo fisso</p></div>
            </div>
            <p>La gestione online di delivery e take away senza pensieri.<br />Ne vuoi sapere di più?</p>
            {/* <p>Nessun costo di attivazione | Disponibilità immediata | Facile da usare</p> */}
            <p className='prenota-da-mangiare-cta-text'>Mettiti In Contatto Con Noi Ora <a href='https://wa.me/+393516711311'><img src={whatsapp} alt='whatsapp-icon' /></a></p>
          </div>
          <div>
            <img style={{ width: '400px' }} src={heroImg} alt='prenota-da-mangiare-online' />
          </div>
        </div>
        <div className='prenota-da-mangiare-testimonial'>
          <div className='prenota-da-mangiare-wrapper'>
            <p><strong>Cosa ne pensa<br />chi lo sta già utilizzando?</strong></p>
            <p><span className='quotes'>"</span>Ho scelto prenotadamangiare.it e tutto è diventato più semplice! È facile da usare sia per me che per i miei clienti e questo significa avere più ordini e lavorare con più serenità! L'assistenza, poi, è molto preparata e disponibile. Sono assolutamente soddisfatta!</p>
          </div>
          <p className='testimonial-name'>Sofia, Zazie</p>
          <a className='link-example' href='https://zazie.prenotadamangiare.it/' target='_blank'>zazie.prenotadamangiare.it</a>
        </div>
        <div className='prenota-da-mangiare-values'>
          <h2>Vendere Online Con Facilità</h2>
          <div className='divider' />
          <p className='subtitle'>La gestione di delivery e take away che funziona! Tutta l’esperienza della nostra digital agency a servizio del tuo locale, perché la giusta soluzione è facile.</p>
          <div className='icons-wrapper'>
            <div className="value-box">
              <img src={boatIcon} alt='boat-icon' />
              <p><strong>Fatto su misura per te</strong></p>
              <p className='values-subtitle'>Non tutte le esigenze sono uguali, questo è il motivo per cui ti proponiamo una soluzione fatta su misura: per non farti perdere tempo e per vederti soddisfatto.</p>
            </div>
            <div className="value-box">
              <img src={elephantIcon} alt='check-mark' />
              <p><strong>La nostra esperienza a tua disposizione</strong></p>
              <p className='values-subtitle'>È la nostra esperienza che ci ha fatto creare 'Prenota Da Mangiare': il servizio facile da usare e per questo davvero efficace per te e per i tuoi clienti.</p>
            </div>
            </div>
            <div className='icons-wrapper'>
               <div className="value-box">
                 <img src={hearthIcon} alt='check-mark' />
                 <p><strong>Super eroi della customer care</strong></p>
                 <p className='values-subtitle'>Faremo in modo che il tuo sito sia sempre funzionante, con il menù aggiornato e con foto di qualità e quando avrai bisogno di aiuto noi ci saremo!</p>
               </div>
               <div className="value-box">
                 <img src={diamondIcon} alt='check-mark' />
                 <p><strong>Nessun costo fisso</strong></p>
                 <p className='values-subtitle'>Nessun costo di attivazione e nessun costo fisso. Saremo i tuoi alleati con un obiettivo comune: lavorare di più e meglio!</p>
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

import './il-metodo.css'
import React from 'react'
import { graphql, Link, Img } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Testimonials from '../components/testimonials'
import FooterCta from '../components/footerCta'
import ilMetodoImg from '../images/il-metodo-vanilla-marketing.jpg'

const ilMetodo = ({ pageContext: { locale }, data }) => {
  console.log(data, 'data')
  return (
    <Layout path='/' locale={locale} data={data}>
      <SEO title='Digital Creators Method | Vanilla Marketing' />
      <section className='metodo-section'>
        <p>Il metodo Digital Creators è un approccio creativo e umanistico, una capillare capacità di lettura dei dati analitici e la profonda conoscenza di soluzioni tecnologiche. </p>
        <p>Il nostro metodo è diventato famoso perché è capace di quattro caratteristiche principali:</p>
        <ul>
          <li>è flessibile</li>
          <li>è goal oriented</li>
          <li>è marketing integrated</li>
          <li>è emotional oriented </li>
        </ul>
        <p><strong>Perché un metodo? </strong><br />Perché il metodo rende i risultati raggiungibili, le strategie soddisfacenti, i dati misurabili.</p>
        <img
          style={{
            display: 'block',
            margin: '0 auto'
          }} src={ilMetodoImg}
        />
        <p style={{
          marginTop: '40px'
        }}
        ><strong>Come nasce il giusto metodo?</strong><br />Dopo anni di strategie sviluppate e risultati raggiunti in segmenti del mercato tanto diversi tra di loro abbiamo sviluppato un metodo che ha la capacità di essere del tutto flessibile alle esigenze specifiche di ogni progetto.
        </p>
        <p>Il Digital Creators Method è il nostro modo di raggiungere risultati in maniera chiara e soddisfacente. 
        </p>
        <p>Nasce dall’esperienza formata grazie a titoli di studio, master, specializzazioni e poi anche grazie alla formazione continua, strumento in cui crediamo moltissimo e al lavoro appassionato che portiamo avanti ogni giorno.</p>
        <p>Ecco perché, oggi, possiamo dire con certezza che il nostro metodo porta risultati dimostrabili e concreti.</p>
        <p>Sono tre le fasi fondamentali del Digital Creators Methods:
        </p>
        <ul>
          <li>lo studio</li>
          <li>la realizzazione</li>
          <li>l'analisi e il testing</li>
        </ul>
        <p>Si parte dall’inizio: ovvero con lo studio e l’analisi della situazione, delle risorse  e delle intenzioni.</p>
        <p>Stiliamo un report che chiamiamo Report 0: il nostro punto di partenza, una fotografia della realtà.
        </p>
        <p>Da qui si procede fissando degli obiettivi realistici e seri; questo è importante perché solo con obiettivi di questo tipo, definiti in gergo SMART (specific, measurable, achievable, relevant, timely), possiamo raggiungere risultati soddisfacenti senza spreco di risorse. Ultima fase è quella della messa online della strategia, dell’analisi continua e della fase di testing che ci aiuta a capire come sta performando la struttura impostata.
        </p>
        <p>Dalla nostra esperienza abbiamo, inoltre, capito che più una strategia è capace di includere azioni sinergiche tanto più sarà efficace e i suoi risultati soddisfacenti.
</p>
<p>Oltre questo siamo convinti che solo applicando i principi dell’<a href="https://www.vanillamarketing.it/storie/emotional-marketing-definizione">emotional marketing</a> saremo in grado di raggiungere risultati davvero soddisfacenti e di valore. </p>
        <p><strong>Un metodo per cosa?</strong><br />Per rendere le tue strategie social, seo, sem lo sviluppo del tuo sito e della tua comunicazione digitale in senso più ampio davvero efficaci, davvero rispondenti di ciò che sei e dei tuoi obiettivi</p>
        <p>Solo con il giusto metodo comunicativo aumenterà l’engagement, aumenteranno le conversioni, aumenteranno utenti, lead e customer e diminuiranno gli sprechi.</p>
        <div style={{
          position: 'relative',
          bottom: '40px'
        }}
        >
          <Testimonials
            testimonials={data.testimonials.childTestimonialsJson}
            overtitle={data.testimonials.childTestimonialsJson.overtitle}
            title1={data.testimonials.childTestimonialsJson.title1}
            title2={data.testimonials.childTestimonialsJson.title2}
          />
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
  query Metodo($locale: String) {
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
    },
    testimonials: file(
        name: { eq: $locale }
        relativeDirectory: { eq: "testimonials" }
      ) {
        childTestimonialsJson {
          overtitle
          title1
          title2
          client0
          quote0
          client1
          quote1
          client2
          quote2
          client3
          quote3
          client4
          quote4
          client5
          quote5,
          forbesArticle
        }
      }
  }
`

export default ilMetodo

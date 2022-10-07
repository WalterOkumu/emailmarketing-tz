import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Lead from '../components/Lead'
import Testimonials from '../components/Testimonial'
import About from '../components/About'
import Info from '../components/Info'
import Script from 'next/script'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Email Marketing</title>
        <meta name="description" content="Email Marketing Landing Page" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,700;1,100&display=swap" rel="stylesheet"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='pb-10'>
        <div className='pt-8 md:h-screen px-10'>
          <Header />
          <Hero />
        </div>
        <About />
        <Info />
        <Lead />
        <Testimonials />
      </main>

      <Script
          type="text/javascript"
          strategy="beforeInteractive"
          src="https://static.mailerlite.com/js/w/webforms.min.js?v7316d10e2931a97c7b0f5c7e7e7be3ea"
          defer={false}
          id="element"
        >
        
            {function ml_webform_success_5786909(){let r=ml_jQuery||jQuery;r(".ml-subscribe-form-5786909 .row-success").show(),r(".ml-subscribe-form-5786909 .row-form").hide()}}
        </Script>
    </div>
  )
}

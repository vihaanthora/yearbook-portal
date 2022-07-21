import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

 import Navbar from "../components/Navbar"
 import Footer from "../components/Footer"


function MyApp({ Component, pageProps }) {
  return (<>
  <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  </>)
}

export default MyApp


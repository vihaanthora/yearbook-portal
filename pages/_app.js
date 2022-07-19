import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import Navbar from "../components/Navbar"
import EditProfile from "../components/EditProfile"
import Footer from "../components/Footer"


function MyApp({ Component, pageProps }) {
  return ( 
  <div>
    <Navbar />
    <EditProfile />
    <hr />
    <Footer />
    {/* <Component {...pageProps} /> */}
    </div>
  )
}

export default MyApp

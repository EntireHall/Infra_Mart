
import "./globals.css"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
// import Footer from "./components/Footer"


export default function RootLayout({ children }) {
return (
    <html>
      <body>
      <>
      <Header/>
    <Navbar/>
    {children}
    {/* {<Footer/>} */}
    </>
      </body>
    </html>
  )
}


// import Header from "../components/Header"
import "../globals.css"
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {/* <Header/> */}
          {children}
      </body>
    </html>
  )
}

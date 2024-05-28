import "./global.css"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
export default function RootLayout1({ children }) {
  return (
    <div>
      <Header />
      <Navbar />
      <main>{children}</main>
    </div>
  )
}

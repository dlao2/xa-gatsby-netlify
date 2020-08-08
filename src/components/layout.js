import React from "react"
import TheNav from "./TheNav"
import TheFooter from "./TheFooter"

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <TheNav />
      </header>
      <main>{children}</main>
      <footer>
        <TheFooter />
      </footer>
    </div>
  )
}

export default Layout

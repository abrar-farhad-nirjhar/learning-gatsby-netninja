import React from "react"
import NavBar from "../nav-bar"
import "../../styles/global.css"
export default function Layout({ children }) {
  return (
    <div className="layout">
      <NavBar />
      <div className="content">{children}</div>
      <footer>
        {" "}
        <p>Copyright 2021 Web Warrior</p>
      </footer>
    </div>
  )
}

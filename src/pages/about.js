import React from "react"
import Header from "../components/header"

export default () => (
  <div style={{ color: `teal` }}>
    <Header 
      headerText="About Gatsby" // passes through and is used through {props.headerText}
      arbitraryPhrase=" is arbitrary"
    />
    <Header headerText="Second Header!"/>
    <p>Such wow. Very React.</p>
  </div>
)
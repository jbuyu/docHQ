import React, { useState } from "react"
import styled, { createGlobalStyle, css } from "styled-components"

const globalStyle = createGlobalStyle``
const sharedStyles = css``

const styledFormWrapper = styled.div``
const styledForm = styled.form``
const styledInput = styled.input``
const styledTextArea = styled.textarea``
const styledButton = styled.button``
const styledFieldSet = styled.fieldset``
const styledError = styled.div``
const Main = () => {
  const [formState, setformState] = useState({
    name: "",
    email: "",
  })
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }
  const handleChange = e => {
    setformState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.formState }),
    }).catch(error => alert(error))

    e.preventDefault()
  }
  return (
    <div className="hero-wrapper">
      <div className="text">
        <h1 className="hero">
          The fastest and easiest way to consult a doctor in kenya
        </h1>
        <h2 className="desc">
          Goodbye to 'Inspect element'-check css of any element you'd like By
          simply hovering on element and highlighting the core styles.
        </h2>
        <p className="save-badge">save 80% To celebrate our deal today.</p>
      </div>
      <div className="form-one">
        <globalStyle />
        <styledFormWrapper>
          <styledForm>
            <h2>Submission</h2>
            <label htmlFor="name"></label>
            <styledInput type="text" name="name" />
            <label htmlFor="email"></label>
            <styledInput type="email" name="email" />
            <styledFieldSet>
              <legend>gender</legend>
              <label>
                <input type="radio" value="female" name="gender" />
                Female
              </label>
              <label>
                <input type="radio" value="male" name="gender" />
                Male
              </label>
            </styledFieldSet>
            <label htmlFor="message">Message</label>
            <styledTextArea name="message" />
            <styledError>
              <p>Error message here</p>
            </styledError>
            <styledButton type="submit">
              <i className="far fa-share-square"></i>
              Send Details
            </styledButton>
          </styledForm>
        </styledFormWrapper>
      </div>
    </div>
  )
}
export default Main

import React, { useState } from "react"
import styled, { createGlobalStyle, css } from "styled-components"

const GlobalStyle = createGlobalStyle`
html {
  height:100%
}
// body{
//   background-color:red;
// }
`
const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`

const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // height: 100vh;
  padding: 0 20px;
`
const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`
const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
`
const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;
  ${sharedStyles}
`
const StyledButton = styled.button`
  display: block;
  background-color: #c2fbd7;
  color: green;
  font-size: 0.9rem;
  border: 0;
  border-radius: 50px;
  height: 40px;
  cursor: pointer;
  box-sizing: border-box;
  display: inline-block;
  border-width: 0;
  font-size: 1em;
  height: 50px;
  padding: 0 25px;
  transition: all 200ms;
  box-shadow: rgba(25, 25, 25, 0.04) 0 0 1px 0, rgba(0, 0, 0, 0.1) 0 3px 4px 0;
`
const StyledFieldSet = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;
  legend {
    padding: 0 10px;
  }
  label {
    padding-right: 20px;
  }
  input {
    margin-right: 10px;
  }
`
const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`
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
        <GlobalStyle />
        <StyledFormWrapper>
          <StyledForm>
            <h2>Form Submission</h2>
            <label htmlFor="name">Name</label>
            <StyledInput type="text" name="name" />
            <label htmlFor="email">Email</label>
            <StyledInput type="email" name="email" />
            <StyledFieldSet>
              <legend>gender</legend>
              <label>
                <input type="radio" value="female" name="gender" />
                Female
              </label>
              <label>
                <input type="radio" value="male" name="gender" />
                Male
              </label>
            </StyledFieldSet>
            <label htmlFor="message">Message</label>
            <StyledTextArea name="message" />
            <StyledError>
              <p>Error message here</p>
            </StyledError>
            <StyledButton type="submit">
              <i className="far fa-share-square"></i>
              Send Details
            </StyledButton>
          </StyledForm>
        </StyledFormWrapper>
      </div>
    </div>
  )
}
export default Main

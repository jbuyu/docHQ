import React, { useState } from "react"
import styled, { createGlobalStyle, css } from "styled-components"

const GlobalStyle = createGlobalStyle`

body{
   width:auto;
 }
`
const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
  &:focus,
  &:active {
  outline: none !important;
  border: 1px solid #afe6c3;

  
`

const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  // padding: 0 20px;
`
const StyledForm = styled.form`
  width: auto;
  max-width: 800px;
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
  // flex: 1;
  ${sharedStyles}
`
const StyledButton = styled.button`
  display: block;
  background-color: #c2fbd7;
  border: 0px;
  color: green;
  font-size: 0.9rem;
  border: none;
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
  &:focus,
  &:active {
    outline: none !important;
  }
  &:hover {
    background-color: #afe6c3;
    transform: scale(1.05);
  }
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
  color: #f7797d;
  font-weight: 800;
  margin: 0 0 40px 0;
`
const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  gender: "",
  symptoms: "",
}
const Main = () => {
  const [state, setState] = useState(initialState)
  const [error, setError] = useState("")

  const handleInput = e => {
    const inputName = e.currentTarget.name
    const value = e.currentTarget.value
    setState(prev => ({
      ...prev,
      [inputName]: value,
    }))
  }
  const handleSubmit = e => {
    e.preventDefault()
    console.log("sub", state)
    for (let key in state) {
      if (state[key] === "") {
        setError(`Please fill out your ${key}`)
        return
      }
    }
    setError("")
  }
  return (
    <div className="hero-wrapper">
      <div className="text-column">
        <h1 className="hero">
          <strong>
            The fastest and easiest way to consult a doctor in Kisumu
          </strong>
        </h1>
        <h2 className="hero-desc">
          At KHD, we believe that every patient should have access to healthcare
          that matters. Book an online consultation with a doctor of your choice
          and you'll receive care and health services with terms that work best
          for you.
        </h2>
        <p className="offer">save 80% on your first consultation!</p>
      </div>
      <div className="form-column">
        <GlobalStyle />
        <StyledFormWrapper>
          <StyledForm onSubmit={handleSubmit}>
            <h2>Form Submission</h2>
            <label htmlFor="First Name">First Name</label>
            <StyledInput
              type="text"
              name="first_name"
              value={state.first_name}
              onChange={handleInput}
            />
            <label htmlFor="Last Name">Last Name</label>
            <StyledInput
              type="text"
              name="last_name"
              value={state.last_name}
              onChange={handleInput}
            />
            <label htmlFor="email">Email</label>
            <StyledInput
              type="email"
              name="email"
              value={state.email}
              onChange={handleInput}
            />
            <StyledFieldSet>
              <legend>gender</legend>
              <label>
                Male
                <input
                  type="radio"
                  value="male"
                  name="gender"
                  checked={state.gender === "male"}
                  onChange={handleInput}
                />
              </label>
              <label>
                Female
                <input
                  type="radio"
                  value="female"
                  name="gender"
                  checked={state.gender === "female"}
                  onChange={handleInput}
                />
              </label>
            </StyledFieldSet>
            <label htmlFor="message">Symptoms</label>
            <StyledTextArea
              name="symptoms"
              value={state.symptoms}
              onChange={handleInput}
            />
            {error && (
              <StyledError>
                <p>{error}</p>
              </StyledError>
            )}
            <StyledButton type="submit">
              <i className="far fa-share-square"></i>
              Get in Touch
            </StyledButton>
          </StyledForm>
        </StyledFormWrapper>
      </div>
    </div>
  )
}
export default Main

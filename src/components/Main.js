import React, { useState } from "react"
import styled, { createGlobalStyle, css } from "styled-components"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import DatePicker from "react-datepicker"
import nameAge from "../utils/nameAge"
// import { graphql } from "gatsby"

const FORM_URL = " https://kisumu-doc-api.herokuapp.com/form"
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
  }
`

const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`
const StyledForm = styled.form`
  width: 100%;
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
  outline: none;
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
  phone: "",
  symptoms: "",
  consultation: "",
  dob: new Date(),
}
const Main = ({ heroTitle, about, offer, telemedicine, home }) => {
  const [state, setState] = useState(initialState)
  const [error, setError] = useState("")
  // const [age, setDob] = useState(new Date())

  const handleDate = date => {
    // let calcAge = moment().diff(date, "years")
    let inputName = "dob"
    setState(prev => ({
      ...prev,
      [inputName]: date,
    }))
  }
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
    let clientData = { ...state }
    for (let key in state) {
      if (state[key] === "") {
        setError(`Please fill out your ${key}`)
        return
      }
    }
    // console.log("client", JSON.stringify(clientData))
    let newClientData = nameAge(clientData)
    // console.log("new", newClientData)
    axios
      .post(FORM_URL, { newClientData })
      .then(res => {
        console.log(res)
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    toast.success("Details sent. You'll be contacted shortly.")
    setError("")
  }
  return (
    <div id="form" className="hero-wrapper">
      <div className="text-column">
        <h1 className="hero">
          <strong>{heroTitle.title}</strong>
        </h1>
        {/* <h2 className="hero-desc">{about.description}</h2> */}
        <h2 className="hero-desc">
          At KHD, We bring quality healthcare to the comfort of your home.
          Consult our team of doctors via phone or request a doctor to come and
          treat you or your loved ones at home. Our doctors are top notch
          professionals, recognized and registered by the Kenya Medical
          Practitioners and Dentists Council.
          <a
            style={{
              textDecoration: "none",
              color: "green",
            }}
            href="http://Kmpdc.go.ke"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kmpdc
          </a>
        </h2>

        <p className="offer">{offer.title}</p>
      </div>
      <div className="form-column">
        <GlobalStyle />
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <StyledFormWrapper>
          <StyledForm onSubmit={handleSubmit}>
            <h2>Consultation Form</h2>
            <label
              htmlFor="First Name"
              aria-label="first Name"
              aria-required="true"
            >
              First Name
              <StyledInput
                aria-label="first Name"
                aria-required="true"
                id="first_name"
                type="text"
                name="first_name"
                value={state.first_name}
                onChange={handleInput}
              />
            </label>
            <label
              htmlFor="Last Name"
              aria-label="last Name"
              aria-required="true"
            >
              Last Name
            </label>
            <StyledInput
              id="last_name"
              type="text"
              name="last_name"
              value={state.last_name}
              onChange={handleInput}
            />
            <label htmlFor="Phone">Phone</label>
            <StyledInput
              id="phone"
              type="tel"
              name="phone"
              value={state.phone}
              onChange={handleInput}
            />
            <label htmlFor="email">Email</label>
            <StyledInput
              id="email"
              type="email"
              name="email"
              value={state.email}
              onChange={handleInput}
            />

            <StyledFieldSet>
              <legend>gender</legend>
              <label>
                <input
                  style={{
                    cursor: "pointer",
                  }}
                  type="radio"
                  value="Male"
                  name="gender"
                  checked={state.gender === "Male"}
                  onChange={handleInput}
                />
                Male
              </label>
              <label>
                <input
                  style={{
                    cursor: "pointer",
                  }}
                  type="radio"
                  value="Female"
                  name="gender"
                  checked={state.gender === "Female"}
                  onChange={handleInput}
                />
                Female
              </label>
            </StyledFieldSet>
            <label htmlFor="age">Date of Birth</label>
            <br />
            <DatePicker
              name="age"
              selected={state.dob}
              onChange={date => handleDate(date)}
            ></DatePicker>
            <br />
            <label htmlFor="message">Symptoms</label>
            <StyledTextArea
              name="symptoms"
              value={state.symptoms}
              onChange={handleInput}
            />
            <StyledFieldSet>
              <legend>Preferred Consultation</legend>
              <label>
                <input
                  style={{
                    cursor: "pointer",
                  }}
                  type="checkbox"
                  value="Telemedicine"
                  name="consultation"
                  checked={state.consultation === "Telemedicine"}
                  onChange={handleInput}
                />
                <strong style={{ color: "#53556f" }}>
                  Telemedicine (video/call/chat) - {telemedicine.amount}/-
                </strong>
              </label>
              <br />
              <label>
                <input
                  style={{
                    cursor: "pointer",
                  }}
                  type="checkbox"
                  value="Home"
                  name="consultation"
                  checked={state.consultation === "Home"}
                  onChange={handleInput}
                />
                <strong style={{ color: "#53556f" }}>
                  Home Doctor - {home.amount}/-
                </strong>
              </label>
            </StyledFieldSet>
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

import React, { useState } from "react"
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
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))

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
        <form
          onSubmit={handleSubmit}
          name="Patients"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="Patients" />
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            onChange={handleChange}
            value={formState.name}
            placeholder="name..."
          />
          <br />
          <label htmlFor="Email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={handleChange}
            value={formState.email}
            placeholder="email..."
          />
          <button type="submit" className="send-details-btn">
            <i className="far fa-share-square"></i>
            Try it
          </button>
        </form>
      </div>
    </div>
  )
}
export default Main

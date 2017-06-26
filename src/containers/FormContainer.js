import React, { Component } from 'react';
import TextField from '../components/TextField';

class FormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      phoneNumber: '',
      email: ''
    }
  }

  handleFirstName = event => {
    this.setState({ firstName: event.target.value })
  }

  handleLastName = event => {
    this.setState({ lastName: event.target.value })
  }

  handleAddress = event => {
    this.setState({ address: event.target.value })
  }

  handleCity = event => {
    this.setState({ city: event.target.value })
  }

  handleState = event => {
    this.setState({ state: event.target.value })
  }

  handleZipCode = event => {
    this.setState({ zipCode: event.target.value })
  }

  handlePhoneNumber = event => {
    this.setState({ phoneNumber: event.target.value })
  }

  handleEmail = event => {
    this.setState({ email: event.target.value })
  }

  render() {
    let formData = [
      {
        labelText: "First Name",
        slug: "first-name",
        handlerFunction: this.handleFirstName
      },
      {
        labelText: "Last Name",
        slug: "last-name",
        handlerFunction: this.handleLastName
      },
      {
        labelText: "Address",
        slug: "address",
        handlerFunction: this.handleAddress
      },
      {
        labelText: "City",
        slug: "city",
        handlerFunction: this.handleCity
      },
      {
        labelText: "State",
        slug: "state",
        handlerFunction: this.handleState
      },
      {
        labelText: "Zip Code",
        slug: "zip-code",
        handlerFunction: this.handleZipCode
      },
      {
        labelText: "Phone Number",
        slug: "phone-number",
        handlerFunction: this.handlePhoneNumber
      },
      {
        labelText: "Email",
        slug: "email",
        handlerFunction: this.handleEmail
      }
    ]

    let textFields = formData.map(data => {
      return(
        <TextField
          key={data.slug}
          label={data.labelText}
          name={data.slug}
          handlerFunction={data.handlerFunction}
        />
      )
    })

    return (
      <form className="callout" id="shipping-address-form">
        <h1>Shipping Address</h1>
        {textFields}
        <input type="submit" className="button" value="Submit "/>
      </form>
    )
  }
}

export default FormContainer

import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

export class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      name: '',
      content: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    const body = {
      email: this.state.email,
      name: this.state.name,
      content: this.state.content
    }
    console.log(body)
    axios.post('/api/email', body).then(() => { console.log("POSTED EMAIL") })
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5vh', backgroundColor: 'white' }}>
        <div style={{ width: '60vw'}}>
          <h1 style={{ textAlign: 'center', marginBottom: '1em' }}>Contact Us Today</h1>
          <p style={{ textAlign: 'center', marginBottom: '1em' }}>Call 855-4TheFIX or email Info@TheChicagoFIX.com</p>
        </div>
        <form onSubmit={this.handleSubmit} style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center', alignItems: 'center', marginTop: '20px', width: '40vw' }}>
          <label>Name</label>
          <input type="text" value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }) }} style={{ border: '1px solid #88D5E9', marginBottom: '1em' }} />
          <label>Email</label>
          <input type="text" value={this.state.email} onChange={(e) => { this.setState({ email: e.target.value }) }} style={{ border: '1px solid #88D5E9', marginBottom: '1em' }} />
          <label>Comments</label>
          <textarea value={this.state.content} onChange={(e) => { this.setState({ content: e.target.value }) }} style={{ border: '1px solid #88D5E9', marginBottom: '3em' }} />
          <input type="submit" style={{ marginBottom: '3em', width: '100px' }} />
        </form>
      </div>
    )
  }
}
const mapState = function () {

}

const mapDispatch = function () {

}

export default connect(null, null)(Contact);

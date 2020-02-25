import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './App.css';

const API_URL = "http://goappop.gramyup.com/"

//getData() {
    // create a new XMLHttpRequest
  //  var xhr = new XMLHttpRequest()

    // get a callback when the server responds
    //xhr.addEventListener('load', () => {
      // update the state of the component with the result here
      //console.log(xhr.responseText)
   // })
    // open the request with the verb and the url
    //xhr.open('GET', '')
    // send the request
    //xhr.send()
  //}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '5'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = this.state.value.split("\n");
    data.forEach(function(number) {
      getFactorial(number);
  });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="factorialText">Input one number per line</Label>
          <Input type="textarea" name="factorialText" value={this.state.value} onChange={this.handleChange} />
        </FormGroup>
        <Button>Calculate Factorial</Button>
      </Form>
    );
  }
}

function getFactorial(num) {
  return fetch(API_URL + num)
    .then(response => response.json())
    .then((response) => {
      console.log('Factorial of ' + num + ' is ' + response.Factorial);
      return response;
     })
    .catch((error) => {
      console.error(error);
    });
}

export default App;

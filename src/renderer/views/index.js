import React from 'react'
import axios from 'axios'

export default function WelCome () {
  function handleRequest () {
    axios.post('/api/login.json', {
      firstName: 'Fred',
      lastName: 'Flintstone',
    })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  return <div>
    HelloWorld
    <button onClick={handleRequest}>sendRequest</button>
  </div>
}

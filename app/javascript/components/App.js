import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../redux/configureStore'
import Greeting from './Greeting'

export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <BrowserRouter>
          <Routes >
            <Route path="/" element={<Greeting />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    )
  }
}

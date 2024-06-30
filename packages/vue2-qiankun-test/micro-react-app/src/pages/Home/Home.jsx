/**
 * @Desc: Login
 * @Author: wu xingtgao
 * @Date: 2020/6/30
 */
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '@/logo.svg'
import '@/App.css'

function Home () {
  return (
    <div className="App">
      <Link to="/message">message path</Link>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default Home

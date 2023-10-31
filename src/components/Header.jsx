import React from 'react'
import Form from './Form'
import Navigation from './Navigation'

function Header({ history, handleSubmit }) {
  return (
    <header className='mx-auto w-full align-items-center d-flex justify-content-center flex-column'>
      <h1 className='mt-5 snapshot' style={{ fontSize: "6em" }}>SnapShot</h1>
      <Form handleSubmit={handleSubmit} history={history} />
      <Navigation />
    </header>
  )
}

export default Header
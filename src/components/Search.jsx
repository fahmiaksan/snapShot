import React from 'react'
import Container from './Container'

function Search({ searchTerm }) {
  return (
    <>
      <div className='title'>{searchTerm} picture</div>
      <Container searchTerm={searchTerm} />
    </>
  )
}

export default Search
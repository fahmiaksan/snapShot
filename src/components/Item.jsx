import React from 'react'
import Container from './Container'

function Item({ searchTerm }) {
  return (
    <div>
      <div className='title'>{searchTerm} picture</div>
      <Container searchTerm={searchTerm} />
    </div>
  )
}

export default Item
import React from 'react'

function Image({ url, title }) {
  return (
    <div className='px-3'>
      <div>
        <img src={url} alt={title} className='img-hover object-fit-cover mb-5 overflow-hidden border-0' style={{ width: "14em", border: "0", height: "200px" }} />
      </div>
    </div>
  )
}

export default Image
import React, { useState } from 'react';

function Form({ history, handleSubmit }) {
  const [searchEntry, setSearchEntry] = useState('');
  const updateSearchInput = e => {
    setSearchEntry(e.target.value);
  }
  return (
    <form onSubmit={e => handleSubmit(e, history, searchEntry)} className='row g-0 align-items-center mt-5'>

      <div className='col-auto'>
        <input
          type="text"
          name='search'
          placeholder='Search...'
          onChange={updateSearchInput}
          value={searchEntry}
          className='form-control'
        />
      </div>
      <div className='col-auto'>
        <button
          type='submit'
          className={`search-button ${searchEntry.trim() ? "active" : null}`}
          disabled={!searchEntry.trim()}
          style={{
            borderRadius: "0.35em 0.35em 0.35em 0.35em", outline: "none",
            border: "none",
            padding: "4px 15px",
            cursor: "pointer"
          }}
        >
          <svg height="32" width="32">
            <path
              d="M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z"
              fill="#051c33;"
              fillRule="evenodd"
              style={{ backgroundColor: "#051c33" }}
            />
          </svg>
        </button>
      </div>
    </form>
  )
}

export default Form
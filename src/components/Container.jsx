import React, { useEffect } from 'react';
import { useContext } from 'react';
import { PhotoContext } from '../context/PhotoContext';
import Loader from './Loader';
import Gallery from './Gallery';
function Container({ searchTerm }) {
  const { images, loading, runSearch } = useContext(PhotoContext);
  useEffect(() => {
    runSearch(searchTerm);
  }, [searchTerm]);
  return (
    <div>
      {loading ? <Loader /> : <Gallery images={images} />}
    </div>
  )
}

export default Container
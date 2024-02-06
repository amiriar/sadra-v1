import React from 'react'
import './search.css';
import SearchBox from '../components/modules/SearchBox';
import { useParams } from 'react-router-dom';

function Search() {
  const {query} = useParams();
  const finalQuery = query.split("&")

  const title = finalQuery[0].split("=")[1]
  const select = finalQuery[1].split("=")[1]



  return (
    <div className='seach-container'>
      <SearchBox/>
    </div>
  )
}

export default Search

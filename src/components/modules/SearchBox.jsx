import React, { useEffect, useState } from 'react'
import './SearchBox.css'
import { FaSearch } from "react-icons/fa";
import { Navigate, useNavigate, useParams, useSearchParams } from 'react-router-dom';

const SearchBox = ({firstWidth}) => {
  const navigate = useNavigate();
  const router = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const [search , setSearch] = useState({
    title : "" ,
    select : "" ,
  })

  const changehandler = (e)=> {
      setSearch({...search , [e.target.name] : e.target.value})
  }

  const query = {}

  // Buttons Actions
  const clickHandler = ()=> {
    if(!search.title || !search.select)return;
    setSearchParams(search)
    navigate(`/search/title=${search.title}&select=${search.select}`)

  }


  return (
    <>
    <div className="search_Container" style={{width:firstWidth}} dir='ltr' >
        <button onClick={clickHandler}   className='search_Btn'><FaSearch  className='search-icon' /></button>
        <div>
          <select onChange={changehandler} value={search.option} name='select' className='select_options'>
            <option value="دوره‌ها">دوره‌ها</option>
            <option value="test1">test1</option>
            <option value="test2">test2</option>
          </select>
        </div>

        <input onChange={changehandler} name='title' value={search.title} className='search_input' placeholder='جستجو دوره‌ها، مربیان و رخدادها' type='text' />
    </div>
    </>
  )
}

export default SearchBox

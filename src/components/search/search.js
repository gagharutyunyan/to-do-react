import React from 'react';
import './search.css';

const Search = ({ listSearchValue, count, doneCount }) => (
 	<header className='header'>
	 	<input className='search' type='search' placeholder='type to search' onChange={(e)=>listSearchValue(e)}/>
		 <span className='counts'>Total: {count}, Done: {doneCount}</span>
	 </header>
 );

export default Search;
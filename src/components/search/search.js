import React from 'react';
import './search.css';

const Search = ({ listSearchValue, totalCount, doneCount, importantCount }) => (
 	<header className='header'>
	 	<input className='search' type='search' placeholder='type to search' onChange={(e)=>listSearchValue(e)}/>
		<span className='counts'>Total: {totalCount}, Done: {doneCount}, Important: {importantCount}</span>
	 </header>
 );

export default Search;
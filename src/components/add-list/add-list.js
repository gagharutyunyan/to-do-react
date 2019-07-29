import React from 'react';
import './add-list.css';

const AddList = ({ listValue, listSubmit, listAddingValue }) => (
		<form onSubmit={(e) => listSubmit(e)}>
			<input className='add_bar' onChange={(e) => listValue(e)} value={listAddingValue} placeholder='type anything and add' autoFocus/>
			<button className='add_btn'></button>
		</form>
	);

export default AddList;
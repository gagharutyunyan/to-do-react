import React from 'react';
import './to-do-item.css';

const TodoItem = ({ id, content, important, done, listDelete, listImportant, listDone }) => {

	let ClassNames = 'list-item_content';
	if(important) ClassNames += ' important';
	if(done) ClassNames += ' done';
	let imp = 'imp';
	if(important) imp += ' imp_true';

	return (
		<li className='list-item' key={id}>
			<span className={ClassNames} onClick={() => listDone(id, done) } tabIndex='0'>{content}</span>
			<div className='buttons'>
				<button className={imp} onClick={() => listImportant(id, important) }></button>
				<button className='del' onClick={() => listDelete(id) }></button>
			</div>
		</li>
	);
	
};

export default TodoItem;
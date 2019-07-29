import React from 'react';
import TodoItem from '../to-do-item/to-do-item';
import './to-do-list.css';

const TodoList = ({ list, listDelete, listImportant, listDone }) => (
		<ul className='list'>
			{ list.map(({ id, content, important, done }) => (
						<TodoItem 
						key={id}
						id={id}
						content={content} 
						important={important} 
						done={done} 
						listDelete={listDelete} 
						listImportant={listImportant} 
						listDone={listDone}
						/>
					)
				)

			}
		</ul>
	);

export default TodoList;
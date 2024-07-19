import React from 'react'
import s from './App-styled.module.css'

export type ValuePropsType = {
	value: number
	className?: string
	editMode: boolean
	error: boolean
}

export const Board = ({ value, className, editMode, error }: ValuePropsType) => {

	return (
		<div className={s.board}>
			{editMode ? 
			<p className={s.text}>enter values and press 'set'</p> 
		
				: error ? <p className={s.text}>Incorrect value!</p> :
				<span className={className}>{value}</span>
			}

			{/* {
				error ? <p className={s.text}>Incorrect value!</p> : <span className={className}>{value}</span>
			} */}
		</div>
	)
}


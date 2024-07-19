import React, { ButtonHTMLAttributes } from 'react'

type ButtonPropsType = ButtonHTMLAttributes<HTMLButtonElement> & {
	onClick: () => void
}

export const Button = ({ title, onClick, disabled }: ButtonPropsType) => {

	const onClickHandler = () => {
		onClick()
	}
	return (
		<button onClick={onClickHandler} disabled={disabled}>{title}</button>
	)
}


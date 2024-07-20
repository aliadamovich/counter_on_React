import { ChangeEvent, useState } from 'react';
import s from './App-styled.module.css'
import { Button } from './Button';

type SettingsPropsType = {
	maxValue: number
	value: number
	setSettings: (max: number, min: number) => void
	setEditMode: (editMode: boolean) => void
	setError: (error: boolean) => void
	error: boolean
}

export const Settings = ({ maxValue, value, setSettings, setEditMode, setError, error }: SettingsPropsType) => {
	const [max, setMax] = useState<number>(maxValue);
	const [min, setMin] = useState<number>(value);


	const handleValueChange = (value: number, isMax: boolean) => {
		setEditMode(true);

		if (((isMax && value <= min )|| (isMax && min < 0)) || ((!isMax && value >= max )|| (!isMax && value < 0))){
			setError(true)
		} else {
			setError(false)
		}
		if (isMax) {
				setMax(value)
			} else {
				setMin(value)
			}
	}

	const onMaxValueChange = (value: number) => { handleValueChange(value, true) }
	const onMinValueChange = (value: number) => { handleValueChange(value, false)}


	const onButtonClickHandler = ( ) => {
		setEditMode(false)
		setSettings(max, min)
	}

	return (
		<div className={s.counter}>
			<div className={s.board}>
				<InputWithSettings labelTitle={'max value: '} value={max} setCurrentValue={onMaxValueChange} error={error}/>
				<InputWithSettings labelTitle={'min value: '} value={min} setCurrentValue={onMinValueChange} error={error}/>
			</div>
			
			<div className={s.board}>
				<Button title='set' onClick={onButtonClickHandler} disabled={error}/>
			</div>
		</div>
	)
}

type InputType = {
	labelTitle: string
	value: number
	setCurrentValue: (value: number) => void
	error: boolean
}

export const InputWithSettings = (props: InputType) => {

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		props.setCurrentValue(Number(e.currentTarget.value))
	}

	return (
		<label>{props.labelTitle}
			<input type="number" 
			value={props.value}
			onChange={onChangeHandler} 
			className={props.error ? s.error : ''}
			/>
		</label>
	)
}




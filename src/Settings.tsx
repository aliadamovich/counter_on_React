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
	// const [error, setError] = useState(false)

	const onMaxValueChange = (e: ChangeEvent<HTMLInputElement>) => {
		setEditMode(true);
		if (Number(e.currentTarget.value) <= min || min < 0) {
			setError(true)
		} else {
			setError(false)
		}
		setMax(Number(e.currentTarget.value))
	}

	const onMinValueChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (Number(e.currentTarget.value) < 0 || Number(e.currentTarget.value) >= max ) {
			setError(true)
		} else {
			setError(false)
		}
		setMin(Number(e.currentTarget.value))
		
	}
	

	const onSettingsClickHandler = ( ) => {
		setEditMode(false)
		setSettings(max, min)
	}

	return (
		<div className={s.counter}>
			<div className={s.board}>
				{/* <InputWithSettings labelTitle={'max value: '} maxValue={maxValue}/>
				<InputWithSettings labelTitle={'min value: '} value={value}/> */}

				<label>max value: 
					<input type="number" value={max} onChange={onMaxValueChange}
					className={error ? s.error : ''}
					/>
				</label>
				<label>start value: 
					<input type="number" value={min} onChange={onMinValueChange} 
						className={error ? s.error : ''}
					/>
				</label>
			</div>
			
			<div className={s.board}>
				<Button title='set' onClick={onSettingsClickHandler} disabled={error}/>
			</div>
		</div>
	)
}
// type InputType =  {
// 	labelTitle: string
// 	value?: number
// 	maxValue?: number
// }

// export const InputWithSettings = (props: InputType) => {
// 	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {

// 	}

// 	return (
// 		<label>{props.labelTitle}
// 			<input type="number" value={props.maxValue} onChange={onChangeHandler} />
// 		</label>
// 	)
// }
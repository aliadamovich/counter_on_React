import './App.css';
import s from './App-styled.module.css'
import { Board } from './Board';
import { useEffect, useState } from 'react';
import { Button } from './Button';
import { Settings } from './Settings';


function App() {
	const [value, setValue] = useState<number>(0);
	const [maxValue, setMaxValue] = useState<number>(5);
	const [editMode, setEditMode] = useState(false)
	const [error, setError] = useState(false)


	useEffect(() => {
		const minValueFromStorage = JSON.parse(localStorage.getItem('minValue') || '')
		const maxValueFromStorage = JSON.parse(localStorage.getItem('maxValue') || '')
		setValue(minValueFromStorage)
		setMaxValue(maxValueFromStorage)
	}, [])

	useEffect(() => {
		localStorage.setItem('minValue', JSON.stringify(value));
		localStorage.setItem('maxValue', JSON.stringify(maxValue));

	}, [value, maxValue])


	const incrementCounter = () => {
		if (value >= maxValue) return
		setValue(value + 1) //правильнее
	}

	const resetCounter = () => {
		setValue(0)
		// setMaxValue(setRandomMaxValue())
	}

	const setSettings = (max: number, min: number) => {
		setValue(min)
		setMaxValue(max)
	}

	
	const setRandomMaxValue = () => { return Math.floor(Math.random() * (10 - 1 + 1) + 1) }

    return (
			<div className={s.app}>
				<Settings 
					maxValue={maxValue} 
					value={value} 
					setSettings={setSettings} 
					setEditMode={setEditMode}
					setError={setError}
					error={error}
				/>
	      	<div className={s.counter}>
					<Board 
						value={value} 
						className={value >= maxValue ? `${s.number} ${s.maxNumber}` : s.number} 
						editMode={editMode}
						error={error}
					/>
					<span>Max value: {maxValue}</span>
					<div className={s.board}>
						<Button title='inc' onClick={incrementCounter} disabled={value >= maxValue || error || editMode} />
						<Button title='reset' onClick={resetCounter} disabled={value === 0 || error || editMode}/>
					</div>
				</div>
				
						{/* <ProgressBar width={(value / maxValue * 100) + '%'} /> */}
			</div>
    );
}


export default App;




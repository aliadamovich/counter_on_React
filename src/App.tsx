import './App.css';
import s from './App-styled.module.css'
import { Board } from './Board';
import { useEffect, useState } from 'react';
import { Button } from './Button';
import { Settings } from './Settings';
import { useSelector } from 'react-redux';
import { incrementCounterAC, InitialStateType, resetCounterAC, setValuesAC } from './components/state/reducers/ValuesReducer';
import { AppRootStateType } from './components/state/store';
import { useDispatch } from 'react-redux';
import { getStateFromLocalStorage } from './localStorage';



function App() {
	const [editMode, setEditMode] = useState(false)
	const [error, setError] = useState(false)

	const value = useSelector<AppRootStateType, number>(state => state.counterValues.minValue)
	const maxValue = useSelector<AppRootStateType, number>(state => state.counterValues.maxValue)
	const dispatch = useDispatch();

//*localStorage
	// useEffect(() => {
	// 	const minValueFromStorage = JSON.parse(localStorage.getItem('minValue') || '')
	// 	const maxValueFromStorage = JSON.parse(localStorage.getItem('maxValue') || '')
	// 	setValue(minValueFromStorage)
	// 	setMaxValue(maxValueFromStorage)
	// }, [])

	// useEffect(() => {
	// 	localStorage.setItem('minValue', JSON.stringify(value));
	// 	localStorage.setItem('maxValue', JSON.stringify(maxValue));

	// }, [value, maxValue])
//*


	const incrementCounter = () => {
		if (value >= maxValue) return
		dispatch(incrementCounterAC())
	}

	const resetCounter = () => {
		dispatch(resetCounterAC())
	}

	const setSettings = (max: number, min: number) => {
		dispatch(setValuesAC(min, max))
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
					{/* <button onClick={saveStateToLocalStorage } >save</button>
					<button onClick={getStateFromLocalStorage } >get</button> */}
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




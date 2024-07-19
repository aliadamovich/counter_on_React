import s from './../App-styled.module.css'

export const ProgressBar = (props: {width: string}) => {
	return (
		<div className={s.progress}>
			<div className={s.progressBar} style={{ width: props.width}}></div>
		</div>
	)
}
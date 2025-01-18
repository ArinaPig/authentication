import { WindowProps } from '../model/types'
import style from '../../../index.module.css'

export const Window: React.FC<WindowProps> = props => {
	const { form_header } = { ...props }
	const { contact_label } = { ...props }

	return (
		<div className={style.window}>
			<p className={style.form_header}>{form_header}</p>
			<div className={style.text_input}>
				<input type='text' placeholder='Name' className={style.input} />
				<input type='email' placeholder='Email' className={style.input} />
				<input type='tel' placeholder='Phone' className={style.input} />
			</div>
			<label htmlFor='contact_method'>{contact_label}</label>
			<div className={style.contact_method}>
				<input type='radio' name='method' id='0' />
				<label htmlFor='Email'>Email</label>
				<input type='radio' name='method' id='1' />
				<label htmlFor='Phone'>Phone</label>
			</div>
			<textarea
				name='massage'
				placeholder='Message'
				rows={6}
				className={style.input}
			></textarea>
      <input type="submit" value='Submit' className={style.submit}/>
		</div>
	)
}

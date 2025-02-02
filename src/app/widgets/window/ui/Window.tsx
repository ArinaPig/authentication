'use client'

import React, { useState } from 'react'
import { WindowProps } from '../model/types'
import style from '../../../index.module.css'

export const Window: React.FC<WindowProps> = props => {
	const { form_header } = { ...props }
	const { contact_label } = { ...props }

	const [formState, setFormState] = useState({
		name: '',
		email: '',
		number: '',
		contactMethod: 'email',
		message: '',
	})

	const onChange = (e: React.FormEvent<HTMLFormElement>) => {
		const { name, value } = e.target
		setFormState({ ...formState, [name]: value })
	}

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log(formState)
		setFormState({
			name: '',
			email: '',
			number: '',
			contactMethod: 'email',
			message: '',
		})
	}

	return (
		<form onSubmit={onSubmit}>
			<div className={style.window}>
				<p className={style.form_header}>{form_header}</p>
				<div className={style.text_input}>
					<input
						type='text'
						placeholder='Name'
						name='name'
						value={formState.name}
						onChange={onChange}
						className={style.input}
					/>
					<input
						type='email'
						placeholder='Email'
						name='email'
						value={formState.email}
						onChange={onChange}
						className={style.input}
					/>
					<input
						type='tel'
						placeholder='Phone'
						name='number'
						value={formState.number}
						onChange={onChange}
						className={style.input}
					/>
				</div>
				<label htmlFor='contact_method'>{contact_label}</label>
				<div className={style.contact_method}>
					<div>
						<input
							type='radio'
							name='contactMethod'
							id='contactMethodEmail'
							value='email'
							checked={formState.contactMethod === 'email'}
							onChange={onChange}
						/>
						<label htmlFor='Email'> Email</label>
					</div>
					<div>
						<input
							type='radio'
							name='contactMethod'
							id='contactMethodPhone'
							value='phone'
							checked={formState.contactMethod === 'phone'}
							onChange={onChange}
						/>
						<label htmlFor='Phone'> Phone</label>
					</div>
				</div>
				<div className={style.textarea}>
					<div>
						<input type='checkbox' name='agree' />
						<label htmlFor='agree'>
							I agree to receive a reply by my {formState.contactMethod}
						</label>
					</div>
					<textarea
						placeholder='Message'
						rows={6}
						className={style.input}
						name='message'
						value={formState.message}
						onChange={onChange}
					></textarea>
				</div>
				<input type='submit' value='Submit' className={style.submit} />
			</div>
		</form>
	)
}

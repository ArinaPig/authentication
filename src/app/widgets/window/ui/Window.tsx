'use client'

import React, { useState } from 'react'
import { WindowProps } from '../model/types'
import style from '../../../index.module.css'

export const Window: React.FC<WindowProps> = props => {
	const { form_header } = { ...props }
	const { contact_label } = { ...props }

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [number, setNumber] = useState('')
	const [contactMethod, setContactMethod] = useState('email')
	const [message, setMessage] = useState('')

	const nameOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value)
	}

	const emailOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value)
	}

	const numberOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNumber(e.target.value)
	}

	const contactMethodOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setContactMethod(e.target.value as 'email' | 'phone')
	}

	const messageOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setMessage(e.target.value)
	}

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log(name)
		console.log(email)
		console.log(number)
		console.log(contactMethod)
		console.log(message)
		setName('')
		setEmail('')
		setNumber('')
		setContactMethod('')
		setMessage('')
	}

	return (
		<form onSubmit={onSubmit}>
			<div className={style.window}>
				<p className={style.form_header}>{form_header}</p>
				<div className={style.text_input}>
					<input
						type='text'
						placeholder='Name'
						value={name}
						onChange={nameOnChange}
						className={style.input}
					/>
					<input
						type='email'
						placeholder='Email'
						value={email}
						onChange={emailOnChange}
						className={style.input}
					/>
					<input
						type='tel'
						placeholder='Phone'
						value={number}
						onChange={numberOnChange}
						className={style.input}
					/>
				</div>
				<label htmlFor='contact_method'>{contact_label}</label>
				<div className={style.contact_method}>
					<div>
						<input
							type='radio'
							name='method'
							id='contactMethodEmail'
							value='email'
							checked={contactMethod === 'email'}
							onChange={contactMethodOnChange}
						/>
						<label htmlFor='Email'> Email</label>
					</div>
					<div>
						<input
							type='radio'
							name='method'
							id='contactMethodPhone'
							value='phone'
							checked={contactMethod === 'phone'}
							onChange={contactMethodOnChange}
						/>
						<label htmlFor='Phone'> Phone</label>
					</div>
				</div>
				<div className={style.textarea}>
					<div>
						<input type='checkbox' name='agree' />
						<label htmlFor='agree'>
							I agree to receive a reply by my {contactMethod}
						</label>
					</div>
					<textarea
						name='massage'
						placeholder='Message'
						rows={6}
						className={style.input}
						value={message}
						onChange={messageOnChange}
					></textarea>
				</div>
				<input type='submit' value='Submit' className={style.submit} />
			</div>
		</form>
	)
}

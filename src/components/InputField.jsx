/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { MdError, MdCheckCircle } from 'react-icons/md'
import { ValidateEmail, ValidatePassword } from '../helpers/validateInputs'
const InputField = ({ type, placeholder, name, value, setValue }) => {
	const initailState = {
		msg: null,
		error: false,
	}
	const [touched, setTocuhed] = useState(false)
	const [error, setError] = useState(initailState)
	useEffect(() => {
		let msg = ''
		if (type === 'email') msg = ValidateEmail(value[type])
		if (type === 'password') msg = ValidatePassword(value[type])
		if (msg === null) setError(initailState)
		else setError({ msg: msg, error: true })
	}, [value])
	return (
		<div className='w-full relative'>
			<input
				onBlur={() => setTocuhed(true)}
				type={type}
				placeholder={placeholder}
				name={name}
				onChange={(e) => setValue({ ...value, [name]: e.target.value })}
				className={`w-full h-12 bg-white px-2 ${
					error.msg ? 'outline-red-600' : 'outline-blue-600'
				} border-2 rounded-md`}
			/>
			{touched && error && <small className='font-normal italic text-red-600'>{error.msg}</small>}
			{touched && error.msg && (
				<div className='absolute top-3 right-0 text-red-600'>
					<MdError size={24} />
				</div>
			)}
			{touched && !error.msg && (
				<div className='absolute top-3 right-0 text-green-600'>
					<MdCheckCircle size={24} />
				</div>
			)}
		</div>
	)
}

export default InputField

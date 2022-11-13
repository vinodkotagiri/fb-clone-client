import React, { useState, useEffect } from 'react'
import { MdClose } from 'react-icons/md'
import InputField from './InputField'
import { postRegister } from '../services/auth'
import Loader from './Loader'
const RegistrationModal = ({ setOpenRegistrationModal }) => {
	const [loading, setLoading] = useState(false)
	const [registration, setRegistration] = useState({
		first_name: '',
		last_name: '',
		email: '',
		password: '',
		bDay: '1',
		bMonth: '1',
		bYear: '1991',
		gender: 'male',
	})
	const [dates, setDates] = useState({
		days: null,
		months: null,
		years: null,
	})
	function prepareDate() {
		const days = []
		const months = []
		const years = []
		for (let i = 0; i < 31; i++) {
			days.push(i + 1)
		}
		for (let i = 0; i < 12; i++) {
			months.push(i + 1)
		}
		for (let i = 1969; i < 1999; i++) {
			years.push(i + 1)
		}
		setDates({ days, months, years })
	}
	useEffect(() => {
		prepareDate()
	}, [])
	const handleRegister = (e) => {
		setLoading(true)
		e.preventDefault()
		postRegister(registration)
			.then((response) => {
				console.log(response)
				setLoading(false)
				setOpenRegistrationModal(true)
			})
			.catch((error) => {
				console.log(error)
				setLoading(false)
			})
	}
	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<div className='p-3 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[30vw] h-3/4 bg-white rounded-xl shadow-xl'>
					<p className='text-3xl font-bold mt-2'>Sign Up</p>
					<p className='text-md font-normal text-gray-600 mt-1'>It's quick and easy.</p>
					<MdClose
						className='text-gray-600 absolute top-1 right-1 cursor-pointer'
						size={32}
						onClick={() => setOpenRegistrationModal(false)}
					/>
					<hr className='my-3' />
					<form className='flex flex-col gap-3'>
						<div className='flex gap-2 '>
							<InputField
								type='text'
								placeholder='First Name'
								name='first_name'
								setValue={setRegistration}
								value={registration}
							/>
							<InputField
								type='text'
								placeholder='Last Name'
								name='last_name'
								setValue={setRegistration}
								value={registration}
							/>
						</div>
						<InputField
							type='email'
							placeholder='Email address'
							name='email'
							setValue={setRegistration}
							value={registration}
						/>
						<InputField
							type='password'
							placeholder='Password'
							name='password'
							setValue={setRegistration}
							value={registration}
						/>
						<label className='font-normal text-sm text-gray-600'>Date of birth</label>
						<div className='flex gap-2'>
							<select
								className='border-2 h-12 w-1/3 rounded-lg px-4'
								onChange={(e) => setRegistration({ ...registration, bDay: e.target.value })}>
								{dates.days?.map((day, index) => (
									<option>{day}</option>
								))}
							</select>
							<select
								className='border-2 h-12 w-1/3 rounded-lg px-4'
								onChange={(e) => setRegistration({ ...registration, bMonth: e.target.value })}>
								{dates.months?.map((month, index) => (
									<option>{month}</option>
								))}
							</select>
							<select
								className='border-2 h-12 w-1/3 rounded-lg px-4'
								onChange={(e) => setRegistration({ ...registration, bYear: e.target.value })}>
								{dates.years?.map((year, index) => (
									<option>{year}</option>
								))}
							</select>
						</div>
						<label className='font-normal text-sm text-gray-600'>Gender</label>
						<div className='flex gap-2 align-center'>
							<label className='flex gap-2 w-1/3'>
								<input type='radio' name='gender' value='male' defaultChecked />
								Male
							</label>
							<label className='flex gap-2 w-1/3'>
								<input type='radio' name='gender' value='feamle' /> Female
							</label>
							<label className='flex gap-2 w-1/3'>
								<input type='radio' name='gender' value='others' /> Others
							</label>
						</div>
						<button
							className='bg-green-600 text-white font-semibold text-lg p-3 mt-3 rounded-md mx-14 mb-6'
							onClick={handleRegister}>
							Sign Up
						</button>
					</form>
				</div>
			)}
		</>
	)
}

export default RegistrationModal

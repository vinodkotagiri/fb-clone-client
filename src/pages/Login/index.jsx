import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/login-logo.svg'
import InputField from '../../components/InputField'
const Login = () => {
	return (
		<div className='h-screen w-screen flex items-center justify-center gap-3'>
			<div className='flex justify-between'>
				<div className='w-2/4'>
					<img src={logo} alt='logo' className='h-24' />
					<p className='text-3xl ml-7'>Facebook helps you connect and share with the people in your life.</p>
				</div>
				<div className='w-[360px] p-3 rounded-md shadow-lg bg-white'>
					<form className='w-full flex flex-col gap-3 mt-3 align-center justify-center'>
						<InputField type='email' placeholder='Enter email address' />
						<InputField type='password' placeholder='Enter password' />
						<button className='bg-blue-600 text-white font-semibold text-xl p-3 mt-3 rounded-md'>Login</button>
						<Link className='text-center mt-1 text-lg font-semibold text-cyan-800'>Forgotten Password?</Link>
						<div className='h-[2px] bg-gray-300 mx-2' />
						<button className='bg-green-600 text-white font-semibold text-lg p-3 mt-3 rounded-md mx-14 mb-6'>
							Create New Account
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Login

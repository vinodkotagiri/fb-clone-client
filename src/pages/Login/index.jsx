import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/login-logo.svg'
import InputField from '../../components/InputField'
import Loader from '../../components/Loader'
import RegistrationModal from '../../components/RegistrationModal'
import { postLogin } from '../../services/auth'
const Login = () => {
	const [loading, setLoading] = useState(false)
	const [data, setData] = useState({
		email: '',
		password: '',
	})
	const [openRegistrationModal, setOpenRegistrationModal] = useState(false)
	const handleLogin = (e) => {
		setLoading(true)
		e.preventDefault()
		postLogin(data)
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
				<div className='h-screen w-screen flex items-center justify-center gap-3 relative'>
					<div className='flex justify-between'>
						<div className='w-2/4'>
							<img src={logo} alt='logo' className='h-24' />
							<p className='text-3xl ml-7'>Facebook helps you connect and share with the people in your life.</p>
						</div>
						<div className='w-[360px] p-3 rounded-md shadow-xl bg-white flex flex-col align-center justify-center'>
							<form className='w-full flex flex-col gap-3 mt-3 align-center justify-center'>
								<InputField
									type='email'
									placeholder='Enter email address'
									name='email'
									setValue={setData}
									value={data}
								/>
								<InputField
									type='password'
									placeholder='Enter password'
									name='password'
									setValue={setData}
									value={data}
								/>
								<button
									className='bg-blue-600 text-white font-semibold text-xl p-3 mt-3 rounded-md'
									onClick={handleLogin}>
									Login
								</button>
								<Link className='text-center mt-1 text-lg font-semibold text-cyan-800'>Forgotten Password?</Link>
								<div className='h-[2px] bg-gray-300 mx-2' />
							</form>
							<button
								className='bg-green-600 text-white font-semibold text-lg p-3 mt-3 rounded-md mx-14 mb-6'
								onClick={() => setOpenRegistrationModal(true)}>
								Create New Account
							</button>
						</div>
					</div>
				</div>
			)}
			{openRegistrationModal && <RegistrationModal setOpenRegistrationModal={setOpenRegistrationModal} />}
		</>
	)
}

export default Login

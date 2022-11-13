import React from 'react'

const InputField = ({ type, placeholder }) => {
	return (
		<div className='w-full'>
			<input type={type} placeholder={placeholder} className='w-full h-12 bg-white px-2 outline-blue-600' />
		</div>
	)
}

export default InputField

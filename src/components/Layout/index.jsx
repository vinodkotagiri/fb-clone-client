import React from 'react'
import Header from '../Header'

const Layout = ({ children }) => {
	return (
		<div className='flex flex-col'>
			<Header />
			{/* LEFTSIDER */}
			{children}
			{/* RIGHTSIDER */}
		</div>
	)
}

export default Layout

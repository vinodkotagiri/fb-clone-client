import React from 'react'
import { GridLoader } from 'react-spinners'
const Loader = ({ loading }) => {
	return (
		<div className='w-screen h-screen flex items-center justify-center'>
			<GridLoader color='#1877f2' loading margin={4} size={32} loading={loading} />
		</div>
	)
}

export default Loader

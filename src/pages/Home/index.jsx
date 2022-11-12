import React, { useRef } from 'react'
import Layout from '../../components/Layout'
import useClickOutside from '../../helpers/outsideClicked'

const Home = () => {
	const searchCardRef = useRef(null)
	useClickOutside(searchCardRef, () => {
		searchCardRef.current.style.display = 'none'
	})
	return (
		<Layout>
			<div className='h-[500px] w-[500px] bg-red-400' ref={searchCardRef}>
				Hello
			</div>
		</Layout>
	)
}

export default Home

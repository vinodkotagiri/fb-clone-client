/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import SearchMenu from '../SearchMenu'
import {
	ArrowDown,
	Friends,
	Gaming,
	HomeActive,
	Logo,
	Market,
	Menu,
	Messenger,
	Notifications,
	Search,
	Watch,
} from '../../assets/svg'

const Header = () => {
	const user = useSelector((state) => state.auth.user)
	const tempAvatar = 'https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png'
	const color = '#65676B'
	const [active, setActive] = useState({ home: true })
	return (
		<header className='sticky top-0 h-14 z-50 bg-primary w-full shadow-lg grid grid-cols-3 text-primary-color items-center'>
			{/* LEFT SECTION START */}
			<div className='flex items-center gap-3 px-4'>
				<Link to='/'>
					<div className='w-10 h-10 rounded-full flex items-center justify-center'>
						<Logo />
					</div>
				</Link>
				<div className='flex items-center gap-2 bg-forth-bg py-3 pr-8 pl-3 rounded-full cursor-text'>
					<Search color={color} />
					<input className='outline-none border-none bg-transparent text-md ' placeholder='Search Facebook' />
				</div>
			</div>
			<SearchMenu />
			{/* LEFT SECTION END */}
			{/* CENTER SECTION START */}
			<div className='flex items-center gap-3'>
				<Link
					to='/'
					onClick={() => setActive({ home: true })}
					className={`relative flex items-center justify-center w-32 h-12 cursor-pointer rounded-sm hover:bg-secondary-bg hover:rounded-xl ${
						active.home ? 'border-b-4 border-blue-color ' : ''
					}`}>
					<HomeActive color={color} />
				</Link>
				<Link
					to='/'
					onClick={() => setActive({ friends: true })}
					className={`relative flex items-center justify-center w-32 h-12 cursor-pointer rounded-sm hover:bg-secondary-bg hover:rounded-xl ${
						active.friends ? 'border-b-4 border-blue-color' : ''
					}`}>
					<Friends color={color} />
				</Link>
				<Link
					to='/'
					onClick={() => setActive({ watch: true })}
					className={`relative flex items-center justify-center w-32 h-12 cursor-pointer rounded-sm hover:bg-secondary-bg hover:rounded-xl ${
						active.watch ? 'border-b-4 border-blue-color' : ''
					}`}>
					<Watch color={color} />
					<div className='absolute top-0 bg-red-500  text-xs text-white flex items-center justify-center p-[2px] rounded-full right-4 text'>
						9+
					</div>
				</Link>
				<Link
					to='/'
					onClick={() => setActive({ market: true })}
					className={`relative flex items-center justify-center w-32 h-12 cursor-pointer rounded-sm hover:bg-secondary-bg hover:rounded-xl ${
						active.market ? 'border-b-4 border-blue-color' : ''
					}`}>
					<Market color={color} />
				</Link>
				<Link
					to='/'
					onClick={() => setActive({ game: true })}
					className={`relative flex items-center justify-center w-32 h-12 cursor-pointer rounded-sm hover:bg-secondary-bg hover:rounded-xl ${
						active.game ? 'border-b-4 border-blue-color' : ''
					}`}>
					<Gaming color={color} />
				</Link>
			</div>

			{/* CENTER SECTION END */}
			<div className='flex absolute items-center  mr-3 right-0 top-1 mt-1'>
				<Link to='/profile' className='flex items-center gap-1 cursor-pointer mr-3'>
					<img src={tempAvatar} alt='user' className='h-8 w-8 rounded-full' />
					<span className='text-md font-semibold'>Vinod Kotagiri</span>
				</Link>
				<div className='relative h-10 w-10 rounded-full flex items-center justify-center mr-2 cursor-pointer  hover:bg-secondary-bg'>
					<Menu />
				</div>
				<div className='relative h-10 w-10 rounded-full flex items-center justify-center mr-2 cursor-pointer  hover:bg-secondary-bg'>
					<Messenger />
				</div>
				<div className='relative h-10 w-10 rounded-full flex items-center justify-center mr-2 cursor-pointer  hover:bg-secondary-bg'>
					<Notifications />
					<div className='absolute top-1 right-1 px-[2px] bg-red-500  text-xs  text-white flex items-center justify-center  rounded-full '>
						5
					</div>
				</div>
				<div className='relative h-10 w-10 rounded-full flex items-center justify-center mr-2 cursor-pointer  hover:bg-secondary-bg'>
					<ArrowDown />
				</div>
			</div>
		</header>
	)
}
export default Header

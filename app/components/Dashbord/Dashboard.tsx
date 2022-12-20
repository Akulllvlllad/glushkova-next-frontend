import React, { FC, ReactNode } from 'react'
import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'
import { Main } from './Main/Main'

type Dashboard = {
	children: ReactNode
}



export const Dashboard: FC<Dashboard> = ({ children }) => {
	return (
		<div className='wrapper'>
			<Header />
			<Main >{children}</Main>
			<Footer />
		</div>
	)
}

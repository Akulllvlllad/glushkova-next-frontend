import React, { FC, ReactNode } from 'react'

type Main = {
	children: ReactNode
}

export const Main: FC<Main> = ({ children }) => {
	return <main className='main'>{children}Main</main>
}

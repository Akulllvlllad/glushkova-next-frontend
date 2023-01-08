import { FC, ReactNode } from 'react'
import { useInView } from 'react-intersection-observer'
import cn from 'classnames'
type Main = {
	children: ReactNode
}

export const Main: FC<Main> = ({ children }) => {
	const { ref, inView, entry } = useInView({
		threshold: 0,
	})

	return (
		<main ref={ref} className={cn('main', { active: inView })}>
			{children}
		</main>
	)
}

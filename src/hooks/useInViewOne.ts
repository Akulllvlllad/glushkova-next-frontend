import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

export const useInViewOne = () => {
	const [isView, setIsView] = useState(false)

	const { ref, inView, entry } = useInView({
		threshold: 0,
	})

	useEffect(() => {
		if (inView) {
			setIsView(true)
		}
	}, [inView])
	return { ref, inView, entry, isView }
}

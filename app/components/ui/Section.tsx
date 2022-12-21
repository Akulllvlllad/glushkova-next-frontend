import React, { FC, ReactNode } from 'react'

type SectionProps = {
	children: ReactNode
	className: string
}

export const Section: FC<SectionProps> = ({ children, className }) => {
	return (
		<section className={`${className}`}>
			<div className={`${className}__container`}>
				<div className={`${className}__inner`}>{children}</div>
			</div>
		</section>
	)
}

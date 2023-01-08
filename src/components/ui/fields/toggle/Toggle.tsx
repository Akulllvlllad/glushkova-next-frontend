import styles from './Toggle.module.scss'

import { Switch } from '@headlessui/react'
import cn from 'classnames'
import React from 'react'

export interface IToggle {
	label?: string
	isEnabled: boolean
	setIsEnabled: () => void
}

export const Toggle: React.FC<IToggle> = ({
	isEnabled,
	setIsEnabled,
	label = '',
}) => {
	return (
		<label className={styles.root}>
			<Switch
				checked={isEnabled}
				onChange={setIsEnabled}
				className={cn(styles.switch, {
					[styles.isEnabled]: isEnabled,
					[styles.isNotEnabled]: !isEnabled,
				})}
			>
				<span
					className={cn(styles.point, {
						[styles.translate6]: isEnabled,
						[styles.translate0]: !isEnabled,
					})}
				/>
			</Switch>
			{label}
		</label>
	)
}

import { Dashboard } from '../app/components/Dashbord/Dashboard'
import { Section } from '../app/components/ui/section'
import { ServiceItem } from '../app/components/ui/service-item/ServiceItem'
import { TitlePage } from '../app/components/ui/title/TitlePage'


type Service = {
	name: string
	price: string
	description: string
}


const services: Service[] = [
	{
		name: 'ЖЕЛАНИЕ',
		price: '150 000',
		description:
			'— Консультация — Съёмка 10 часов -  Работа 1 фотографа — Количество фотографий 500+ — Авторская обработка всех фотографий — Срок сдачи  до 5 месяцев',
	},
	{
		name: 'ЖЕЛАНИЕ',
		price: '150 000',
		description:
			'— Консультация — Съёмка 10 часов -  Работа 1 фотографа — Количество фотографий 500+ — Авторская обработка всех фотографий — Срок сдачи  до 5 месяцев',
	},
]

const servicesPage = {
	services,
	extra: ''
}

export default function Services() {
	return (
		<Dashboard>
			<TitlePage>Цены</TitlePage>
			<Section className='Services'>
				{servicesPage.services.map(obj => (
					<ServiceItem key={obj.name} {...obj} />
				))}
			</Section>
		</Dashboard>
	)
}

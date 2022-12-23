import { Dashboard } from '../app/components/Dashbord/Dashboard'
import { ExtraInfo } from '../app/components/ui/Extra-info/ExtraInfo'
import { Section } from '../app/components/ui/section'
import { ServiceItem } from '../app/components/ui/service-item/ServiceItem'
import { TitlePage } from '../app/components/ui/title/TitlePage'
import { WhatsappButton } from '../app/components/ui/whatsapp-button/WhatsappButton'


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
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nisl nec mi porta tempor. Suspendisse potenti. Ut a congue magna. Ut semper neque at leo faucibus, eu gravida turpis mollis. Donec placerat eros ac justo ullamcorper, vel pellentesque velit pretium. In hac habitasse platea dictumst. Sed enim lacus, convallis vitae mauris quis, ultricies elementum orci. Suspendisse ut metus ut massa ultrices imperdiet. Integer tincidunt nulla sit amet arcu tristique condimentum. Sed eget dictum ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ',
	},
	{
		name: 'ЖЕЛАНИЕ',
		price: '150 000',
		description:
			'Sed nec orci eu dolor pharetra fermentum nec a orci. Vivamus at ultrices dolor. In placerat dolor velit, at lacinia sem dictum mattis. Nullam placerat tempor eros, non hendrerit quam iaculis sed. Cras gravida neque ac turpis sollicitudin ultrices. Praesent rutrum, sapien id facilisis convallis, lectus quam varius quam, a tincidunt lorem risus vel orci. Nam rutrum, diam a maximus vehicula, massa elit dapibus dolor, vitae faucibus lectus lacus eu sem. Aliquam nec interdum eros. Etiam laoreet gravida elit, a ultrices neque auctor ut. Donec sed condimentum ',
	},
]

const servicesPage = {
	services,
	extra:
		'Nulla quam nisl, vulputate sed ex eu, tincidunt laoreet sapien. Proin venenatis pellentesque faucibus. Pellentesque nisl sem, fringilla quis auctor vitae, aliquam a dolor. Praesent at eros ac augue pellentesque sagittis. Vivamus posuere, orci et faucibus viverra, diam augue vehicula nunc, a bibendum lacus metus vitae orci. Fusce faucibus dui neque, id dapibus massa viverra porttitor. Aliquam erat volutpat. Cras sit amet est ut orci scelerisque suscipit. Curabitur eu tempor odio, a venenatis nisi. Nulla ut odio sed justo dignissim iaculis. In id faucibus arcu. Proin eget lobortis lacus. Pellentesque quis ipsum vehicula neque tempor convallis. Proin pellentesque, nisi non ultrices feugiat, odio mi efficitur augue, vitae gravida nunc massa vitae diam. Pellentesque porttitor, augue vitae cursus posuere, lectus urna dapibus erat, id porta mauris lacus non dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; ',
}

export default function Services() {
	return (
		<Dashboard>
			<TitlePage>Цены</TitlePage>
			<Section className='Services'>
				{servicesPage.services.map(obj => (
					<ServiceItem key={obj.name} {...obj} />
				))}
				<ExtraInfo ExtraInfo={servicesPage.extra} />
			</Section>
			<WhatsappButton />
		</Dashboard>
	)
}

import { Inter } from '@next/font/google'
import { Dashboard } from '../src/components/Dashbord/Dashboard'
import { ReactSlick } from '../src/components/ui/slider/ReactSlick'


import img1 from '../src/assets/image/look.com.ua-119261.jpg'
import img2 from '../src/assets/image/look.com.ua-119414.jpg'
import img3 from '../src/assets/image/look.com.ua-120051.jpg'
import img4 from '../src/assets/image/look.com.ua-124887.jpg'
import img5 from '../src/assets/image/look.com.ua-129159.jpg'
import img6 from '../src/assets/image/look.com.ua-142516.jpg'
import img7 from '../src/assets/image/look.com.ua-66330.jpg'
import img8 from '../src/assets/image/look.com.ua-66393.jpg'

const imageArr = [img1, img2, img3, img4, img5, img6, img7, img8]





const inter = Inter({ subsets: ['latin'] })

export default function Home() {

	
  return (
		<Dashboard>
			<ReactSlick arr={imageArr} />
		</Dashboard>
	)
}

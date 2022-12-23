import { GetStaticPaths } from "next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Dashboard } from "../../app/components/Dashbord/Dashboard"
import { Section } from "../../app/components/ui/section"


const gallery = [
	{ id: '1', title: 'one', gallery: [] },
	{ id: '2', title: 'two', gallery: [] },
	{ id: '3', title: 'three', gallery: [] },
	{ id: '4', title: 'six', gallery: [] },
]




export default function Gallery() {
  const router = useRouter()
  const { id } = router.query
  const [desc, setDesc] = useState('')

  useEffect(() => {
		if (!router.isReady) return

		gallery.map(item => {
			if (item.id === id) {
				setDesc(item.title)
			}
		})
	}, [router.query.id, router.isReady])

	return (
		<Dashboard>
			<Section className='Gallery'>
        <div></div>
      </Section>
		</Dashboard>
	)
}






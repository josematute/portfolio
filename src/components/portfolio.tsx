import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Now } from "@/components/now"
import { Footer } from "@/components/footer"

export function Portfolio() {
	return (
		<div className="min-h-screen">
			<Hero />
			<Now />
			<Projects />
			<Footer />
		</div>
	)
}

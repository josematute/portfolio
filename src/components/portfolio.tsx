import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Now } from "@/components/now"

export function Portfolio() {
	return (
		<div className="min-h-screen">
			<Hero />
			<Now />
			<Projects />
			{/* TODO: Add Footer */}
		</div>
	)
}

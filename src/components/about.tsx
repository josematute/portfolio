import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { CONTACT_INFO, PROFILE_DESCRIPTION } from "@/utils/constants"

export default function About() {
	return (
		<section id="about" className="pt-10">
			<div className="flex flex-col md:flex-row gap-8 items-start">
				<div className="w-full md:w-1/3 flex flex-col items-center">
					<div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/10 mb-4">
						<Image src="/yo.jpeg" alt="Jose E. Garcia" fill className="object-cover" priority />
					</div>
					<div className="flex gap-4 mt-2">
						<Link href={CONTACT_INFO.github} className="text-muted-foreground hover:text-foreground transition-colors">
							<Github className="h-5 w-5" />
							<span className="sr-only">GitHub</span>
						</Link>
						<Link href={CONTACT_INFO.linkedin} className="text-muted-foreground hover:text-foreground transition-colors">
							<Linkedin className="h-5 w-5" />
							<span className="sr-only">LinkedIn</span>
						</Link>
						<Link href={`mailto:${CONTACT_INFO.email}`} className="text-muted-foreground hover:text-foreground transition-colors">
							<Mail className="h-5 w-5" />
							<span className="sr-only">Email</span>
						</Link>
					</div>
				</div>
				<div className="w-full md:w-2/3">
					<h1 className="text-3xl font-bold mb-2">{CONTACT_INFO.name}</h1>
					<h2 className="text-xl text-muted-foreground mb-6">Full-Stack Software Engineer</h2>
					<Card>
						<CardContent className="pt-6">
							<p className="text-muted-foreground leading-relaxed">{PROFILE_DESCRIPTION}</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	)
}

import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"
import { SiGithub, SiLinkedin } from "react-icons/si"
import Link from "next/link"
import Image from "next/image"
import { CONTACT_INFO, PROFILE_DESCRIPTION } from "@/utils/constants"

export default function About() {
	return (
		<section id="about" className="pt-10">
			<div className="flex flex-col md:flex-row gap-8 items-start">
				<div className="w-full md:w-1/3 flex flex-col items-center">
					<div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/10 mb-4">
						<Image src="/yo.jpeg" alt={CONTACT_INFO.name} fill className="object-cover" priority />
					</div>
					<div className="flex flex-col items-center gap-2 text-sm text-muted-foreground">
						<div className="flex items-center gap-2">
							<Mail className="h-4 w-4" />
							<Link href={`mailto:${CONTACT_INFO.email}`} className="hover:text-foreground transition-colors">
								{CONTACT_INFO.email}
							</Link>
						</div>
						<div className="flex items-center gap-2">
							<Phone className="h-4 w-4" />
							<span>{CONTACT_INFO.phone}</span>
						</div>
						<div className="flex items-center gap-2">
							<MapPin className="h-4 w-4" />
							<span>{CONTACT_INFO.location}</span>
						</div>
					</div>
					<div className="flex gap-4 mt-4">
						<Link href={CONTACT_INFO.github} className="text-muted-foreground hover:text-foreground transition-colors">
							<SiGithub className="h-5 w-5" />
							<span className="sr-only">GitHub</span>
						</Link>
						<Link href={CONTACT_INFO.linkedin} className="text-muted-foreground hover:text-foreground transition-colors">
							<SiLinkedin className="h-5 w-5" />
							<span className="sr-only">LinkedIn</span>
						</Link>
					</div>
				</div>
				<div className="w-full md:w-2/3">
					<div className="text-center md:text-left">
						<h1 className="text-4xl font-bold mb-2">{CONTACT_INFO.name}</h1>
						<h2 className="text-xl text-muted-foreground mb-6">Full-Stack Software Engineer</h2>
					</div>
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

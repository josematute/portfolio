import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ME, HERO } from "@/constants"
import { SiGithub, SiLinkedin } from "react-icons/si"

export function Hero() {
	const handleResumeClick = () => {
		// Open resume in new tab
		window.open(ME.resumeUrl, "_blank", "noopener,noreferrer")
	}
	return (
		<section className="flex flex-col items-center justify-center min-h-screen px-4 py-16 text-center">
			{/* Profile Image */}
			<div className="mb-8">
				<img src={ME.localImage} alt={ME.name} className="w-32 h-32 rounded-full object-cover border-4 border-border shadow-lg" />
			</div>

			{/* Name */}
			<h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">{ME.name}</h1>

			{/* Tagline */}
			<p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-2xl">{HERO.tagline}</p>

			{/* Action Buttons */}
			<div className="flex flex-wrap items-center justify-center gap-4 mb-8">
				<Button onClick={handleResumeClick} size="lg" className="gap-2">
					<FileText className="size-5" />
					Resume
				</Button>

				<Button asChild variant="outline" size="lg" className="gap-2">
					<a href={ME.github} target="_blank" rel="noopener noreferrer">
						<SiGithub className="size-5" />
						GitHub
					</a>
				</Button>

				<Button asChild variant="outline" size="lg" className="gap-2">
					<a href={ME.linkedin} target="_blank" rel="noopener noreferrer">
						<SiLinkedin className="size-5" />
						LinkedIn
					</a>
				</Button>
			</div>

			{/* Proof Line */}
			<p className="text-sm md:text-base text-muted-foreground max-w-3xl">{HERO.proofLine}</p>
		</section>
	)
}

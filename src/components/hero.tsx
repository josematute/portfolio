import { FileText } from "lucide-react"
import { TypeAnimation } from "react-type-animation"
import { Button } from "@/components/ui/button"
import { ME } from "@/constants"
import { SiGithub, SiLinkedin } from "react-icons/si"

const sequenceDuration = 1750 // 1.75 seconds

export function Hero() {
	const handleResumeClick = () => {
		// Open resume in new tab
		window.open(ME.resumeUrl, "_blank", "noopener,noreferrer")
	}
	return (
		<section className="flex flex-col items-center justify-center px-4 py-12 text-center">
			{/* Profile Image */}
			<div className="mb-8">
				<img src={ME.localImage} alt={ME.name} className="w-32 h-32 rounded-full object-cover border-4 border-border shadow-lg" />
			</div>

			{/* Name */}
			<h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">{ME.name}</h1>

			{/* Animated Tagline */}
			<div className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-2xl min-h-14 flex items-center justify-center">
				<TypeAnimation
					sequence={[
						"Full-stack Developer (TypeScript + React)",
						sequenceDuration,
						"Building AI workflows with Langgraph and Claude",
						sequenceDuration,
						"Mobile Developer (Flutter)",
						sequenceDuration,
						"Exploring AI Agents with Langchain and OpenAI",
						sequenceDuration
					]}
					wrapper="span"
					speed={50}
					repeat={Infinity}
					className="inline-block"
				/>
			</div>

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

			{/* Proof Line with subtle animation */}
			<div className="text-sm md:text-base text-muted-foreground max-w-3xl">
				<TypeAnimation
					sequence={["Built fullstack applications using React, Flask, PostgreSQL, Supabase, and more"]}
					wrapper="p"
					speed={70}
					cursor={false}
				/>
			</div>
		</section>
	)
}

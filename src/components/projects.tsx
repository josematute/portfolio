import { ExternalLink, Briefcase, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PROJECTS } from "@/data/projects"
import { SiGithub } from "react-icons/si"

export function Projects() {
	return (
		<section className="py-8 md:py-12 px-6 md:px-12 max-w-7xl mx-auto">
			{/* Section Header */}
			<div className="mb-12 opacity-0 animate-[fadeIn_0.6s_ease-in_1.2s_forwards]">
				<h2 className="text-3xl md:text-4xl font-bold mb-3">Projects</h2>
				<p className="text-muted-foreground text-lg">Building full-stack applications with modern tech stacks</p>
			</div>

			{/* Projects Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{PROJECTS.map((project, index) => (
					<ProjectCard key={project.title} project={project} index={index} />
				))}
			</div>
		</section>
	)
}

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
	const [isExpanded, setIsExpanded] = useState(false)
	const isActive = !project.endDate
	const hasDescription = project.description && project.description.length > 0

	return (
		<Card
			className="flex flex-col h-full hover:shadow-lg transition-shadow opacity-0 translate-y-4 relative"
			style={{
				animation: `slideUp 0.8s ease-out ${1.6 + index * 0.15}s forwards`
			}}>
			{/* Status Badges - Top Right */}
			<div className="absolute top-3 right-3 flex gap-2 z-10">
				{isActive && (
					<Badge variant="default" className="bg-green-500 hover:bg-green-600 text-white animate-pulse">
						Active
					</Badge>
				)}
				{project.work && (
					<Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
						<Briefcase className="size-3 mr-1" />
						Work
					</Badge>
				)}
			</div>

			{/* Thumbnail */}
			{project.thumbnail && (
				<div className="w-full h-48 overflow-hidden rounded-t-xl">
					<img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
				</div>
			)}

			{/* Content */}
			<CardHeader>
				<CardTitle className="text-xl">{project.title}</CardTitle>
				<CardDescription>{project.pitch}</CardDescription>
			</CardHeader>

			<CardContent className="flex-1 space-y-3">
				{/* Expandable Description */}
				{hasDescription && (
					<div className="text-sm text-muted-foreground">
						<div className={isExpanded ? "" : "line-clamp-2"}>
							{project.description}
						</div>
						{project.description && project.description.length > 100 && (
							<button
								onClick={() => setIsExpanded(!isExpanded)}
								className="text-primary hover:underline flex items-center gap-1 mt-1 text-xs"
							>
								{isExpanded ? (
									<>
										Show less <ChevronUp className="size-3" />
									</>
								) : (
									<>
										Read more <ChevronDown className="size-3" />
									</>
								)}
							</button>
						)}
					</div>
				)}

				{/* Tech Stack Badges */}
				<div className="flex flex-wrap gap-2">
					{project.technologies.map((tech) => (
						<Badge key={tech} variant="secondary">
							{tech}
						</Badge>
					))}
				</div>
			</CardContent>

			{/* Footer with Links */}
			<CardFooter className="gap-2 pt-4 border-t">
				{project.github && (
					<Button asChild variant="outline" size="sm" className="flex-1">
						<a href={project.github} target="_blank" rel="noopener noreferrer">
							<SiGithub className="size-4" />
							Code
						</a>
					</Button>
				)}
				{project.link && (
					<Button asChild variant="default" size="sm" className="flex-1">
						<a href={project.link} target="_blank" rel="noopener noreferrer">
							<ExternalLink className="size-4" />
							Live
						</a>
					</Button>
				)}
				{!project.github && !project.link && <span className="text-sm text-muted-foreground">Private project</span>}
			</CardFooter>
		</Card>
	)
}

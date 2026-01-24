import { Github, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PROJECTS } from "@/data/projects"

export function Projects() {
	return (
		<section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
			{/* Section Header */}
			<div className="mb-12">
				<h2 className="text-3xl md:text-4xl font-bold mb-3">Projects</h2>
				<p className="text-muted-foreground text-lg">Building full-stack applications with modern tech stacks</p>
			</div>

			{/* Projects Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{PROJECTS.map((project) => (
					<Card key={project.title} className="flex flex-col h-full hover:shadow-lg transition-shadow">
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

						<CardContent className="flex-1">
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
										<Github className="size-4" />
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
				))}
			</div>
		</section>
	)
}

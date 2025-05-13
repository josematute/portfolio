import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { companies } from "@/utils/resume-data"
import { Briefcase } from "lucide-react"
import Image from "next/image"

export default function Experience() {
	return (
		<section id="experience" className="pt-10">
			<div className="flex items-center gap-2 mb-6">
				<Briefcase className="h-5 w-5" />
				<h2 className="text-2xl font-bold">Work Experience</h2>
			</div>
			<div className="space-y-6">
				{companies.map((company, index) => (
					<Card key={index}>
						<CardHeader className="pb-2">
							<div className="flex items-start gap-4">
								<div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0 border">
									<Image src={company.logo} alt={company.name} width={64} height={64} className="object-cover" priority />
								</div>
								<div>
									<h3 className="text-xl font-semibold">{company.name}</h3>
								</div>
							</div>
						</CardHeader>
						<CardContent>
							{company.positions.map((position, posIndex) => (
								<div key={posIndex} className="mb-4">
									{posIndex > 0 && <Separator className="left-0 w-1 h-full bg-primary/20 my-3" />}
									<div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
										<h4 className="text-lg font-medium">{position.title}</h4>
										<p className="text-sm text-muted-foreground">{position.duration}</p>
									</div>
									<ul className="list-disc pl-5 my-3 space-y-1 text-muted-foreground">
										{position.description.map((item, i) => (
											<li key={i}>{item}</li>
										))}
									</ul>
								</div>
							))}
							<div className="flex flex-wrap gap-2 mt-4">
								{company.technologies.map((tech, i) => (
									<Badge key={i} variant="secondary">
										{tech}
									</Badge>
								))}
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	)
}

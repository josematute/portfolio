import { Mail, MapPin } from "lucide-react"
import { ME } from "@/constants"

export function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<footer className="py-12 px-4 md:px-8 border-t">
			<div className="max-w-7xl mx-auto">
				{/* Content Grid */}
				<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
					{/* Contact Info */}
					<div className="space-y-2">
						<a href={`mailto:${ME.email}`} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
							<Mail className="size-4" />
							<span>{ME.email}</span>
						</a>
						<a
							href="https://www.google.com/search?q=lehi+utah"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
							<MapPin className="size-4" />
							<span>{ME.location}</span>
						</a>
					</div>

					{/* Right Side */}
					<div className="flex flex-col md:items-end gap-2 text-sm text-muted-foreground">
						<p>
							© {currentYear} {ME.name}
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

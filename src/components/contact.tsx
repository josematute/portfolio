import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"

export default function Contact() {
	return (
		<section id="contact" className="pt-16 -mt-16">
			<h2 className="text-3xl font-bold mb-8">Contact</h2>
			<div className="space-y-6">
				<div className="flex flex-col md:flex-row md:items-end justify-between">
					<div>
						<h1 className="text-4xl font-bold">John Doe</h1>
						<h2 className="text-xl text-gray-600 mt-2">Software Engineer</h2>
					</div>
					<div className="mt-4 md:mt-0">
						<img src="/placeholder.svg?height=120&width=120" alt="Profile" className="rounded-full h-24 w-24 object-cover border-2 border-black" />
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
					<div className="flex items-center gap-2">
						<Mail className="h-4 w-4" />
						<span>john.doe@example.com</span>
					</div>
					<div className="flex items-center gap-2">
						<Phone className="h-4 w-4" />
						<span>+1 (555) 123-4567</span>
					</div>
					<div className="flex items-center gap-2">
						<MapPin className="h-4 w-4" />
						<span>San Francisco, CA</span>
					</div>
					<div className="flex items-center gap-2">
						<Github className="h-4 w-4" />
						<a href="https://github.com/johndoe" className="hover:underline">
							github.com/johndoe
						</a>
					</div>
					<div className="flex items-center gap-2">
						<Linkedin className="h-4 w-4" />
						<a href="https://linkedin.com/in/johndoe" className="hover:underline">
							linkedin.com/in/johndoe
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

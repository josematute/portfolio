import { Briefcase, Sparkles } from "lucide-react"
import { TypeAnimation } from "react-type-animation"
import { NOW } from "@/constants"
import { NowItemCategory } from "@/types"

export function Now() {
	return (
		<section className="py-8 md:py-12 px-6 md:px-12 max-w-7xl mx-auto">
			{/* Section Header */}
			<div className="mb-12 opacity-0 animate-[fadeIn_0.6s_ease-in_forwards]">
				<h2 className="text-3xl md:text-4xl font-bold mb-3">Now</h2>
				<p className="text-muted-foreground text-lg">What I'm currently working on and exploring</p>
			</div>

			{/* Now Items */}
			<div className="space-y-8">
				{NOW.map((item, index) => (
					<div
						key={index}
						className="flex gap-4 opacity-0 translate-y-4"
						style={{
							animation: `slideUp 1.2s ease-out ${0.4 + index * 0.4}s forwards`
						}}>
						{/* Icon */}
						<div className="shrink-0">
							{item.category === NowItemCategory.Work ? (
								<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
									<Briefcase className="size-6 text-primary" />
								</div>
							) : (
								<div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
									<Sparkles className="size-6 text-purple-500" />
								</div>
							)}
						</div>

						{/* Content */}
						<div className="flex-1">
							<h3 className="text-xl font-semibold mb-2">{item.category === NowItemCategory.Work ? "Current Work" : "Exploring"}</h3>

							{/* Typing animation for content */}
							<div className="text-muted-foreground mb-3">
								<TypeAnimation
									sequence={[
										index * 800 + 400, // Delay based on index
										item.content
									]}
									wrapper="p"
									speed={70}
									cursor={false}
									preRenderFirstString={false}
								/>
							</div>

							{/* Details */}
							{item.details && item.details.length > 0 && (
								<ul className="space-y-1">
									{item.details.map((detail, i) => (
										<li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
											<span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
											{detail}
										</li>
									))}
								</ul>
							)}
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

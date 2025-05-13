"use client"

import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Link from "next/link"

export default function Navbar() {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-16 items-center justify-between px-4 mx-auto max-w-4xl">
				<div className="flex items-center gap-2">
					<Link href="/" className="font-semibold text-lg">
						Jose E. Garcia
					</Link>
					<span className="text-muted-foreground hidden sm:inline-block">Software Engineer</span>
				</div>
				<div className="flex items-center gap-4">
					<Button variant="outline" size="sm" className="gap-2">
						<Download className="h-4 w-4" />
						<span className="hidden sm:inline-block">Resume</span>
					</Button>
					<ModeToggle />
				</div>
			</div>
		</header>
	)
}

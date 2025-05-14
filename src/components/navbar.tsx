"use client"

import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Link from "next/link"
import { downloadResume } from "@/app/actions"
import { useState } from "react"
import { toast } from "sonner"
import { RESUME_FILE_NAME } from "@/utils/constants"

export default function Navbar() {
	const [isDownloading, setIsDownloading] = useState(false)

	const handleDownload = async () => {
		try {
			setIsDownloading(true)
			const result = await downloadResume()
			if (result.success && result.blob) {
				const url = window.URL.createObjectURL(result.blob)
				const a = document.createElement("a")
				a.href = url
				a.download = RESUME_FILE_NAME
				document.body.appendChild(a)
				a.click()
				window.URL.revokeObjectURL(url)
				document.body.removeChild(a)
				toast.success(`Resume downloaded successfully! Thank you for your interest.`)
			}
		} catch (error) {
			console.error("Error downloading resume:", error)
			toast.error("Failed to download resume. Please try again.")
		} finally {
			setIsDownloading(false)
		}
	}

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-16 items-center justify-between px-4 mx-auto max-w-4xl">
				<div className="flex items-center gap-2">
					<Link href="/" className="font-semibold text-lg">
						Jose Garcia
					</Link>
					<span className="text-muted-foreground hidden sm:inline-block">Software Engineer</span>
				</div>
				<div className="flex items-center gap-4">
					<Button variant="outline" size="sm" className="gap-2 cursor-pointer" onClick={handleDownload} disabled={isDownloading}>
						<Download className="h-4 w-4" />
						<span className="hidden sm:inline-block">{isDownloading ? "Downloading..." : "Resume"}</span>
					</Button>
					<ModeToggle />
				</div>
			</div>
		</header>
	)
}

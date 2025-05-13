import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { cookies } from "next/headers"
import "./globals.css"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "next-themes"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"]
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"]
})

export const metadata: Metadata = {
	title: "Jose E. Garcia – Software Engineer",
	description: "Full-stack developer with expertise in modern web stacks and AI tools.",
	icons: {
		icon: "/logo.svg"
	}
}

export default async function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	const cookieStore = await cookies()
	const themeCookie = cookieStore.get("theme")
	const defaultTheme = themeCookie?.value || "system"

	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<ThemeProvider attribute="class" defaultTheme={defaultTheme} enableSystem disableTransitionOnChange storageKey="portfolio-theme">
					<div>
						<Navbar />
						<main className="container mx-auto px-4 py-8 max-w-4xl">{children}</main>
					</div>
				</ThemeProvider>
			</body>
		</html>
	)
}

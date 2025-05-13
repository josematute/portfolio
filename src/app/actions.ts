"use server"

import { cookies } from "next/headers"

export async function setThemeCookie(theme: string) {
  const cookieStore = await cookies()
  cookieStore.set("theme", theme, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/"
  })
  return { success: true }
}

export async function downloadResume() {
  try {
    const response = await fetch(
      "https://drive.google.com/uc?export=download&id=18h09DLZGLG7W_zcpyhtlBSiIvq_2o-5K",
      {
        headers: {
          "Content-Type": "application/pdf"
        }
      }
    )

    if (!response.ok) throw new Error("Failed to download resume")

    const blob = await response.blob()
    return { success: true, blob }
  } catch (error) {
    console.error("Error downloading resume:", error)
    return { success: false, error: "Failed to download resume" }
  }
} 

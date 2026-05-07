"use client"

import { signIn } from "next-auth/react"
import { useState } from "react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const result = await signIn("credentials", { email, password, redirect: false })
    if (result?.error) setError("Invalid login")
    else window.location.href = "/dashboard"
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "400px", margin: "auto" }}>
      <h1>Christian Pentecostal</h1>
      <p>Executive Director: Minister Deborah Simpkins</p>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ display: "block", width: "100%", margin: "10px 0", padding: "8px" }} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ display: "block", width: "100%", margin: "10px 0", padding: "8px" }} />
        <button type="submit" style={{ background: "#c9a03d", color: "#1a2a4f", padding: "10px", width: "100%" }}>Sign In</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
      <p style={{ marginTop: "20px", fontSize: "12px" }}>Demo: deborah@christianpentecostal.org / admin123</p>
    </div>
  )
}

import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f0e8]">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-[#1a2a4f]">Christian Pentecostal</h1>
        <p className="text-gray-600 mt-2">After School Program</p>
        <p className="mt-4">Executive Director: Minister Deborah Simpkins</p>
        <Link href="/login" className="inline-block mt-6 bg-[#c9a03d] text-[#1a2a4f] px-6 py-2 rounded">
          Login
        </Link>
      </div>
    </div>
  )
}

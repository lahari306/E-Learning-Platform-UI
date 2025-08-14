import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Learn anything, anytime.</h1>
        <p className="text-gray-600 mt-3">
          Browse curated courses, track your progress, and watch lessons with a clean, modern interface.
        </p>
        <div className="mt-6 flex gap-3">
          <Link to="/courses" className="px-4 py-2 rounded-xl bg-gray-900 text-white">Explore Courses</Link>
          <Link to="/progress" className="px-4 py-2 rounded-xl border">My Progress</Link>
        </div>
      </div>
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <img
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop"
          alt="Learning"
          className="rounded-xl object-cover"
        />
      </div>
    </section>
  )
}

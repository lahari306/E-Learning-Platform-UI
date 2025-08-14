import React, { useEffect, useState } from 'react'
import courses from '../data/courses.js'
import ProgressBar from '../components/ProgressBar.jsx'
import { Link } from 'react-router-dom'

function getProgress() {
  try {
    return JSON.parse(localStorage.getItem('progress')) || {}
  } catch {
    return {}
  }
}

export default function Progress() {
  const [progress, setProgress] = useState({})

  useEffect(() => {
    setProgress(getProgress())
    const onStorage = (e) => {
      if (e.key === 'progress') setProgress(getProgress())
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  return (
    <section>
      <h2 className="text-2xl font-semibold">My Progress</h2>
      <p className="text-gray-600 text-sm">Track completed lessons for each course.</p>

      <div className="mt-6 space-y-4">
        {courses.map(course => {
          const completed = progress[course.id] || {}
          const total = course.lessons.length
          const done = Object.keys(completed).filter(k => completed[k]).length
          const pct = total ? (done / total) * 100 : 0
          return (
            <div key={course.id} className="rounded-2xl border bg-white p-4">
              <div className="flex items-center gap-4">
                <img src={course.thumbnail} className="w-20 h-14 object-cover rounded-xl border" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <Link to={`/courses/${course.id}`} className="font-medium hover:underline">{course.title}</Link>
                    <div className="text-xs text-gray-500">{done}/{total} lessons</div>
                  </div>
                  <div className="mt-2">
                    <ProgressBar value={pct} />
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

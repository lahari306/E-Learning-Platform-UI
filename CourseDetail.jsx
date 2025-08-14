import React, { useMemo, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import courses from '../data/courses.js'
import VideoPlayer from '../components/VideoPlayer.jsx'
import ProgressBar from '../components/ProgressBar.jsx'

function getProgress() {
  try {
    return JSON.parse(localStorage.getItem('progress')) || {}
  } catch {
    return {}
  }
}

function setProgress(next) {
  localStorage.setItem('progress', JSON.stringify(next))
}

export default function CourseDetail() {
  const { id } = useParams()
  const course = useMemo(() => courses.find(c => String(c.id) === String(id)), [id])
  const [lessonIndex, setLessonIndex] = useState(0)
  const [completed, setCompleted] = useState({})

  useEffect(() => {
    const p = getProgress()
    setCompleted(p[course?.id] || {})
  }, [course?.id])

  if (!course) return <div>Course not found.</div>

  const lessons = course.lessons
  const current = lessons[lessonIndex]
  const total = lessons.length
  const doneCount = Object.keys(completed).filter(k => completed[k]).length
  const pct = total ? (doneCount / total) * 100 : 0

  const toggleComplete = (idx) => {
    const next = { ...completed, [idx]: !completed[idx] }
    setCompleted(next)
    const all = getProgress()
    all[course.id] = next
    setProgress(all)
  }

  return (
    <section className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <h1 className="text-2xl font-semibold">{course.title}</h1>
        <p className="text-gray-600 mt-1">{course.description}</p>
        <div className="mt-4">
          <ProgressBar value={pct} />
        </div>
        <div className="mt-6">
          <VideoPlayer youtubeId={current.youtubeId} />
        </div>
        <div className="mt-4">
          <h3 className="font-semibold">Lesson: {current.title}</h3>
          <p className="text-gray-600 text-sm mt-1">{current.summary}</p>
        </div>
      </div>
      <aside className="lg:col-span-1">
        <div className="rounded-2xl border bg-white p-4 sticky top-24 max-h-[70vh] overflow-auto">
          <h3 className="font-semibold">Lesson List</h3>
          <ul className="mt-3 space-y-2">
            {lessons.map((l, idx) => (
              <li key={idx} className={`flex items-center justify-between p-2 rounded-xl border ${idx === lessonIndex ? 'bg-gray-50' : ''}`}>
                <button onClick={() => setLessonIndex(idx)} className="text-left">
                  <div className="text-sm font-medium">{idx + 1}. {l.title}</div>
                  <div className="text-xs text-gray-500">{l.duration}</div>
                </button>
                <label className="flex items-center gap-2 text-xs">
                  <input type="checkbox" checked={!!completed[idx]} onChange={() => toggleComplete(idx)} />
                  Done
                </label>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </section>
  )
}

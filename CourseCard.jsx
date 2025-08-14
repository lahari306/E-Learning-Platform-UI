import React from 'react'
import { Link } from 'react-router-dom'

export default function CourseCard({ course }) {
  return (
    <div className="rounded-2xl border bg-white overflow-hidden shadow-sm hover:shadow-md transition">
      <img src={course.thumbnail} alt={course.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{course.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2 mt-1">{course.description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xs text-gray-500">{course.lessons.length} lessons</span>
          <Link to={`/courses/${course.id}`} className="text-sm font-medium px-3 py-1.5 rounded-xl bg-gray-900 text-white">
            View
          </Link>
        </div>
      </div>
    </div>
  )
}

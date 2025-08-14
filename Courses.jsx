import React from 'react'
import CourseCard from '../components/CourseCard.jsx'
import courses from '../data/courses.js'

export default function Courses() {
  return (
    <section>
      <div className="flex items-end justify-between mb-4">
        <div>
          <h2 className="text-2xl font-semibold">Courses</h2>
          <p className="text-gray-600 text-sm">Browse the catalog and pick a course to get started.</p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(c => <CourseCard key={c.id} course={c} />)}
      </div>
    </section>
  )
}

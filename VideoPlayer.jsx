import React from 'react'

export default function VideoPlayer({ youtubeId }) {
  if (!youtubeId) return null
  const src = `https://www.youtube.com/embed/${youtubeId}`
  return (
    <div className="w-full aspect-video rounded-2xl overflow-hidden border">
      <iframe
        className="w-full h-full"
        src={src}
        title="Course Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  )
}

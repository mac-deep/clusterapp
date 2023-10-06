import React from 'react';

export default function YoutubeVideo({ id }: { id: string }) {
  return (
    <div
      className="relative overflow-hidden"
      style={{ width: '100%', paddingTop: '56.25%' }}
    >
      <iframe
        className="absolute top-0 left-0 bottom-0 right-0 w-full h-full rounded-2xl"
        width="513"
        height="315"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; allowfullscreen"
        allowFullScreen={true}
      />
    </div>
  );
}

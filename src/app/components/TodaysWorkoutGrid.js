import React from 'react';

export default function TodaysWorkoutGrid({ workout }) {
  function getYouTubeEmbedCode(url) {
    const regExp = /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/;
    const match = url.match(regExp);

    if (match && match[2].length === 11) {
      const videoID = match[2];
      return `https://www.youtube.com/embed/${videoID}`;
    } else {
      console.error('The URL provided is not a valid YouTube video URL.');
      return '';
    }
  }

  return (
    <div className="mt-8">
      <h2 className="text-4xl font-bold">{workout.title}</h2>

      <div className="space-y-8 mt-10">
        {workout.activities.map((activity) => {
          return (
            <div
              className="w-full border bg-white py-4 px-2 rounded-lg text-xl"
              key={activity.title}
            >
              {activity.title}
              <div>
                {activity.youtube_urls.length > 0
                  ? activity.youtube_urls.map((link) => {
                      return (
                        <iframe
                          src={getYouTubeEmbedCode(link)}
                          key={link}
                          width="100%"
                          height="300"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      );
                    })
                  : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

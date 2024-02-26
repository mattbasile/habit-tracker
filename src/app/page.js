/* eslint-disable react/no-unescaped-entities */
'use client';
import workouts from '../data/workouts.json';
import { useEffect, useState } from 'react';
import CompletionGrid from './components/completionGrid';
import TodaysWorkoutGrid from './components/TodaysWorkoutGrid';

export default function Home() {
  const today = new Date();
  const weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const [todaysWorkout, setTodaysWorkout] = useState([]);
  const [stateDayName, setStateDayName] = useState(weekDays[today.getDay()]);

  useEffect(() => {
    if (
      stateDayName === 'Monday' ||
      stateDayName === 'Wednesday' ||
      stateDayName === 'Friday'
    ) {
      setTodaysWorkout(workouts[0]);
    }
    if (stateDayName === 'Tuesday' || stateDayName === 'Thursday') {
      setTodaysWorkout(workouts[1]);
    }
  }, []);

  return (
    <main className=" min-h-screen max-w-2xl mx-auto p-24">
      <div>
        <div className="mb-8">
          <h1 className="text-4xl font-bold ">Daily Rituals</h1>
          <p className="text-lg mt-4">
            Happy {stateDayName}! Here's what's on the docket
          </p>
        </div>
        <div className="">
          {/* <CompletionGrid /> */}
          {weekDays[today.getDay()] === 'Saturday' ||
          weekDays[today.getDay()] === 'Sunday' ? (
            <h2>It is the weekend! Take a load off fellas - you deserve it.</h2>
          ) : (
            <TodaysWorkoutGrid workout={todaysWorkout} />
          )}
        </div>
        <div>
          <button className="bg-emerald-600 hover:bg-emerald-600/90 w-full py-3 px-4 rounded-md text-white mt-8 ">
            I have completed today's action.
          </button>
        </div>
      </div>
    </main>
  );
}

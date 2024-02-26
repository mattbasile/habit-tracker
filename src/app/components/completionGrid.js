'use client';
import React, { useEffect, useState } from 'react';
import record from '../../data/record.json';

export default function CompletionGrid({}) {
  const [activeMonth, setActiveMonth] = useState({});
  useEffect(() => {
    setActiveMonth(record[new Date().getMonth()]);
  }, []);

  return (
    <div>
      <h3>Progress for: {activeMonth.month}</h3>
      <div className="grid grid-rows-7 grid-flow-col gap-1">
        {[...Array(activeMonth.total_days)].map((_, index) => (
          <div
            key={index}
            className="h-2 w-2 rounded-sm bg-slate-100 border-slate-300 border"
          ></div>
        ))}
      </div>
    </div>
  );
}

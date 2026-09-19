"use client";

import { useEffect, useState } from "react";

export default function GlobalClocks() {
  const [times, setTimes] = useState({
    lon: "16:00:00",
    nyc: "11:00:00",
    dxb: "19:00:00",
  });

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      
      const lonStr = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/London",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now);

      const nycStr = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now);

      const dxbStr = new Intl.DateTimeFormat("en-AE", {
        timeZone: "Asia/Dubai",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now);

      setTimes({
        lon: `${lonStr} BST`,
        nyc: `${nycStr} EDT`,
        dxb: `${dxbStr} GST`,
      });
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 bg-surface-container-low border border-white/5 font-label-technical">
      <div className="flex items-center justify-between">
        <span className="text-xs text-on-surface-variant uppercase tracking-wider">
          MARKET // LONDON
        </span>
        <span className="text-sm font-bold text-white font-mono">{times.lon}</span>
      </div>
      <div className="flex items-center justify-between border-t sm:border-t-0 sm:border-l border-white/10 pt-4 sm:pt-0 sm:pl-6">
        <span className="text-xs text-on-surface-variant uppercase tracking-wider">
          MARKET // NEW YORK
        </span>
        <span className="text-sm font-bold text-white font-mono">{times.nyc}</span>
      </div>
      <div className="flex items-center justify-between border-t sm:border-t-0 sm:border-l border-white/10 pt-4 sm:pt-0 sm:pl-6">
        <span className="text-xs text-on-surface-variant uppercase tracking-wider">
          MARKET // DUBAI
        </span>
        <span className="text-sm font-bold text-primary-container font-mono">{times.dxb}</span>
      </div>
    </div>
  );
}

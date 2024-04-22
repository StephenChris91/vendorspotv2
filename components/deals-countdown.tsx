"use client";
import { useEffect, useState } from "react";

export default function DealsCountdown() {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  const [reloading, setReloading] = useState(false);

  useEffect(() => {
    if (reloading) {
      // Reload the page when it's Sunday at 10 AM West African Time
      const now = new Date();
      if (
        now.getUTCDay() === 0 &&
        now.getUTCHours() === 9 &&
        now.getUTCMinutes() === 0 &&
        now.getUTCSeconds() === 0
      ) {
        window.location.reload();
      }
    }
  }, [reloading]);

  function calculateTimeRemaining() {
    const now: any = new Date();
    const targetTime: any = new Date(now);

    // Set the target time to the next Sunday at 10 AM West African Time
    targetTime.setUTCHours(9, 0, 0, 0); // Set the time to 9:00:00 (UTC time)

    const currentDay = now.getUTCDay();
    const daysUntilService = (7 - currentDay) % 7;

    // Check if today is Sunday and the current time is before 10 AM
    if (currentDay === 0 && now.getUTCHours() < 9) {
      // If it's Sunday and the current time is before 10 AM, keep the target time as is.
    } else {
      // Otherwise, calculate for the next Sunday
      targetTime.setUTCDate(now.getUTCDate() + daysUntilService);
    }

    let timeDiff = targetTime - now;

    // If timeDiff is less than 0, set it to 0
    if (timeDiff < 0) {
      timeDiff = 0;
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <section className="w-full p-0">
      <div className="p-0">
        <div className="flex gap-1 p-2 justify-between items-center mx-auto">
          <div className="bg-yellow-300 p-1 flex flex-col items-center justify-between text-center text-black font-bold h-10 w-10">
            <p>{timeRemaining.days}</p>
            {/* <p>Days</p> */}
          </div>
          <div className="bg-yellow-300 p-1 flex flex-col items-center justify-between text-center text-black font-bold h-10 w-10">
            <p>{timeRemaining.hours}</p>
            {/* <p>Hours</p> */}
          </div>
          <div className="bg-yellow-300 p-1 flex flex-col items-center justify-between text-center text-black font-bold h-10 w-10">
            <p>{timeRemaining.minutes}</p>
            {/* <p>Minutes</p> */}
          </div>
          <div className="bg-yellow-300 p-1 flex flex-col items-center justify-between text-center text-black font-bold h-10 w-10">
            <p>{timeRemaining.seconds}</p>
            {/* <p>Seconds</p> */}
          </div>
        </div>
      </div>
    </section>
  );
}

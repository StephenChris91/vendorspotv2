'use client';
import { useEffect, useState } from "react";


export default function DealsCountdown () {

    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
    const [reloading, setReloading] = useState(false);

    useEffect(() => {
        if (reloading) {
          // Reload the page when it's Sunday at 10 AM West African Time
          const now = new Date();
          if (now.getUTCDay() === 0 && now.getUTCHours() === 9 && now.getUTCMinutes() === 0 && now.getUTCSeconds() === 0) {
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
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
      
        return { days, hours, minutes, seconds };
      }
      

    return (
        <div className=" bg-gray-50 min-h-full w-full">
                <div className="mb-5">
                    <h1 className="text-gray-800">Deals & Offers</h1>
                    <p className="text-gray-400">Hygiene Equipments</p>
                </div>
                
                <div className='countdown-wrapper'>
                    <div className="flex gap-2 justify-evenly items-start mx-auto">
                        <div className="bg-gray-600 p-4 rounded-sm flex flex-col items-center justify-between text-center text-white h-20 w-20">
                            <h1>{timeRemaining.days}</h1>
                            <p>Days</p>
                        </div>
                        <div className="bg-gray-600 p-4 rounded-sm flex flex-col items-center justify-between text-center text-white h-20 w-20">
                            <h1>{timeRemaining.hours}</h1>
                            <p>Hours</p>
                        </div>
                        <div className="bg-gray-600 p-4 rounded-sm flex flex-col items-center justify-between text-center text-white h-20 w-20">
                            <h1>{timeRemaining.minutes}</h1>
                            <p>Minutes</p>
                        </div>
                        <div className="bg-gray-600 p-4 rounded-sm flex flex-col items-center justify-between text-center text-white h-20 w-20">
                            <h1>{timeRemaining.seconds}</h1>
                            <p>Seconds</p>
                        </div>
                    </div>
                </div>
        </div>
    )
 }
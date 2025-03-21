"use client";
import React, { useState, useEffect } from "react";

interface Time {
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountDown = () => {
  const targetDate: any = new Date("2024-10-24T00:00:00");

  const calculateTimeLeft = () => {
    const now: any = new Date();
    const difference: any = now - targetDate;

    let timeLeft: Time = {
      months: Math.floor(difference / (1000 * 60 * 60 * 24 * 30)),
      days: Math.floor(
        (difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
      ),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<Time>({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setTimeLeft(calculateTimeLeft);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-container">
      <div className="stay-tuned">Days Passed!</div>
      <div className="countdown">
        <div className="countdown-item">
          <div className="countdown-number">{timeLeft.months}</div>
          <div className="countdown-label">Months</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-number">{timeLeft.days}</div>
          <div className="countdown-label">Days</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-number">{timeLeft.hours}</div>
          <div className="countdown-label">Hours</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-number">{timeLeft.minutes}</div>
          <div className="countdown-label">Minutes</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-number">{timeLeft.seconds}</div>
          <div className="countdown-label">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default CountDown;

import { useState, useEffect } from "react";

export default function TaskCard({ task }) {

  const [seconds, setSeconds] =
    useState(0);

  const [running, setRunning] =
    useState(false);

  useEffect(() => {

    let interval;

    if (running) {

      interval = setInterval(() => {

        setSeconds(
          (prev) => prev + 1
        );

      }, 1000);
    }

    return () =>
      clearInterval(interval);

  }, [running]);

  const formatTime = (
    totalSeconds
  ) => {

    const hrs = Math.floor(
      totalSeconds / 3600
    );

    const mins = Math.floor(
      (totalSeconds % 3600) / 60
    );

    const secs =
      totalSeconds % 60;

    return `${String(hrs).padStart(
      2,
      "0"
    )}:${String(mins).padStart(
      2,
      "0"
    )}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  const stopTimer = () => {
    setRunning(false);
    setSeconds(0);
  };

  return (
    <div className="glass rounded-3xl p-6">

      <div className="flex justify-between">

        <div>

          <h3 className="text-xl font-bold">
            {task.title}
          </h3>

          <p className="text-gray-400 mt-3">
            Current Session
          </p>

          <div className="text-4xl font-bold mt-3">
            {formatTime(seconds)}
          </div>

        </div>

        <div className="text-right">

          <p className="text-gray-400">
            Total Tracked
          </p>

          <div className="text-3xl font-bold mt-3">
            {formatTime(seconds)}
          </div>

        </div>

      </div>

      <div className="flex gap-3 mt-8">

        <button
          onClick={() =>
            setRunning(true)
          }
          className="
            bg-green-600
            hover:bg-green-500
            px-5
            py-3
            rounded-xl
          "
        >
          Start
        </button>

        <button
          onClick={() =>
            setRunning(false)
          }
          className="
            bg-yellow-600
            hover:bg-yellow-500
            px-5
            py-3
            rounded-xl
          "
        >
          Pause
        </button>

        <button
          onClick={stopTimer}
          className="
            bg-red-600
            hover:bg-red-500
            px-5
            py-3
            rounded-xl
          "
        >
          Stop
        </button>

      </div>

    </div>
  );
}
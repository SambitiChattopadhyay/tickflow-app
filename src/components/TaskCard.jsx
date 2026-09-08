import { useState, useEffect } from "react";
import {
  Play,
  Pause,
  Square,
  Clock3,
} from "lucide-react";


export default function TaskCard({ task }) {

  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);


  useEffect(() => {

    let interval;


    if (running) {

      interval = setInterval(() => {

        setSeconds((prev) => prev + 1);

      }, 1000);

    }


    return () => {

      clearInterval(interval);

    };

  }, [running]);


  const formatTime = (totalSeconds) => {

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
    <div
      className="
        bg-slate-50
        border
        border-slate-200
        rounded-2xl
        p-5
        transition
        hover:border-blue-200
        hover:shadow-sm
      "
    >

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">


        {/* Task Information */}

        <div className="flex items-center gap-4 min-w-0">


          {/* Task Icon */}

          <div
            className="
              w-12
              h-12
              shrink-0
              rounded-xl
              bg-blue-100
              text-blue-600
              flex
              items-center
              justify-center
            "
          >

            <Clock3 size={22} />

          </div>


          <div className="min-w-0">


            {/* Task Name */}

            <h3
              className="
                text-lg
                font-semibold
                text-slate-900
                truncate
              "
            >

              {task.title}

            </h3>


            <p className="text-sm text-slate-500 mt-1">

              {running
                ? "Currently tracking"
                : "Ready to focus"
              }

            </p>

          </div>

        </div>



        {/* Timer Information */}

        <div
          className="
            flex
            flex-col
            sm:flex-row
            sm:items-center
            gap-5
            lg:gap-8
          "
        >


          {/* Current Session */}

          <div>

            <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">

              Current Session

            </p>


            <p className="text-2xl font-bold text-slate-900 mt-1">

              {formatTime(seconds)}

            </p>

          </div>



          {/* Total Tracked */}

          <div>

            <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">

              Total Tracked

            </p>


            <p className="text-2xl font-bold text-slate-900 mt-1">

              {formatTime(seconds)}

            </p>

          </div>

        </div>

      </div>



      {/* Controls */}

      <div
        className="
          flex
          flex-wrap
          items-center
          gap-3
          mt-6
          pt-5
          border-t
          border-slate-200
        "
      >


        {/* Start */}

        <button
          onClick={() =>
            setRunning(true)
          }
          disabled={running}
          className="
            flex
            items-center
            gap-2
            bg-blue-600
            hover:bg-blue-700
            disabled:bg-slate-300
            disabled:cursor-not-allowed
            text-white
            font-medium
            px-4
            py-2.5
            rounded-xl
            transition
          "
        >

          <Play size={17} />

          Start

        </button>



        {/* Pause */}

        <button
          onClick={() =>
            setRunning(false)
          }
          disabled={!running}
          className="
            flex
            items-center
            gap-2
            bg-amber-500
            hover:bg-amber-600
            disabled:bg-slate-200
            disabled:text-slate-400
            disabled:cursor-not-allowed
            text-white
            font-medium
            px-4
            py-2.5
            rounded-xl
            transition
          "
        >

          <Pause size={17} />

          Pause

        </button>



        {/* Stop */}

        <button
          onClick={stopTimer}
          disabled={!running && seconds === 0}
          className="
            flex
            items-center
            gap-2
            bg-red-500
            hover:bg-red-600
            disabled:bg-slate-200
            disabled:text-slate-400
            disabled:cursor-not-allowed
            text-white
            font-medium
            px-4
            py-2.5
            rounded-xl
            transition
          "
        >

          <Square size={17} />

          Stop

        </button>

      </div>

    </div>
  );
}
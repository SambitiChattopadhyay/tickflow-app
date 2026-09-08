import { useEffect, useState } from "react";
import {
  Search,
  Plus,
  ListTodo,
  Sparkles,
} from "lucide-react";

import TaskCard from "../components/TaskCard";

export default function WorkspacePage() {
  const [taskName, setTaskName] = useState("");
  const [search, setSearch] = useState("");
  const [tasks, setTasks] = useState([]);

  // Only one task can be active at a time
  const [activeTaskId, setActiveTaskId] = useState(null);

  // Current active session timer
  const [seconds, setSeconds] = useState(0);

  // Whether the active timer is running
  const [running, setRunning] = useState(false);

  // =========================
  // TIMER
  // =========================

  useEffect(() => {
    let interval;

    if (running && activeTaskId !== null) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [running, activeTaskId]);

  // =========================
  // ADD TASK
  // =========================

  const addTask = () => {
    if (!taskName.trim()) return;

    const newTask = {
      id: Date.now(),
      title: taskName.trim(),
      totalSeconds: 0,
    };

    setTasks((prev) => [...prev, newTask]);

    setTaskName("");
  };

  // =========================
  // UPDATE TASK
  // =========================

  const updateTask = (taskId, newTitle) => {
    if (!newTitle.trim()) return;

    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId
          ? {
              ...task,
              title: newTitle.trim(),
            }
          : task
      )
    );
  };

  // =========================
  // DELETE TASK
  // =========================

  const deleteTask = (taskId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmed) return;

    setTasks((prev) =>
      prev.filter((task) => task.id !== taskId)
    );
  };

  // =========================
  // FORMAT TIME
  // =========================

  const formatTime = (totalSeconds) => {
    const hrs = Math.floor(totalSeconds / 3600);

    const mins = Math.floor(
      (totalSeconds % 3600) / 60
    );

    const secs = totalSeconds % 60;

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

  // =========================
  // START TASK
  // =========================

  const startTask = (taskId) => {
    // Another task is already active
    if (
      activeTaskId !== null &&
      activeTaskId !== taskId
    ) {
      return;
    }

    setActiveTaskId(taskId);

    setRunning(true);
  };

  // =========================
  // PAUSE TASK
  // =========================

  const pauseTask = () => {
    setRunning(false);
  };

  // =========================
  // STOP TASK
  // =========================

  const stopTask = () => {
    if (activeTaskId === null) return;

    // Add current session time
    // to the task's total tracked time
    setTasks((prev) =>
      prev.map((task) =>
        task.id === activeTaskId
          ? {
              ...task,
              totalSeconds:
                task.totalSeconds + seconds,
            }
          : task
      )
    );

    // End session
    setRunning(false);
    setSeconds(0);
    setActiveTaskId(null);
  };

  // =========================
  // SEARCH
  // =========================

  const filteredTasks = tasks.filter((task) =>
    task.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-8 lg:px-10 lg:py-10">

        {/* HEADER */}

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-3">

            <div className="w-11 h-11 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <Sparkles size={22} />
            </div>

            <p className="text-sm font-medium text-blue-600">
              YOUR FOCUSED SPACE
            </p>

          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
            Workspace
          </h1>

          <p className="text-slate-500 mt-3 text-lg">
            Organize your tasks and focus on what matters most.
          </p>
        </header>


        {/* QUICK ADD + SUMMARY */}

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

          {/* QUICK ADD */}

          <div className="lg:col-span-2 bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-slate-100">

            <div className="flex items-start gap-4 mb-6">

              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Plus size={24} />
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">
                  Quick Add
                </h2>

                <p className="text-sm text-slate-500 mt-1">
                  Add something you want to focus on.
                </p>
              </div>

            </div>


            <div className="flex flex-col sm:flex-row gap-3">

              <input
                type="text"
                placeholder="What do you want to work on?"
                value={taskName}
                onChange={(e) =>
                  setTaskName(e.target.value)
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    addTask();
                  }
                }}
                className="
                  flex-1
                  px-4
                  py-3
                  rounded-xl
                  border
                  border-slate-200
                  text-slate-800
                  outline-none
                  focus:ring-2
                  focus:ring-blue-500
                "
              />

              <button
                onClick={addTask}
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  font-medium
                  px-5
                  py-3
                  rounded-xl
                  transition
                "
              >
                <Plus size={20} />

                Add Task
              </button>

            </div>

          </div>


          {/* TASK SUMMARY */}

          <div className="bg-slate-900 rounded-2xl p-6 text-white">

            <div className="flex items-center justify-between mb-8">

              <div>

                <p className="text-sm text-slate-400">
                  WORKSPACE
                </p>

                <h2 className="text-xl font-semibold mt-1">
                  Your Tasks
                </h2>

              </div>

              <ListTodo
                size={24}
                className="text-blue-400"
              />

            </div>


            <p className="text-5xl font-bold">
              {tasks.length}
            </p>


            <p className="text-sm text-slate-400 mt-2">

              {tasks.length === 1
                ? "task created"
                : "tasks created"}

            </p>


            {/* ACTIVE SESSION */}

            {activeTaskId !== null && (

              <div className="mt-8 pt-5 border-t border-slate-700">

                <p className="text-xs uppercase tracking-wide text-slate-400">
                  Current Session
                </p>

                <p className="text-2xl font-bold mt-2">
                  {formatTime(seconds)}
                </p>

              </div>

            )}

          </div>

        </section>


        {/* TASK SECTION */}

        <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-6">

            <div>

              <h2 className="text-xl font-semibold text-slate-900">
                Your Tasks
              </h2>

              <p className="text-sm text-slate-500 mt-1">
                Choose a task and start focusing.
              </p>

            </div>


            {/* SEARCH */}

            <div className="
              flex
              items-center
              gap-3
              w-full
              lg:w-80
              px-4
              py-3
              rounded-xl
              bg-slate-50
              border
              border-slate-200
            ">

              <Search
                size={19}
                className="text-slate-400"
              />

              <input
                type="text"
                placeholder="Search tasks..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="
                  flex-1
                  bg-transparent
                  outline-none
                  text-sm
                  text-slate-700
                "
              />

            </div>

          </div>


          {/* EMPTY STATE */}

          {tasks.length === 0 ? (

            <div className="
              py-16
              flex
              flex-col
              items-center
              justify-center
              text-center
              border-2
              border-dashed
              border-slate-200
              rounded-2xl
            ">

              <div className="
                w-14
                h-14
                rounded-2xl
                bg-slate-100
                text-slate-400
                flex
                items-center
                justify-center
                mb-4
              ">

                <ListTodo size={28} />

              </div>


              <h3 className="font-semibold text-slate-800">
                No tasks yet
              </h3>


              <p className="text-sm text-slate-500 mt-2">
                Add your first task above and start focusing.
              </p>

            </div>

          ) : filteredTasks.length === 0 ? (

            <div className="py-14 text-center">

              <p className="font-medium text-slate-700">
                No matching tasks found
              </p>

              <p className="text-sm text-slate-500 mt-2">
                Try searching for something else.
              </p>

            </div>

          ) : (

            <div className="space-y-4">

              {filteredTasks.map((task) => (

                <TaskCard
                  key={task.id}
                  task={task}
                  isActive={activeTaskId === task.id}
                  running={running}
                  hasActiveTask={activeTaskId !== null}
                  sessionSeconds={
                    activeTaskId === task.id
                      ? seconds
                      : 0
                  }
                  onStart={() =>
                    startTask(task.id)
                  }
                  onPause={pauseTask}
                  onStop={stopTask}
                  onUpdate={updateTask}
                  onDelete={deleteTask}
                  formatTime={formatTime}
                />

              ))}

            </div>

          )}

        </section>

      </div>
    </div>
  );
}
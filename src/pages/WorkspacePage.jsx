import { useState } from "react";
import { Search, Plus } from "lucide-react";
import TaskCard from "../components/TaskCard";

export default function WorkspacePage() {
  const [taskName, setTaskName] = useState("");
  const [search, setSearch] = useState("");

  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!taskName.trim()) return;

    const newTask = {
      id: Date.now(),
      title: taskName,
    };

    setTasks([...tasks, newTask]);
    setTaskName("");
  };

  const filteredTasks = tasks.filter((task) =>
    task.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen px-6 py-10">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-black">
          Workspace
        </h1>

        <p className="text-gray-400 mt-3">
          Organize tasks and track your work.
        </p>

        {/* Add Task */}

        <div className="glass rounded-3xl p-6 mt-10">

          <div className="flex gap-4">

            <input
              type="text"
              placeholder="Add new task..."
              value={taskName}
              onChange={(e) =>
                setTaskName(e.target.value)
              }
              className="
                flex-1
                bg-black/30
                border
                border-white/10
                rounded-xl
                p-4
                outline-none
              "
            />

            <button
              onClick={addTask}
              className="
                bg-violet-600
                hover:bg-violet-500
                px-6
                rounded-xl
              "
            >
              <Plus size={20} />
            </button>

          </div>

        </div>

        {/* Search */}

        <div className="glass rounded-3xl p-4 mt-6">

          <div className="flex items-center gap-3">

            <Search
              size={18}
              className="text-gray-400"
            />

            <input
              type="text"
              placeholder="Search task..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="
                flex-1
                bg-transparent
                outline-none
              "
            />

          </div>

        </div>

        {/* Task List */}

        <div className="space-y-5 mt-8">

          {filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
            />
          ))}

        </div>

      </div>

    </div>
  );
}
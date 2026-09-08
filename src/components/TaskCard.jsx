import { useState } from "react";
import {
  Play,Pause,Square,Clock3, Pencil,Trash2,Check,X,
} from "lucide-react";
export default function TaskCard({
  task,isActive,running,hasActiveTask,sessionSeconds,onStart,onPause,onStop,onUpdate,onDelete,formatTime,
}) {
  const [editing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const isLocked = hasActiveTask && !isActive;
  const displaySession = isActive ? sessionSeconds : 0;

  const saveEdit = () => {
    if (!editedTitle.trim()) return;

    onUpdate(task.id, editedTitle);
    setEditing(false);
  };
  const cancelEdit = () => {
    setEditedTitle(task.title);
    setEditing(false);
  };
  const buttonBase =
    "flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed";

  return (
    <div
      className={`rounded-2xl p-5 border transition ${
        isActive
          ? "bg-blue-50 border-blue-300 shadow-sm"
          : "bg-slate-50 border-slate-200 hover:border-blue-200"
      }`}
    >
      {/* TOP SECTION */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="flex items-center gap-4 min-w-0">
          <div
            className={`w-12 h-12 shrink-0 rounded-xl flex items-center justify-center ${
              isActive
                ? "bg-blue-600 text-white"
                : "bg-blue-100 text-blue-600"
            }`}
          >
            <Clock3 size={22} />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-3">
              {editing ? (
                <input
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") saveEdit();
                    if (e.key === "Escape") cancelEdit();
                  }}
                  autoFocus
                  className="px-3 py-2 border border-blue-400 rounded-lg outline-none text-slate-900 bg-white"
                />
              ) : (
                <h3 className="text-lg font-semibold text-slate-900 truncate">
                  {task.title}
                </h3>
              )}

              {isActive && (
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-600 text-white">
                  {running ? "RUNNING" : "PAUSED"}
                </span>
              )}
            </div>

            <p className="text-sm text-slate-500 mt-1">
              {isActive
                ? running
                  ? "Currently tracking"
                  : "Session paused"
                : isLocked
                ? "Another task is currently active"
                : "Ready to focus"}
            </p>
          </div>
        </div>

        {/* TIME */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-5 lg:gap-8">
          <TimeInfo
            label="Current Session"
            value={formatTime(displaySession)}
          />

          <TimeInfo
            label="Total Tracked"
            value={formatTime(task.totalSeconds + displaySession)}
          />
        </div>
      </div>

      {/* CONTROLS */}
      <div className="flex flex-wrap items-center gap-3 mt-6 pt-5 border-t border-slate-200">
        <button
          onClick={onStart}
          disabled={isLocked || (isActive && running) || editing}
          className={`${buttonBase} bg-blue-600 hover:bg-blue-700 text-white`}
        >
          <Play size={17} />

          {isLocked
            ? "Task Active"
            : isActive && !running
            ? "Resume"
            : "Start"}
        </button>

        <button
          onClick={onPause}
          disabled={!isActive || !running || editing}
          className={`${buttonBase} bg-amber-500 hover:bg-amber-600 text-white`}
        >
          <Pause size={17} />
          Pause
        </button>

        <button
          onClick={onStop}
          disabled={!isActive || editing}
          className={`${buttonBase} bg-red-500 hover:bg-red-600 text-white`}
        >
          <Square size={17} />
          Stop
        </button>

        <div className="flex-1" />

        {editing ? (
          <>
            <button
              onClick={saveEdit}
              className={`${buttonBase} bg-green-600 hover:bg-green-700 text-white`}
            >
              <Check size={17} />
              Save
            </button>

            <button
              onClick={cancelEdit}
              className={`${buttonBase} bg-slate-200 hover:bg-slate-300 text-slate-700`}
            >
              <X size={17} />
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setEditing(true)}
              disabled={isActive}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-slate-600 hover:bg-blue-50 hover:text-blue-600 disabled:text-slate-300 disabled:cursor-not-allowed transition"
            >
              <Pencil size={18} />
              Edit
            </button>

            <button
              onClick={() => onDelete(task.id)}
              disabled={isActive}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-red-500 hover:bg-red-50 disabled:text-slate-300 disabled:cursor-not-allowed transition"
            >
              <Trash2 size={18} />
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}

function TimeInfo({ label, value }) {
  return (
    <div>
      <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">
        {label}
      </p>

      <p className="text-2xl font-bold text-slate-900 mt-1">
        {value}
      </p>
    </div>
  );
}
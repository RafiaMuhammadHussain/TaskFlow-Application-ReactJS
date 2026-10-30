import {
    Check,
    Pencil,
    Trash2,
    CalendarDays,
} from "lucide-react";

function TaskItem({ item, handleComplete, handleEdit, handleDelete }) {
    const priorityColor = {
        High: "bg-red-100 text-red-700",
        Medium: "bg-amber-100 text-amber-700",
        Low: "bg-green-100 text-green-700",
    };

    return (
        <div className="flex flex-col justify-between gap-4 rounded-xl border border-slate-100 bg-white p-4 transition hover:shadow-md sm:flex-row sm:items-center">

            <div className="flex min-w-0 items-start gap-3">
                <button
                    onClick={() => handleComplete(item.id)}
                    className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 ${item.completed
                            ? "border-green-500 bg-green-500 text-white"
                            : "border-slate-300 text-transparent hover:border-indigo-500"
                        }`}
                    aria-label="Toggle task completion"
                >
                    <Check size={15} />
                </button>

                <div className="min-w-0">
                    <h4
                        className={`break-words font-semibold ${item.completed
                                ? "text-slate-400 line-through"
                                : "text-slate-800"
                            }`}
                    >
                        {item.title}
                    </h4>

                    <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">
                            {item.category}
                        </span>

                        <span
                            className={`rounded-full px-3 py-1 ${priorityColor[item.priority]}`}
                        >
                            {item.priority} Priority
                        </span>

                        {item.dueDate && (
                            <span className="flex items-center gap-1 text-slate-500">
                                <CalendarDays size={13} />
                                {item.dueDate}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            <div className="flex shrink-0 items-center gap-2">
                <button
                    onClick={() => handleEdit(item)}
                    className="rounded-lg bg-amber-50 p-2.5 text-amber-600 hover:bg-amber-100"
                    aria-label="Edit task"
                >
                    <Pencil size={17} />
                </button>

                <button
                    onClick={() => handleDelete(item.id)}
                    className="rounded-lg bg-red-50 p-2.5 text-red-600 hover:bg-red-100"
                    aria-label="Delete task"
                >
                    <Trash2 size={17} />
                </button>
            </div>
        </div>
    );
}

export default TaskItem;
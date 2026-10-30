import { Plus, X } from "lucide-react";

function TaskForm({
    task,
    setTask,
    handleSubmit,
    editId,
    cancelEdit,
}) {
    return (
        <form
            onSubmit={handleSubmit}
            className="mb-8 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6"
        >
            <div className="mb-5 flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-bold text-slate-800">
                        {editId !== null ? "Edit Task" : "Create New Task"}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                        Add details to organize your work.
                    </p>
                </div>

                {editId !== null && (
                    <button
                        type="button"
                        onClick={cancelEdit}
                        className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"
                    >
                        <X size={20} />
                    </button>
                )}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                        Task Name
                    </label>

                    <input
                        type="text"
                        placeholder="What needs to be done?"
                        value={task.title}
                        onChange={(e) =>
                            setTask({ ...task, title: e.target.value })
                        }
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                        Category
                    </label>

                    <select
                        value={task.category}
                        onChange={(e) =>
                            setTask({ ...task, category: e.target.value })
                        }
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-indigo-500"
                    >
                        <option>Personal</option>
                        <option>Work</option>
                        <option>Study</option>
                        <option>Shopping</option>
                    </select>
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                        Priority
                    </label>

                    <select
                        value={task.priority}
                        onChange={(e) =>
                            setTask({ ...task, priority: e.target.value })
                        }
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-indigo-500"
                    >
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select>
                </div>

                <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                        Due Date
                    </label>

                    <input
                        type="date"
                        value={task.dueDate}
                        onChange={(e) =>
                            setTask({ ...task, dueDate: e.target.value })
                        }
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500"
                    />
                </div>
            </div>

            <button
                type="submit"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700 sm:w-auto"
            >
                <Plus size={19} />
                {editId !== null ? "Update Task" : "Add Task"}
            </button>
        </form>
    );
}

export default TaskForm;
import { ListTodo } from "lucide-react";
import TaskItem from "./TaskItem";

function TaskList({
    tasks,
    activeFilter,
    handleComplete,
    handleEdit,
    handleDelete,
}) {
    return (
        <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 sm:p-6">

            <div className="mb-5 flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-bold text-slate-800">
                        {activeFilter === "All"
                            ? "All Tasks"
                            : activeFilter === "Active"
                                ? "Active Tasks"
                                : "Completed Tasks"}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                        Manage your daily activities.
                    </p>
                </div>

                <ListTodo className="text-indigo-600" size={24} />
            </div>

            {tasks.length === 0 ? (
                <div className="rounded-xl border-2 border-dashed border-slate-200 bg-white py-12 text-center">
                    <div className="mb-3 flex justify-center text-slate-300">
                        <ListTodo size={42} />
                    </div>

                    <h4 className="font-semibold text-slate-700">
                        No tasks found
                    </h4>

                    <p className="mt-2 text-sm text-slate-400">
                        Try adding a new task or changing your filter.
                    </p>
                </div>
            ) : (
                <div className="space-y-3">
                    {tasks.map((item) => (
                        <TaskItem
                            key={item.id}
                            item={item}
                            handleComplete={handleComplete}
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default TaskList;
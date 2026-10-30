import {
    ListTodo,
    CheckCircle,
    Clock,
    AlertCircle,
} from "lucide-react";

function StatsCard({ tasks }) {
    const total = tasks.length;

    const completed = tasks.filter(
        (item) => item.completed
    ).length;

    const pending = total - completed;

    const overdue = tasks.filter(
        (item) =>
            !item.completed &&
            item.dueDate &&
            new Date(item.dueDate + "T23:59:59") < new Date()
    ).length;

    const stats = [
        {
            title: "Total Tasks",
            value: total,
            icon: ListTodo,
            color: "bg-indigo-100 text-indigo-600",
        },
        {
            title: "Completed",
            value: completed,
            icon: CheckCircle,
            color: "bg-green-100 text-green-600",
        },
        {
            title: "Pending",
            value: pending,
            icon: Clock,
            color: "bg-amber-100 text-amber-600",
        },
        {
            title: "Overdue",
            value: overdue,
            icon: AlertCircle,
            color: "bg-red-100 text-red-600",
        },
    ];

    return (
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => {
                const Icon = item.icon;

                return (
                    <div
                        key={item.title}
                        className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
                    >
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-slate-500">
                                {item.title}
                            </p>

                            <div className={`rounded-xl p-3 ${item.color}`}>
                                <Icon size={21} />
                            </div>
                        </div>

                        <h3 className="mt-4 text-3xl font-bold text-slate-800">
                            {item.value}
                        </h3>
                    </div>
                );
            })}
        </div>
    );
}

export default StatsCard;
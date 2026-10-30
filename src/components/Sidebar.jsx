
import {
    LayoutDashboard,
    ListTodo,
    CheckCircle,
    Clock,
    Briefcase,
    BookOpen,
    User,
    ShoppingBag,
    X,
} from "lucide-react";

function Sidebar({
    activeFilter,
    setActiveFilter,
    isOpen,
    onClose,
}) {
    const menuItems = [
        { name: "All Tasks", icon: ListTodo, value: "All" },
        { name: "Active Tasks", icon: Clock, value: "Active" },
        { name: "Completed", icon: CheckCircle, value: "Completed" },
    ];

    const categories = [
        { name: "Personal", icon: User },
        { name: "Work", icon: Briefcase },
        { name: "Study", icon: BookOpen },
        { name: "Shopping", icon: ShoppingBag },
    ];

    function handleMenuClick(value) {
        setActiveFilter(value);
        onClose();
    }

    return (
        <>
            {/* Mobile Background Overlay */}
            {isOpen && (
                <div
                    onClick={onClose}
                    className="fixed inset-0 z-40 bg-black/50 md:hidden"
                ></div>
            )}

            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col overflow-y-auto bg-slate-950 p-5 text-white shadow-xl transition-transform duration-300 md:sticky md:top-0 md:h-screen md:w-64 md:shrink-0 md:translate-x-0 md:shadow-none ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {/* Logo and Close Button */}
                <div className="mb-10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="rounded-xl bg-indigo-600 p-2">
                            <LayoutDashboard size={23} />
                        </div>

                        <h1 className="text-2xl font-bold">TaskFlow</h1>
                    </div>

                    <button
                        onClick={onClose}
                        className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white md:hidden"
                    >
                        <X size={22} />
                    </button>
                </div>

                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Workspace
                </p>

                <nav className="space-y-2">
                    {menuItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <button
                                key={item.name}
                                onClick={() => handleMenuClick(item.value)}
                                className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${activeFilter === item.value
                                        ? "bg-indigo-600 text-white"
                                        : "text-slate-400 hover:bg-slate-900 hover:text-white"
                                    }`}
                            >
                                <Icon size={19} />
                                {item.name}
                            </button>
                        );
                    })}
                </nav>

                <p className="mb-4 mt-10 text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Categories
                </p>

                <div className="space-y-3">
                    {categories.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.name}
                                className="flex items-center gap-3 px-4 text-sm text-slate-400"
                            >
                                <Icon size={18} />
                                {item.name}
                            </div>
                        );
                    })}
                </div>

                <div className="mt-auto pt-10">
                    <div className="rounded-2xl bg-slate-900 p-4">
                        <p className="font-semibold">Stay productive!</p>

                        <p className="mt-2 text-xs leading-5 text-slate-400">
                            Small steps every day lead to big results.
                        </p>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;


import { Search, CalendarDays, Menu } from "lucide-react";

function Header({ search, setSearch, onMenuClick }) {
    const today = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    return (
        <header className="mb-8">

            {/* Top Header */}
            <div className="mb-5 flex items-center gap-3">

                {/* Hamburger - Mobile Only */}
                <button
                    onClick={onMenuClick}
                    className="rounded-xl border border-slate-200 bg-white p-3 text-slate-700 shadow-sm hover:bg-slate-50 md:hidden"
                    aria-label="Open sidebar"
                >
                    <Menu size={22} />
                </button>

                <div>
                    <p className="mb-1 text-sm text-slate-500">
                        Welcome to your workspace
                    </p>

                    <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">
                        My Dashboard
                    </h2>
                </div>
            </div>

            {/* Date and Search */}
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

                <div className="flex items-center gap-2 text-sm text-slate-500">
                    <CalendarDays size={17} />
                    {today}
                </div>

                <div className="relative w-full sm:max-w-sm">
                    <Search
                        size={19}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                        type="text"
                        placeholder="Search your tasks..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                    />
                </div>

            </div>
        </header>
    );
}

export default Header;

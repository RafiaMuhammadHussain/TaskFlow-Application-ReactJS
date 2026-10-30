import { useState } from "react";
import Header from "../components/Header";
import StatsCard from "../components/StatsCard";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function Dashboard({ tasks, setTasks, activeFilter, onMenuClick }) {
    const [search, setSearch] = useState("");

    const [task, setTask] = useState({
        title: "",
        category: "Personal",
        priority: "Medium",
        dueDate: "",
    });

    const [editId, setEditId] = useState(null);

    // Add or update task
    function handleSubmit(e) {
        e.preventDefault();

        if (task.title.trim() === "") {
            return;
        }

        if (editId !== null) {
            const updatedTasks = tasks.map((item) => {
                if (item.id === editId) {
                    return { ...item, ...task };
                }

                return item;
            });

            setTasks(updatedTasks);
            setEditId(null);
        } else {
            const newTask = {
                id: Date.now(),
                ...task,
                completed: false,
            };

            setTasks([...tasks, newTask]);
        }

        setTask({
            title: "",
            category: "Personal",
            priority: "Medium",
            dueDate: "",
        });
    }

    // Edit task
    function handleEdit(item) {
        setTask({
            title: item.title,
            category: item.category,
            priority: item.priority,
            dueDate: item.dueDate,
        });

        setEditId(item.id);

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    // Delete task
    function handleDelete(id) {
        setTasks(tasks.filter((item) => item.id !== id));

        if (editId === id) {
            cancelEdit();
        }
    }

    // Complete task
    function handleComplete(id) {
        const updatedTasks = tasks.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    completed: !item.completed,
                };
            }

            return item;
        });

        setTasks(updatedTasks);
    }

    // Cancel editing
    function cancelEdit() {
        setEditId(null);

        setTask({
            title: "",
            category: "Personal",
            priority: "Medium",
            dueDate: "",
        });
    }

    // Search and filter
    const filteredTasks = tasks.filter((item) => {
        const matchesSearch = item.title
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesFilter =
            activeFilter === "All" ||
            (activeFilter === "Active" && !item.completed) ||
            (activeFilter === "Completed" && item.completed);

        return matchesSearch && matchesFilter;
    });

    return (
        <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-10">
            <Header
                search={search}
                setSearch={setSearch}
                onMenuClick={onMenuClick}
            />

            <StatsCard tasks={tasks} />

            <TaskForm
                task={task}
                setTask={setTask}
                handleSubmit={handleSubmit}
                editId={editId}
                cancelEdit={cancelEdit}
            />

            <TaskList
                tasks={filteredTasks}
                activeFilter={activeFilter}
                handleComplete={handleComplete}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
        </main>
    );
}

export default Dashboard;
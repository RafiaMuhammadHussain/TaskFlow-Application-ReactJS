
import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("taskflow-tasks");

    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Save tasks in localStorage
  useEffect(() => {
    localStorage.setItem("taskflow-tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Close sidebar
  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  return (
    <div className="min-h-screen bg-slate-100 md:flex">

      <Sidebar
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
      />

      <Dashboard
        tasks={tasks}
        setTasks={setTasks}
        activeFilter={activeFilter}
        onMenuClick={() => setIsSidebarOpen(true)}
      />

    </div>
  );
}

export default App;

import React from "react";
import AddTask from "@/components/AddTask";
import DateTimeFilters from "@/components/DateTimeFilters";
import TaskListPagination from "@/components/TaskListPagination";
import TaskList from "@/components/TaskList";
import StatsAndFilters from "@/components/StatsAndFilters";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const HomePage = () => {
    return (
        <div className="min-h-screen w-full relative">
    {/* Radial Gradient Background */}
    <div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
    }}
  />
  {/* Your Content/Components */}
            <div className = "container pt-8 mx-auto relative z-10"> 
            <div className = "w-full max-w-2xl p-6 mx-auto space-y-6">
                {/* Header */}
                <Header />
                {/* Add Task */}
                <AddTask />
                {/* Stats and Filters */}
                <StatsAndFilters />
                {/* Task List */}
                <TaskList />
            
                {/* Phan trang va loc theo hang */}
                <div className = "flex flex-col items-center justify-between gap-6 sm:flex-row">
                    <TaskListPagination />
                    <DateTimeFilters />
                </div>
                {/* Footer */}
                <Footer />

            </div>
       </div>
</div>
    );
};


export default HomePage;


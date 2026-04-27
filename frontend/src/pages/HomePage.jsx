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
  {/* Purple Radial Bloom Light Gradient */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: `radial-gradient(circle at center, #F3E8FF 0%, #DDD6FE 30%, #C4B5FD 60%, #A78BFA 100%)`,
    }}
  />
  {/* Your Content/Components */}
            <div className = "container pt-8 mx-auto relative z-10"> 
            <div className="w-full max-w-2xl -6 mx-auto space -y-6">
                {/* Header */}
                <Header />
                {/* Stats and Filters */}
                <StatsAndFilters />
                {/* Task List */}
                <TaskList />
                {/* Add Task */}
                <AddTask />

                {/* Phan tran va loc theo hang */}
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
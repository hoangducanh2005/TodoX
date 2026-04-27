import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Plus } from "lucide-react";

const AddTask = () => {
  return (
    <Card className="rounded-2xl p-6 border-0 bg-gradient-card shadow-custom-lg">
      <div className="flex flex-col gap-3 sm:flex-row">
        <Input
          type="text"
          placeholder="What do you need to do?"
          className="h-12  rounded-2xl shadow-sm text-base bg-slate-50 sm:flex-1 border border-indigo-200 focus:border-primary/50 focus:ring-primary/20"
        />

        <Button
          variant="gradient"
          size="3xl"
          className="px-6"
        >
        <Plus className="size-6" />
          Thêm
        </Button>

      </div>
    </Card>
  );
};

export default AddTask;
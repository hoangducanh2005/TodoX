import Task from '../models/Tasks.js';


export const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();    // lay tat ca data tu database
        res.status(200).json(tasks);    //tra data duoiu dang json ve client

    } catch (error) {
        console.error('Error when calling getAllTasks:', error);
        res.status(500).json({ message: 'System Error' });
    }
};

export const createTask = async (req, res) => {
    try {
        const { title } = req.body;
        const task = new Task({ title });
        
        const newTask = await task.save();
        res.status(201).json(newTask);
    } catch (error) {
        console.error('Error when calling createTask:', error);
        res.status(500).json({ message: 'System Error' });
    }
};

export const updateTask = (req, res) => {
    res.status(200).json({ message: `Task updated successfully!` });
};

export const deleteTask = (req, res) => {
    res.status(200).json({ message: `Task deleted successfully!` });
};


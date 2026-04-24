export const getAllTasks = (req, res) => {
    res.status(200).json({ message: 'You have 36 tasks to do!' });
};

export const createTask = (req, res) => {
    res.status(200).json({ message: 'Task created successfully!' });
};

export const updateTask = (req, res) => {
    res.status(200).json({ message: `Task updated successfully!` });
};

export const deleteTask = (req, res) => {
    res.status(200).json({ message: `Task deleted successfully!` });
};


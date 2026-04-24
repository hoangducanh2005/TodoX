export const getAllTasks = (request, response) => {
    response.status(200).send({message: "You have 36 tasks to do!"});
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


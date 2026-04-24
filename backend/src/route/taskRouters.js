 import expess from 'express';

const router = expess.Router();

app.get('/api/tasks', (req, res) => {
    res.status(200).send({ message: 'You have 36 tasks to do!' });
});

app.post('/api/tasks', (req, res) => {
    res.status(200).json({ message: 'Task created successfully!' });
});

app.put('/api/tasks/:id', (req, res) => {
    res.status(200).json({ message: `Task updated successfully!` });
});

app.delete('/api/tasks/:id', (req, res) => {
    res.status(200).json({ message: `Task deleted successfully!` });
});

export default router;

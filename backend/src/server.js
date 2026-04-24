import express from 'express';
import taskRoutes from './route/taskRouters.js';

const app = express();

app.use("/api/tasks", taskRoutes);

app.listen(5001, () => {
    console.log('Server is running on port 5001');
});


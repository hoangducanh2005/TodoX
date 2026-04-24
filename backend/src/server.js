import express from 'express';
import taskRoutes from './route/taskRouters.js';
import dns from 'dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);
import {connectDB} from './config/db.js'

const app = express();

connectDB();  // Connect to MongoDB

app.use("/api/tasks", taskRoutes);

app.listen(5001, () => {
    console.log('Server is running on port 5001');
});


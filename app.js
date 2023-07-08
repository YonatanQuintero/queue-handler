const express = require('express');
const Queue = require('bull');

// Create a new queue instance
const queue = new Queue('myQueue');

// Function to simulate a long-running task
const simulateTask = async (taskName, duration) => {
    console.log(`[${new Date().toLocaleTimeString()}] Starting ${taskName}`);
    await new Promise((resolve) => setTimeout(resolve, duration));
    console.log(`[${new Date().toLocaleTimeString()}] Completed ${taskName}`);
};

// Express app setup
const app = express();

// Middleware to parse JSON request body
app.use(express.json());

// Define a route to add tasks to the queue
app.post('/tasks', (req, res) => {
    const { taskName, duration } = req.body;

    // Add the task to the queue
    queue.add({ taskName, duration });

    res.send('Task added to the queue.');
});

// Define a route to check the queue status
app.get('/queue', async (req, res) => {
    const jobsCount = await queue.count();
    const isIdle = jobsCount === 0;
    const isPaused = await queue.isPaused();

    const status = {
        length: jobsCount,
        isIdle,
        isPaused,
    };

    res.json(status);
});

// Process the queue
queue.process(async (job) => {
    const { taskName, duration } = job.data;
    await simulateTask(taskName, duration);
});

// Start the server
const port = 1000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

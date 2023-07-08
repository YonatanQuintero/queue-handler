````markdown
# Queue Handler Application

This is a simple Express.js application that demonstrates how to use the `bull` library to handle task queues. It allows you to add tasks to a queue and check the status of the queue.

## Prerequisites

- Node.js installed on your machine

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/queue-handler.git
```
````

2. Navigate to the project directory:

```bash
cd queue-handler
```

3. Install dependencies:

```bash
npm install
```

4. Start the server:

```bash
node app.js
```

The server will start running on `http://localhost:1000`.

## Adding Tasks to the Queue

To add a task to the queue, send a `POST` request to `http://localhost:1000/tasks` with the following JSON body:

```json
{
  "taskName": "Task 1",
  "duration": 5000
}
```

The `taskName` field represents the name of the task, and the `duration` field represents the duration of the task in milliseconds. Once the task is added to the queue, you will receive a response indicating that the task has been added.

## Checking Queue Status

To check the status of the queue, send a `GET` request to `http://localhost:1000/queue`. The response will be a JSON object with the following fields:

- `length`: The number of tasks in the queue.
- `isIdle`: Indicates whether the queue is currently idle (no tasks in progress).
- `isPaused`: Indicates whether the queue is currently paused.

## Task Processing

The tasks in the queue are processed using the `simulateTask` function, which simulates a long-running task. The function takes the task name and duration as parameters and logs the start and completion times of the task.

## Notes

- Make sure to adjust the port number if needed in the `app.js` file.
- If you encounter any issues, please refer to the documentation of the `bull` library for more information.

```

```

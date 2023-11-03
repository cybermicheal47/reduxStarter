const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

const tasks = [
  { id: 1, description: "Task 1", userId: 1, resolved: true },
  { id: 2, description: "Task 2", userId: 1 },
  { id: 3, description: "Task 3", userId: 2 },
  { id: 4, description: "Task 4" },
];

// Get all tasks
app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

// Add a new task
app.post("/api/tasks", (req, res) => {
  const task = { id: Date.now(), resolved: false, ...req.body };
  tasks.push(task);
  res.json(task);
});

// Update task's completed property
app.patch("/api/tasks/:id", (req, res) => {
  const index = tasks.findIndex((task) => task.id === parseInt(req.params.id));
  const task = tasks[index];

  if ("resolved" in req.body) {
    task.resolved = req.body.resolved;
  }
  if ("userId" in req.body) {
    task.userId = req.body.userId;
  }

  res.json(task);
});

// Delete a task by ID
app.delete("/api/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const updatedTasks = tasks.filter((task) => task.id !== taskId);

  if (updatedTasks.length < tasks.length) {
    tasks.length = 0;
    tasks.push(...updatedTasks);
    res.json({ message: "Task deleted" });
  } else {
    res.status(404).json({ message: "Task not found" });
  }
});

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the Task API!");
});

app.listen(9001, () => {
  console.log("Node server started on port 9001.");
});

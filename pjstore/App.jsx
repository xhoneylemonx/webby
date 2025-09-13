import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";
import CourseDrop from "./components/CourseDrop";

export default function App() {
  const [page, setPage] = useState("todo");

  return (
    <div>
      <h1>📚 Assignment</h1>
      <button onClick={() => setPage("todo")}>Todo List</button>
      <button onClick={() => setPage("course")}>Course Withdraw</button>

      {page === "todo" && (
        <div>
          <h2>Todo List</h2>
          <TodoForm />
          <TodoList />
        </div>
      )}

      {page === "course" && (
        <div>
          <h2>ระบบถอนรายวิชา</h2>
          <CourseForm />
          <CourseList />
          <CourseDrop />
        </div>
      )}
    </div>
  );
}

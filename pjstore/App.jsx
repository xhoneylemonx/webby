import { useState } from "react";

// TodoList
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

// Course Withdraw
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";
import CourseDrop from "./components/CourseDrop";

export default function App() {
  const [page, setPage] = useState("todo"); // ค่าเริ่มต้น todo หรือ course

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>📚 Assignment React + Zustand</h1>

      {/* ปุ่มสลับหน้า */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setPage("todo")} style={{ marginRight: "10px" }}>
          ✅ Todo List
        </button>
        <button onClick={() => setPage("course")}>
          📝 Course Withdraw
        </button>
      </div>

      {/* แสดง Todo */}
      {page === "todo" && (
        <div>
          <h2>✅ Todo List</h2>
          <TodoForm />
          <TodoList />
        </div>
      )}

      {/* แสดง Course Withdraw */}
      {page === "course" && (
        <div>
          <h2>📝 ระบบถอนรายวิชา</h2>
          <CourseForm />
          <CourseList />
          <CourseDrop />
        </div>
      )}
    </div>
  );
}

import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";
import CourseDrop from "./components/CourseDrop";

export default function App() {
  return (
    <div>
      <h1>📚 ระบบถอนรายวิชา</h1>
      <CourseForm />
      <CourseList />
      <CourseDrop />
    </div>
  );
}

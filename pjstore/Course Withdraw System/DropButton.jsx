import useCourseStore from "../store/courseStore";

export default function DropButton({ id }) {
  const dropCourse = useCourseStore((state) => state.dropCourse);
  return <button onClick={() => dropCourse(id)}>ถอน</button>;
}

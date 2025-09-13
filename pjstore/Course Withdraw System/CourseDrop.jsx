import useCourseStore from "../store/courseStore";

export default function CourseDrop() {
  const dropped = useCourseStore((state) => state.dropped);

  return (
    <div>
      <h2>รายวิชาที่ถอนแล้ว</h2>
      <ul>
        {dropped.map((c) => (
          <li key={c.id}>{c.code} - {c.nameTH}</li>
        ))}
      </ul>
    </div>
  );
}

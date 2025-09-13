import { useState } from "react";
import useCourseStore from "../store/courseStore";

export default function CourseForm() {
  const addCourse = useCourseStore((state) => state.addCourse);
  const [form, setForm] = useState({
    code: "",
    nameTH: "",
    nameEN: "",
    credit: 0,
    teacher: "",
    grade: 0
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCourse(form);
    setForm({ code: "", nameTH: "", nameEN: "", credit: 0, teacher: "", grade: 0 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="code" placeholder="รหัสวิชา" value={form.code} onChange={handleChange} />
      <input name="nameTH" placeholder="ชื่อวิชา(ไทย)" value={form.nameTH} onChange={handleChange} />
      <input name="nameEN" placeholder="ชื่อวิชา(EN)" value={form.nameEN} onChange={handleChange} />
      <input name="credit" type="number" placeholder="หน่วยกิต" value={form.credit} onChange={handleChange} />
      <input name="teacher" placeholder="อาจารย์" value={form.teacher} onChange={handleChange} />
      <input name="grade" type="number" placeholder="เกรด" value={form.grade} onChange={handleChange} />
      <button type="submit">เพิ่มรายวิชา</button>
    </form>
  );
}

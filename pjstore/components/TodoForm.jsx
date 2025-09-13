import { useState } from "react";
import useTodoStore from "../store/todoStore";

export default function TodoForm() {
  const [text, setText] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="เพิ่มงาน..."
      />
      <button type="submit">เพิ่ม</button>
    </form>
  );
}

import { create } from "zustand";

const useCourseStore = create((set) => ({
  courses: [],
  dropped: [],
  addCourse: (course) =>
    set((state) => ({
      courses: [...state.courses, { ...course, id: Date.now() }]
    })),
  dropCourse: (id) =>
    set((state) => {
      const course = state.courses.find((c) => c.id === id);
      return {
        courses: state.courses.filter((c) => c.id !== id),
        dropped: [...state.dropped, course]
      };
    }),
  gpa: () =>
    set((state) => {
      if (state.courses.length === 0) return 0;
      const total = state.courses.reduce((sum, c) => sum + c.grade, 0);
      return total / state.courses.length;
    })
}));

export default useCourseStore;

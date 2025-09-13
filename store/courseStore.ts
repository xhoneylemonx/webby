// courseStore.ts
import { create } from 'zustand';

export const useCourseStore = create((set) => ({
  courses: [],
  droppedCourses: [],
  addCourse: (course) =>
    set((state) => ({ courses: [...state.courses, course] })),
  dropCourse: (courseId) =>
    set((state) => ({
      droppedCourses: [...state.droppedCourses, courseId],
    })),
  calculateGPA: () => {
    // สมมติว่ามีเกรดใน droppedCourses → คำนวณ GPA
  },
}));
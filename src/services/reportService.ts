import Course from "@/model/CourseModel";
import Student from "@/model/StudentModel";

export const getCourseEnrollmentsOverTime = async () => {
  return await Course.aggregate([
    {
      $group: {
        _id: "$name",
        totalEnrollments: { $sum: "$enrollments" },
      },
    },
    { $sort: { totalEnrollments: -1 } },
  ]);
};

export const getTopPerformingStudents = async () => {
  return await Student.aggregate([
    { $unwind: "$courses" },
    {
      $group: {
        _id: "$courses",
        topStudent: { $first: "$name" },
        highestGPA: { $max: "$gpa" },
      },
    },
    { $sort: { highestGPA: -1 } },
  ]);
};

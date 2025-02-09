import mongoose, { Schema, Document } from "mongoose";

export interface ICourse extends Document {
  code: number;
  name: string;
  enrollments: string;
  facultyId: string;
}

const CourseSchema = new Schema<ICourse>({
  code: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  enrollments: { type: String, required: true },
  facultyId: { type: String, required: false },
});

const Course =
  mongoose.models.Course || mongoose.model<ICourse>("Course", CourseSchema);

export default Course;

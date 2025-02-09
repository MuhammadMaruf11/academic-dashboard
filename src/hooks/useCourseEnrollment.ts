// hooks/useReports.ts
import { api } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export const useCourseEnrollment = () => {
  const { data: courseEnrollment, isLoading } = useQuery({
    queryKey: ["courseEnrollments"],
    queryFn: async () => {
      const res = await api.get("/reports/course-enrollments");
      return res.data;
    },
    staleTime: 60000,
  });

  return {
    courseEnrollment,
    isLoading,
  };
};

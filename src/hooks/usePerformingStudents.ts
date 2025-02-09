// hooks/useReports.ts
import { api } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export const usePerformingStudents = () => {
  const { data: topPerformingStudent, isLoading } = useQuery({
    queryKey: ["topPerformingStudents"],
    queryFn: async () => {
      const res = await api.get("/reports/top-performing-students");
      return res.data;
    },
    staleTime: 60000,
  });

  return {
    topPerformingStudent,
    isLoading,
  };
};

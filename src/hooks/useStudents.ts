import { api } from "@/lib/api";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export const useStudents = () => {
  const queryClient = useQueryClient();

  const { data: students, isLoading } = useQuery({
    queryKey: ["students"],
    queryFn: async () => {
      const res = await api.get("/students");
      return res.data;
    },
    staleTime: 60000,
  });

  const updateGpa = useMutation({
    mutationFn: async ({ id, gpa }: { id: string; gpa: number }) => {
      const response = await api.patch(`/students/${id}`, { gpa });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["students"]);
    },
  });

  const updateCourse = useMutation({
    mutationFn: async ({ id, courses }: { id: string; courses: number }) => {
      const response = await api.patch(`/students/${id}`, { courses });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["students"]);
    },
  });

  return {
    students,
    isLoading,
    updateGpa,
    updateCourse,
  };
};

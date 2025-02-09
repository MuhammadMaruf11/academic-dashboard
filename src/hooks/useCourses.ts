import { api } from "@/lib/api";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";


export const useCourses = () => {
  const queryClient = useQueryClient();

  const { data: courses, isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await api.get("/courses");
      return res.data;
    },
    staleTime: 60000,
  });

const updateCourse = useMutation({
  mutationFn: async (course: {
    id: string;
    name?: string;
    enrollments?: string[];
    facultyId?: string;
  }) => {
    const res = await api.patch("/courses", course);
    return res.data;
  },
  onSuccess: () => {
    // Invalidate the 'courses' query to refetch the data
    queryClient.invalidateQueries(courses);
  },
});

  return { courses, isLoading, updateCourse };
};
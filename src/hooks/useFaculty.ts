import { api } from "@/lib/api";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";


export const useFaculty = () => {
  const queryClient = useQueryClient();

  const { data: faculty, isLoading } = useQuery({
    queryKey: ["faculty"],
    queryFn: async () => {
      const res = await api.get("/faculty");
      return res.data;
    },
    staleTime: 60000,
  });

const updateFaculty = useMutation({
  mutationFn: async (faculty: {
    id: string;
    name?: string;
    department?: string;
  }) => {
    const res = await api.patch("/faculty", faculty);
    return res.data;
  },
  onSuccess: () => {
    // Invalidate the 'faculty' query to refetch the data
    queryClient.invalidateQueries(faculty);
  },
});

  return { faculty, isLoading, updateFaculty };
};
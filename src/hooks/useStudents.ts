import { api } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

const fetchStudents = async () => {
  const { data } = await api.get("/students");
  return data;
};

export const useStudents = () =>
  useQuery({ queryKey: ["students"], queryFn: fetchStudents });

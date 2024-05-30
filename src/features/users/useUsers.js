import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  postData,
  putData,
  getData,
  deleteData,
} from "../../services/apiService";

export const useUsers = () => {
  const queryClient = useQueryClient();

  const createUser = () => {
    return useMutation({
      mutationFn: (data) => postData("/users", data),
      onSuccess: () => queryClient.invalidateQueries(["users"]),
    });
  };

  const updateUser = () => {
    return useMutation({
      mutationFn: (data) => putData({ endpoint: "/users", data }),
      onSuccess: () => queryClient.invalidateQueries(["users"]),
    });
  };

  const upsertUser = () => {
    return useMutation({
      mutationFn: (data) =>
        data.id
          ? putData({ endpoint: "/users", data })
          : postData({ endpoint: "/users", data }),
      onSuccess: () => {
        queryClient.invalidateQueries(["users"]);
      },
    });
  };

  const getUsers = (params) => {
    return useQuery({
      queryKey: ["users", params.page, params.pageSize, params.all],
      queryFn: () => getData({ endpoint: "/users", params }),
    });
  };

  const deleteUser = () => {
    return useMutation({
      mutationFn: (id) => deleteData({ endpoint: `/users/${id}` }),
      onSuccess: () => queryClient.invalidateQueries(["users"]),
    });
  };

  return { createUser, updateUser, upsertUser, getUsers, deleteUser };
};

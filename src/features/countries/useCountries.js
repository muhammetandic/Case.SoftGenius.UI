import { useQueryClient } from "@tanstack/react-query";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getData, postData, putData } from "../../services/apiService";

export const useCountries = () => {
  const queryClient = useQueryClient();

  const getCountries = () => {
    return useQuery({
      queryKey: ["countries"],
      queryFn: () => getData({ endpoint: "/countries" }),
    });
  };

  const createCountry = () => {
    return useMutation({
      mutationFn: (data) => postData({ endpoint: "/countries", data }),
      onSuccess: () => {
        queryClient.invalidateQueries(["countries"]);
      },
    });
  };

  const updateCountry = () => {
    return useMutation({
      mutationFn: (data) => putData({ endpoint: "/countries", data }),
      onSuccess: () => {
        queryClient.invalidateQueries(["countries"]);
      },
    });
  };

  const upsertCountry = () => {
    return useMutation({
      mutationFn: (data) =>
        data.id
          ? putData({ endpoint: "/countries", data })
          : postData({ endpoint: "/countries", data }),
      onSuccess: () => {
        queryClient.invalidateQueries(["countries"]);
      },
    });
  };

  return { getCountries, createCountry, updateCountry, upsertCountry };
};

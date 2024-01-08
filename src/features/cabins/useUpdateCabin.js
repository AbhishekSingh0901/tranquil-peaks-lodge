import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useUpdateCabin() {
  const queryClient = useQueryClient();

  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("Updated Cabin successfully !");
      queryClient.invalidateQueries({
        queryKey: ["cabin"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { editCabin, isEditing };
}

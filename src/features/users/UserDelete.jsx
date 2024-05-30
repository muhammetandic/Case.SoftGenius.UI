import { Button } from "semantic-ui-react";
import { useUsers } from "./useUsers";

export const UserDelete = ({ id }) => {
  const { deleteUser } = useUsers();
  const { mutate: removeUser } = deleteUser();
  const onClick = () => {
    removeUser(id);
  };
  return (
    <Button color="red" onClick={onClick}>
      Delete
    </Button>
  );
};

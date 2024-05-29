import { Dimmer, Loader, Button } from "semantic-ui-react";
import { DataTable } from "../../components/DataTable";
import { useUsers } from "./useUsers";
import { UserEdit } from "./UserEdit";

const DeleteComponent = ({ id }) => {
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

export const UsersTable = () => {
  const { getUsers } = useUsers();
  const { data, error, isLoading } = getUsers();

  return (
    <div>
      {error && <p>Error: {error.message}</p>}
      <Dimmer active={isLoading} inverted>
        <Loader />
      </Dimmer>
      <DataTable
        titles={["Name", "Email", "Country", "Actions"]}
        fields={["name", "email", "countryName"]}
        data={data}
        EditComponent={UserEdit}
        DeleteComponent={DeleteComponent}
      />
    </div>
  );
};

import { Dimmer, Loader } from "semantic-ui-react";
import { DataTable } from "../../components/DataTable";
import { UserEdit } from "./UserEdit";
import { UserDelete } from "./UserDelete";

export const UsersTable = ({ data, error, isLoading }) => {
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
        DeleteComponent={UserDelete}
      />
    </div>
  );
};

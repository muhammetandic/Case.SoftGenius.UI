import { Dimmer, Loader } from "semantic-ui-react";
import { DataTable } from "../../components/DataTable";
import { CountryEdit } from "./CountryEdit";

export const CountriesTable = ({ data, error, isLoading }) => {
  return (
    <div>
      {error && <p>Error: {error.message}</p>}
      <Dimmer active={isLoading} inverted>
        <Loader />
      </Dimmer>
      <DataTable
        titles={["Countries", "Actions"]}
        fields={["name"]}
        data={data}
        EditComponent={CountryEdit}
      />
    </div>
  );
};

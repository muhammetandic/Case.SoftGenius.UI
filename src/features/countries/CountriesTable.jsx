import { Dimmer, Loader } from "semantic-ui-react";
import { useCountries } from "./useCountries";
import { DataTable } from "../../components/DataTable";
import { CountryEdit } from "./CountryEdit";

export const CountriesTable = () => {
  const { getCountries } = useCountries();
  const { isLoading, error, data } = getCountries();
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

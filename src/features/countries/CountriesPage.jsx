import { Segment } from "semantic-ui-react";
import { CountriesTable } from "./CountriesTable";
import { CountryEdit } from "./CountryEdit";

export const CountriesPage = () => {
  return (
    <Segment>
      <div className="content-header">
        <div>
          <h3>Countries Page</h3>
        </div>
        <div>
          <CountryEdit title="Add" />
        </div>
      </div>
      <CountriesTable />
    </Segment>
  );
};

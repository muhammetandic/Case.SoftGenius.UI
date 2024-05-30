import { useState } from "react";
import { Segment, Pagination } from "semantic-ui-react";
import { CountriesTable } from "./CountriesTable";
import { CountryEdit } from "./CountryEdit";
import { useCountries } from "./useCountries";

export const CountriesPage = () => {
  const [pagination, setPagination] = useState({
    page: parseInt(localStorage.page_countries) || 0,
    pageSize: parseInt(localStorage.pageSize_countries) || 10,
    all: false,
  });

  const { getCountries } = useCountries();
  const { isLoading, error, data } = getCountries(pagination);

  const onPageChange = (_, { activePage }) => {
    localStorage.setItem("page_countries", activePage - 1);
    localStorage.setItem("pageSize_countries", pagination.pageSize);
    setPagination((current) => ({ ...current, page: activePage - 1 }));
  };

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
      <CountriesTable
        data={data?.data ?? []}
        error={error}
        isLoading={isLoading}
      />
      <div className="pagination">
        <Pagination
          boundaryRange={0}
          activePage={pagination.page + 1}
          firstItem={null}
          lastItem={null}
          siblingRange={1}
          onPageChange={onPageChange}
          totalPages={Math.ceil(data?.totalCount / pagination.pageSize) || 1}
        />
      </div>
    </Segment>
  );
};

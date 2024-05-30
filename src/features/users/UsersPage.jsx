import { useState } from "react";
import { Segment, Pagination } from "semantic-ui-react";
import { UsersTable } from "./UsersTable.jsx";
import { UserEdit } from "./UserEdit.jsx";
import { useUsers } from "./useUsers";

export const UsersPage = () => {
  const [pagination, setPagination] = useState({
    page: parseInt(localStorage.getItem("page_users")) || 0,
    pageSize: parseInt(localStorage.getItem("pageSize_users")) || 10,
  });

  const { getUsers } = useUsers();
  const { data, error, isLoading } = getUsers({
    page: pagination.page,
    pageSize: pagination.pageSize,
    all: false,
  });

  const onPageChange = (_, { activePage }) => {
    localStorage.setItem("page_users", activePage - 1);
    localStorage.setItem("pageSize_users", pagination.pageSize);
    setPagination((current) => ({ ...current, page: activePage - 1 }));
  };

  return (
    <Segment>
      <div className="content-header">
        <div>
          <h3>Users Page</h3>
        </div>
        <div>
          <UserEdit title="Add" />
        </div>
      </div>
      <UsersTable data={data?.data} error={error} isLoading={isLoading} />
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

import {
  Table,
  TableHeader,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
} from "semantic-ui-react";

export const DataTable = ({
  titles,
  fields,
  data,
  EditComponent,
  DeleteComponent,
}) => {
  return (
    <Table celled striped>
      <TableHeader>
        <TableRow>
          {titles &&
            titles.map((title) => (
              <TableHeaderCell key={title}>{title}</TableHeaderCell>
            ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {data &&
          data.map((data) => (
            <TableRow key={data.id}>
              {fields &&
                fields.map((field) => <TableCell>{data[field]}</TableCell>)}
              <TableCell>
                <EditComponent title="Edit" data={data} />
                {DeleteComponent && <DeleteComponent id={data.id} />}
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

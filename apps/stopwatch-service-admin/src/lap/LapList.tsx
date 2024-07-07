import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { STOPWATCH_TITLE_FIELD } from "../stopwatch/StopwatchTitle";

export const LapList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Laps"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="lapTime" source="lapTime" />
        <TextField label="lapNumber" source="lapNumber" />
        <ReferenceField
          label="Stopwatch"
          source="stopwatch.id"
          reference="Stopwatch"
        >
          <TextField source={STOPWATCH_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};

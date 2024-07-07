import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { STOPWATCH_TITLE_FIELD } from "./StopwatchTitle";

export const StopwatchShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="endTime" source="endTime" />
        <TextField label="startTime" source="startTime" />
        <ReferenceManyField reference="Lap" target="stopwatchId" label="Laps">
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

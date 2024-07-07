import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { STOPWATCH_TITLE_FIELD } from "../stopwatch/StopwatchTitle";

export const LapShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};

import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { StopwatchTitle } from "../stopwatch/StopwatchTitle";

export const LapEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="lapTime" source="lapTime" />
        <NumberInput step={1} label="lapNumber" source="lapNumber" />
        <ReferenceInput
          source="stopwatch.id"
          reference="Stopwatch"
          label="Stopwatch"
        >
          <SelectInput optionText={StopwatchTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

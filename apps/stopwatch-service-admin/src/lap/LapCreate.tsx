import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { StopwatchTitle } from "../stopwatch/StopwatchTitle";

export const LapCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};

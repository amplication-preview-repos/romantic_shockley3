import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { LapTitle } from "../lap/LapTitle";

export const StopwatchCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <DateTimeInput label="endTime" source="endTime" />
        <DateTimeInput label="startTime" source="startTime" />
        <ReferenceArrayInput
          source="laps"
          reference="Lap"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LapTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};

import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const GunEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="message" source="message" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};

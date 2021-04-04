import React from "react";
import AntFormTemplate from '@data-driven-forms/ant-component-mapper/form-template';
import FormRenderer from "@data-driven-forms/react-form-renderer/form-renderer";
import { componentMapper } from "../../mapper/mapper";
import { schema } from "../../schema/schema";

// formの向きをhorizontalに指定
const FormTemplate = ( props: any ) => <AntFormTemplate {...props} showFormControls={false} layout='horizontal' />;

const TextboxForm = () => (
    <FormRenderer
        FormTemplate={FormTemplate}
        componentMapper={componentMapper}
        schema={schema}
        onSubmit={console.log} />
);

export default TextboxForm;
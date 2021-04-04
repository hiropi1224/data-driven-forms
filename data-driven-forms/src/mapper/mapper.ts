import TextField from "@data-driven-forms/ant-component-mapper/text-field";
import componentTypes from "@data-driven-forms/react-form-renderer/component-types";
import { TextboxComponent } from '../components/TextboxForm/TextboxFormComponent';

export const componentMapper = {
    [ componentTypes.TEXT_FIELD ]: TextField,
    'textbox-component': TextboxComponent
};
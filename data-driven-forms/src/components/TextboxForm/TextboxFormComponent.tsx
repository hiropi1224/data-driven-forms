import React from 'react';
import useFieldApi from '@data-driven-forms/react-form-renderer/use-field-api';
import FormGroup from '@data-driven-forms/ant-component-mapper/form-group';
import { Input, Typography } from 'antd';
import 'antd/dist/antd.css';
import './textboxForm.css';

const { Text } = Typography;

export const TextboxComponent = ( props: any ) => {
    const {
        input,
        isReadOnly,
        isDisabled,
        placeholder,
        isRequired,
        label,
        helperText,
        description,
        validateOnMount,
        meta,
        FormItemProps,
        layout,
        questionText,
        questionNotice,
        inputLabelAhead,
        inputLabelBack,
        inputNotice,
        ...rest
    } = useFieldApi( props );

    return (
        <div className='wrapper'>
            <FormGroup
                label={label}
                meta={meta}
                validateOnMount={validateOnMount}
                helperText={helperText}
                description={description}
                FormItemProps={FormItemProps}
                isRequired={isRequired}
                layout={layout}
            >
                <div className='question-textarea'>
                    <Text className='question-text'>{questionText}</Text>
                </div>
                <Text >{inputLabelAhead}</Text>
                <Input
                    {...input}
                    defaultValue={input.value ? input.value : undefined}
                    disabled={isDisabled}
                    readOnly={isReadOnly}
                    placeholder={questionText}
                    {...rest}
                />
                <Text>{inputLabelBack}</Text>
            </FormGroup>
        </div>
    );
};
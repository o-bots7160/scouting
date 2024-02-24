import React from 'react';
import { inputSelector, useQRScoutState } from '../../store/store';
import BaseInputProps from './BaseInputProps';

export interface StringInputProps extends BaseInputProps {
  maxSize?: number;
}

export default function StringInput(props: StringInputProps) {
  const data = useQRScoutState(inputSelector(props.section, props.code));

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    props.onChange(e.currentTarget.value);
    e.preventDefault();
  }

  return (
    <textarea
      className="focus:shadow-outline w-full appearance-none break-words break-all rounded border leading-tight text-gray-700 shadow focus:outline-none dark:bg-gray-700 dark:text-white"
      style="font-size: 150%; height: 50px; padding: 5px; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;"
      disabled={data?.disabled}
      name={`${data?.title}_input`}
      id={`${data?.title}_input`}
      onChange={handleChange}
      defaultValue={data?.defaultValue || ''}
      value={data?.value || ''}
      maxlength={props.max}
      minlength={props.min}
    />
  );
}

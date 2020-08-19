import React from 'react';
import { Button } from '@alifd/next';
 
export interface TextButtonProps {
    name: string;
    icon: string;
}

const TextButtonProps_def:TextButtonProps = {
  name: "",
  icon: "",
}

const TextButton: React.FunctionComponent<TextButtonProps> = (props:TextButtonProps) :JSX.Element =>{
  
}

export default class Head extends React.Component implements TextButtonProps{
  onChangeAttrGroup=()=>{}
  render() {
  return (
    <div className="logo">
        <Button></Button>
    </div>
  );
  }
}
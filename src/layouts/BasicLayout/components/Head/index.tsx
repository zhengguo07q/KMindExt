import React from 'react';
import { Link } from 'ice';
import styles from './index.module.scss';
import { Button, Radio, Box } from '@alifd/next';
 
export interface ILogoProps {

};

const mainPageDataSource = ['思维导图', '大纲'];
export default class Head extends React.Component implements ILogoProps{
  onChangeMainPage=()=>{}
  onChangeAttrGroup=()=>{}
  render() {
  return (
    <div className="logo">
      <Radio.Group shape="button" onChange={this.onChangeMainPage} dataSource={mainPageDataSource} defaultValue="desktop"></Radio.Group>
    </div>
  );
  }
}
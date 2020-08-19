import React from 'react';
import { Button, Radio } from '@alifd/next';
 

const attrGroupDataSource = ["主题", "子主题", "联系", "概要", "外框", "笔记", "插入"];
export default class Head extends React.Component {
  onChangeAttrGroup=()=>{}
  render() {
  return (
    <div className="logo">
      <Radio.Group shape="button" onChange={this.onChangeAttrGroup} dataSource={attrGroupDataSource} defaultValue="desktop"></Radio.Group>
    </div>
  );
  }
}
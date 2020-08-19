import React from 'react';
import { Button, Radio } from '@alifd/next';
 

const attrGroupDataSource = ["图标", "格式"];
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
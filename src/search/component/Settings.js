import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { SettingFilled } from '@ant-design/icons';

/**
 * 
 * @param {object} param
 * @param {() => void} param.logout
 */
export default function Settings({ logout }) {
  return (
    <Dropdown
      overlay={
        <Menu>
          <Menu.Item onClick={logout}>๋ก๊ทธ์์</Menu.Item>
        </Menu>
      }
      trigger={['click']}
      placement="bottomRight"
    >
      <Button shape="circle" icon={<SettingFilled />} />
    </Dropdown>
  );
}
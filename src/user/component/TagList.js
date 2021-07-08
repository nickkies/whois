import React, { useState } from 'react';
import { Tag, Input, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../state';
import { PlusOutlined } from '@ant-design/icons';

export default function TagList() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const tags = user?.tag ? user.tag.split(',').map(item => item.trim()) : [];

  function onDelete(tag) {
    const newTag = tags.filter(item => item !== tag).join(', ');
    dispatch(
      actions.fetchUpdateUser({
        user, 
        key: 'tag', 
        value: newTag, 
        fetchKey: 'tag',
      }));
  }

  const [isAdd, setIsAdd] = useState(false);
  const [tmpTag, setTmpTag] = useState('');
  function onAdd() {
      setIsAdd(true);
      setTmpTag('');
  }

  function onSave() {
    if ( !tmpTag ) {
      setIsAdd(false);
    } else if ( tags.includes(tmpTag)) {
      message.error('이미 같은 태그가 있습니다.');
    } else {
      const newTag = user?.tag ? `${user.tag}, ${tmpTag}` : tmpTag;
      dispatch(
        actions.fetchUpdateUser({
          user,
          key: 'tag',
          value: newTag,
          fetchKey: 'tag'
        }),
      );
      setIsAdd(false);
    }
  }

  return (
    <>
      {tags.map(item => (
        <Tag key={item} closable onClose={() => onDelete(item)}>
          {item}
        </Tag>
      ))}
      {!isAdd && (
        <Tag onClick={onAdd} className="site-tag-plus">
          <PlusOutlined /> New Tag
        </Tag>
      )}
      {isAdd && (
        <Input 
          autoFocus
          type="text"
          size="small"
          style={{ width: 100 }}
          value={tmpTag}
          onChange={e => setTmpTag(e.target.value)}
          onBlur={() => setIsAdd(false)}
          onPressEnter={onSave}
        />
      )}
    </>
  );
}
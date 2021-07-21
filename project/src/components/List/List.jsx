import { useState } from 'react';
import './List.css';
export const List = () => {
  const [listData, setListData] = useState([
    { id: 1, text: 'dddd', isFinash: false },
  ]);
  const [addData, setAddData] = useState('');

  //点击新增
  function add() {
    setListData([
      ...listData,
      { id: listData.length + 1, text: addData, isFinash: false },
    ]);
    setAddData('');
  }
  //改变新增输入框的值
  function changeData(e) {
    setAddData(e.target.value);
  }
  //修改
  function edit(e, event) {
    listData.forEach((item, i) => {
      if (item.id === e.id) listData[i].text = event.target.value;
    });
    setListData([...listData]);
  }
  //改变前面的多选
  function changeBox(e) {
    listData.forEach((item, i) => {
      if (item.id === e.id) listData[i].isFinash = !item.isFinash;
    });
    setListData([...listData]);
  }
  //删除
  function delData(e) {
    listData.forEach((item, i) => {
      if (item.id === e.id) listData.splice(i, 1);
    });
    setListData([...listData]);
  }
  return (
    <div className="todo_list">
      <h1>Todo List</h1>
      <div className="add">
        <input
          type="text"
          placeholder="Add a task"
          value={addData}
          onChange={(e) => changeData(e)}
        />
        <span onClick={() => add()}>新增</span>
      </div>
      <div className="list_box">
        {listData.map((e) => (
          <div className="list" key={e.id}>
            <input
              type="checkBox"
              className="checkBox"
              checked={e.isFinash}
              onChange={(event) => changeBox(e, event)}
            />
            {e.isFinash ? (
              <input
                type="text"
                className="delText"
                defaultValue={e.text}
                onChange={(event) => edit(e, event)}
              />
            ) : (
              <input
                type="text"
                className="text"
                defaultValue={e.text}
                onChange={(event) => edit(e, event)}
              />
            )}
            {e.isFinash ? (
              <span onClick={() => delData(e)}>X</span>
            ) : (
              <span></span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

import React, { useContext } from "react";
import { ShoppingListContext } from "./ShoppingListContext";

const ShoppingItem = ({ task }) => {
  const { removeTask, findItem } = useContext(ShoppingListContext);
  return (
      <li className="list-item my-4">
        <div className="list-item-box d-flex justify-content-between">
          <div>{task.title}</div>
          <div className="boxWrap">
            <button className="btn btn-warning mr-2" onClick={()=>findItem(task.id)}>編集</button>
            <button className="btn btn-danger" onClick={() => removeTask(task.id)}>削除</button>
          </div>
        </div>
      </li>
    
  );
};

export default ShoppingItem;

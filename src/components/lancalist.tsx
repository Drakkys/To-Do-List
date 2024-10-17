import React, { useContext, useState } from "react";
import { ListContext } from "../contexts/addctx";
import { Item } from "../types/item";

const Lancalist: React.FC = () => {
  const listContextCtx = useContext(ListContext);
  const [inputText, setInputText] = useState<string>("");

  const handleClick = (): void => {
    if (inputText.trim()) {
      listContextCtx?.addTask(inputText);
      setInputText("");
    }
  };

  const toggleTask = (id: number) => {
    listContextCtx?.toggleTask(id);
  };

  const handleRemove = (id: number) => {
    listContextCtx?.handleRemove(id);
  };

  return (
    <div>
      <div className="flex mb-2">
        <input
          className="mt-4 p-1 mr-2 rounded-md w-[42rem] "
          type="text"
          placeholder="Adicione uma tarefa"
          value={inputText}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputText(e.target.value)
          }
        />
      </div>
      <button
        className="mt-4 mb-4 h-10 w-60 font-sans hover:scale-110 hover:bg-green-600 transform transition duration-150 bg-green-400 rounded-md "
        onClick={handleClick}
      >
        ADICIONAR
      </button>
      <div>
        <ul>
          {listContextCtx?.tasks.map((item: Item) => (
            <li
              key={item.id}
              className="relative mt-3 flex items-center bg-sky-600 justify-between"
            >
              <div className="flex items-center flex-1">
                <input
                  type="checkbox"
                  checked={item.done}
                  onChange={() => toggleTask(item.id)}
                  className="mr-2 ml-3 w-4"
                />
                <span
                  className={`cursor-pointer truncate ${
                    item.done ? "line-through" : ""
                  }`}
                  onClick={() => toggleTask(item.id)}
                >
                  {item.name}
                </span>
                <div className="absolute right-2">
                  <span
                    onClick={() => handleRemove(item.id)}
                    className=" cursor-pointer whitespace-nowrap  items-center justify-center"
                  >
                    🗑️
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Lancalist;

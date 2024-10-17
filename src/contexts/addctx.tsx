import { createContext, ReactNode, useState } from "react";
import { Item } from "../types/item";

type ListType = {
  tasks: Item[];
  addTask: (n: string) => void;
  toggleTask: (id: number) => void;
  handleRemove: (id: number) => void;
};

export const ListContext = createContext<ListType | null>(null);

export const ListContextProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Item[]>([]);

  const addTask = (taskName: string) => {
    const newTask: Item = {
      id: tasks.length + 1,
      name: taskName,
      done: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const toggleTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const handleRemove = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <ListContext.Provider value={{ tasks, addTask, toggleTask, handleRemove }}>
      {children}
    </ListContext.Provider>
  );
};

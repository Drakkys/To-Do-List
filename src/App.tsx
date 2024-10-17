import React from "react";
import { ListContextProvider } from "./contexts/addctx";
import Header from "./components/heather";
import Lancalist from "./components/lancalist";

function App() {
  return (
    <ListContextProvider>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="flex flex-col justify-start text-center w-[45rem] min-h-[50rem] max-h-[50rem] overflow-y-auto p-5 rounded-2xl bg-slate-600">
          <Header>To-Do List</Header>
          <Lancalist></Lancalist>
        </div>
      </div>
    </ListContextProvider>
  );
}

export default App;

"use client";

import React from "react";
import { trpc } from "../_trpc/client";

const TodoList = () => {
  const getTodos = trpc.getTodos.useQuery();

  return <div>{JSON.stringify(getTodos.data)}</div>;
};

export default TodoList;

import { useQuery } from '@tanstack/react-query';
import axios from '../utils/api/axios';

export const fetchTodo = async ({ queryKey }) => {
  const cid = queryKey[1];
  if (!cid) {
    return { data: {} };
  }

  const { data } = await axios.get(`/todos/${cid}`);
  return data;
};

const useTodo = (todoId) => {
  return useQuery(['todos', todoId], fetchTodo, { suspense: false });
};

export default useTodo;

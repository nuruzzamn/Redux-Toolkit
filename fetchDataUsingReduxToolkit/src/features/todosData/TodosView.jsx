import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDatas } from "./TodosSlice";

const Todos = () => {
  const { todos, isLoading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDatas());
  }, []);

  return (
    <div>
      <section>
        <h1> Todos App - Fetching data from api</h1>
        {isLoading && <p>isLoading...</p>}
        {error && <p>{error}</p>}
        {todos &&
          todos.map((todo) => {
            return (
              <article key={todo.id} className="card">
                <p> {todo.id} </p>
                <p> {todo.title} </p>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default Todos;

import React from 'react'
import { useSelector } from 'react-redux'

const Todos = () => {
    const {todos, isLoading, error} = useSelector ( state => state.todos)

    console.log(todos);
  return (
    <div>
        <section>
            <h1> Todos App - Fetching data from api</h1>
        </section>

    </div>
  )
}

export default Todos
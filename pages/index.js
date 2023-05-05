
import { useState } from "react";
import AddInput from './add_input';
import ShowList from './show_list';




export default function Home() {

  const [todos, setTodos] = useState([]);

  const onDelete = (i) => {
    console.log(i);
    const tempTodo = todos.filter((todo, key) => key !== i)
    setTodos(tempTodo);
  }

  const addTodo = (userInput, e) => {

    e.preventDefault()

    console.log(todos)
    setTodos(prevState => [...prevState, {
      task: userInput, checked: false
    }])

    console.log(todos)
  }

  const onChecked = (i) => {
    const tempArray = todos;
    tempArray[i].checked = !tempArray[i].checked
    setTodos(tempArray);
    console.log(todos);
  }

  const handleOnclick = (i) => {
    const tempArray = todos.filter((todoItem) => {
      console.log({ todoItem: todoItem.checked })
      return todoItem.checked
    })


    console.log("Enter", tempArray)
    setTodos(tempArray);
    console.log(todos);
  }



  return (
    //HTML Components
    <main>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <p className="fixed right-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Razaks Todo List
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        </div>
      </div>



      <div className="relative mt-2 ml-0 rounded-md shadow-sm">
        <AddInput
          addTodo={addTodo} />
      </div>

      <div className="relative mt-5 ml-0 rounded-md shadow-sm">

        {/* <button onClick={() => { if (value === 5 ? true : false)  (tempArray[i].checked = !tempArray[i].checked)}}>View Checked{checked ? 'uncheck' : 'check'} </button> */}

        <button onClick={handleOnclick} class=" btn w-full inline-flex items-center px-12 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          View Completed Tasks
        </button>

      </div>
      <div>
        {
        todos.map((todo, key) => <ShowList onChecked={onChecked} onDelete={onDelete} todo={todo} i={key} key={key} />)
        }
      </div>


      

      {/* viewAll
      viewchecked
      viewUnchecked

      if value === checked

      todos.filter((todo, key) */}




    </main >
  )
}

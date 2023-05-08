import { useState } from "react";

export default function AddInput(props) {
  const [userInput, setUserInput] = useState("");

  const [seeItems, setSeeItems] = useState([]);

  const toggleSeeItem = (index) => {
    setSeeItems((prevState) => {
      // check if the index is already in the array
      // if so remove it from the list
      if (prevState.includes(index))
        return prevState.filter((item) => item !== index);
      // else the previous array with the new index
      return [...prevState, index];
    });
  };
  
  const handleClick = (e) => {
    props.addTodo(userInput, e)
    setUserInput("");



  }


  return (
    <form ml-22em mt-7em>
      <input type="text"
        value={userInput}
        placeholder="Take down a note"
        className="block w-30 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        onChange={(e) => setUserInput(e.target.value)} />
      <div className="absolute inset-y-0 right-2 flex items-center">

        <button onClick={(e) => handleClick(e)} type='submit'>
          <a href="#" class="hover:bg-blue-400 group flex items-left rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-0 py-2 shadow-sm">
            <svg width="20" height="20" fill="currentColor" class="mr-2" aria-hidden="true">
              <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
            </svg>
            Add Task
          </a>
        </button>
      </div>

    </form>


  );
}
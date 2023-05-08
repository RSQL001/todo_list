

export default function ShowList(props) {
  const { onDelete, onChecked, todo, i } = props
  console.log(props)


  
  return (
    <div className="section px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-1 sm:px-0">

      <ul>
        <div className="flex items-center justify-flex-start mb-2">
          <input id="default-checkbox" type="checkbox" onChange={() => onChecked(i)} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
          <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{todo?.task}</label>
        </div>

      </ul>

      <button onClick={() => onDelete(i)} class="inline-flex items-center px-12 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
        Delete
      </button>

      
    </div>
    
    

    

    
  );
}
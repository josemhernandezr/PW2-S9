function NewTodo({ onChange, value, onAddNew}){
  return (
      <div className="flex w-screen items-center border bg-white">
          <form class="flex items-center mx-auto p-5">
          <input type="text" type="text" id="txtNTodo" name="txtNTodo" placeholder="Nuevo elemento" 
            onChange={onChange} value={value} caption="Nuevo item:"
            required
            className="p-2 border-b-2 border-gray-400 w-52 sm:w-96"
          ></input>
          <button onClick={onAddNew}
          className="mx-3 bg-green-500 border hover:bg-white hover:border-green-500">
          <svg class="h-10 w-10 text-white hover:text-green-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="12" y1="5" x2="12" y2="19" />  <line x1="5" y1="12" x2="19" y2="12" /></svg>
          </button>
          </form>
      </div>
  );
}
export default NewTodo;

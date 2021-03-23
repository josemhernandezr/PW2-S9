
function TodoListItem({descripcion, id, fb_id, completed, doneHandler, deleteHandler}){
  const onClick = (e)=>{
    doneHandler(fb_id);
  }
  const onDeleteClick = (e)=>{
    deleteHandler(fb_id);
  }

  const myClass = (completed)?"striked": "";
  return (
    <li className={myClass}>
      <div className="flex px-3 sm:px-5 py-3 border-b-2 border-gray-100 w-full">
        <div className="flex w-4/6 sm:w-5/6 lg:w-11/12">
          <svg class="h-6 w-6 my-auto ml-5 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M15 12h5a2 2 0 0 1 0 4h-15l-3 -6h3l2 2h3l-2 -7h3z" transform="rotate(-15 12 12) translate(0 -1)" />  <line x1="3" y1="21" x2="21" y2="21" /></svg>
          <p className="w-11/12 break-all px-5">
          {descripcion}
          </p>
        </div>
        <div className="flex w-2/6 sm:w-1/6 lg:w-1/12 mx-auto text-center">
          <div className="flex mx-auto">
            <button onClick={onClick} className="h-10 p-1 mx-2 border rounded-md bg-green-500 text-white hover:bg-white hover:text-green-500 hover:border-green-500"><svg class="h-6 w-6"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M5 12l5 5l10 -10" /></svg></button>
            <button onClick={onDeleteClick} className="h-10 p-1 mx-2 border rounded-md bg-red-500 text-white hover:bg-white hover:text-red-500 hover:border-red-500"><svg class="h-6 w-6"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="4" y1="7" x2="20" y2="7" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" />  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg></button>
          </div>
          </div>
      </div>
    </li>);
}

function TodoList({todos, doneHandler, deleteHandler}){
  const todoItems = todos.map((o)=>{
    return (
      <TodoListItem
        key={o.id}
        descripcion={o.description}
        id={o.id}
        fb_id={o.fb_id}
        completed={o.completed}
        doneHandler={doneHandler}
        deleteHandler={deleteHandler}
      />
    )
  });
  return (
    <section className="TodoList w-full">
      <ul>
         {todoItems}
      </ul>
    </section>
  );
}

export default TodoList;

import "./App.css";
import Todo_list from "./components/Todo_list";
// bootstrap is framework to design css quickly 
function App() {
  return (
    // what is this className: jsx - javascript syntax extension
    /* jsx is used to insert dynamic javascript in the react components */
    <div className="todo-app">
        <Todo_list/> 
    </div>
  );
}

export default App;

// props are javascript object
function Todo(props) {
  function deleteHandler() {
    console.log(props.text);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        {/* No parentheses() needed on onClick prop because it will execute the line right away */}
        <button class="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;

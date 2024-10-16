import {useRef} from "react"

function AddToDo(props) {
  const {onItemSubmit, phrase} = props

  const textarea = useRef(0)
  const checkbox = useRef(0)

  function handleSubmit() {
    const text_poznamky = textarea.current.value.trim()
    if (text_poznamky) {
      onItemSubmit([text_poznamky, checkbox.current.checked]);
    }
  }

  return (
    <div id="pridanie_ulohy">
      <h2>{phrase["Add a task"]}:</h2>
      <textarea ref={textarea}></textarea>
      <label> <input ref={checkbox} type="checkbox"/> {phrase["Important task"]} </label>
      <button type="submit" className="btn" onClick={handleSubmit}> {phrase["Save the task"]}</button>
    </div>
  );
}

export default AddToDo;

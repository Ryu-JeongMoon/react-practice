import {MutableRefObject, useRef, useState} from "react";
import {OnCreateProps} from "./Props";

const DiaryEditor = ({onCreate}: OnCreateProps) => {
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1
  })

  const authorInput: MutableRefObject<any> = useRef();
  const contentInput: MutableRefObject<any> = useRef();

  const handleChangeState = (e: any) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    if (state.author.length < 1) {
      authorInput.current.focus()
      return
    }

    if (state.content.length < 5) {
      contentInput.current.focus()
      return
    }

    onCreate(state.author, state.content, state.emotion)
    alert('Saved')
    setState({
      author: "",
      content: "",
      emotion: 1
    })
  }

  return (
    <div className="DiaryEditor">
      <h2>Diary of Today</h2>
      <div>
        <input ref={authorInput} name='author' type="text" value={state.author} onChange={handleChangeState}/>
      </div>
      <div>
        <textarea ref={contentInput} name='content' value={state.content} onChange={handleChangeState}></textarea>
      </div>
      <div>
        How do you feel? :
        <select name="emotion" value={state.emotion} onChange={handleChangeState}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default DiaryEditor
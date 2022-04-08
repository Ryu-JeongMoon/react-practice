import {DiaryItemProps} from "./Props";
import {MutableRefObject, useRef, useState} from "react";

const DiaryItem = ({diary, onDelete, onEdit}: DiaryItemProps) => {
  const [isEdit, setIsEdit] = useState(false)
  const [editContent, setEditContent] = useState(diary.content)

  const editContentInput: MutableRefObject<any> = useRef()
  const toggleIsEdit = () => setIsEdit(!isEdit)

  const handleDelete = () => {
    if (window.confirm(`Want to delete this diary?`))
      onDelete(diary.id)
  }

  const handleEdit = () => {
    if (editContent.length < 5) {
      editContentInput.current.focus()
      return
    }

    onEdit(diary.id, editContent)
    toggleIsEdit()
  }

  const handleQuitEdit = () => {
    toggleIsEdit()
    setEditContent(diary.content)
  }

  return (
    <div className="DiaryItem">
      <div className='info'>
        <div key={diary.id}>
          <span>author: {diary.author} | emotion: {diary.emotion}</span><br/>
          <span className='date'>created_date: {new Date(diary.created_date).toLocaleString()}</span>
        </div>
      </div>
      <div className='content'>
        {isEdit
          ? (<>
            <textarea
              ref={editContentInput}
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}/>
          </>)
          : (<>{diary.content}</>)}
      </div>
      {isEdit ?
        (<>
          <button onClick={handleQuitEdit}>Cancel</button>
          <button onClick={handleEdit}>Submit</button>
        </>) :
        (<>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={toggleIsEdit}>Edit</button>
        </>)
      }
    </div>
  )
}

export default DiaryItem
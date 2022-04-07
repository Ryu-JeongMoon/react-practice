import {Diary} from "./App";

const DiaryItem = (diary: Diary) => {
  return (
    <div className="DiaryItem">
      <div className='info'>
        <div key={diary.id}>
          <span>author: {diary.author} | emotion: {diary.emotion}</span><br/>
          <span className='date'>created_date: {new Date(diary.created_date).toLocaleString()}</span>
        </div>
      </div>
      <div className='content'>content: {diary.content}</div>
    </div>
  )
}

export default DiaryItem
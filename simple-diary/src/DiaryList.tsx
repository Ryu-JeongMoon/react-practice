import {Diary} from "./App";
import DiaryItem from "./DiaryItem";

export interface DiaryProps {
  diaryList: Diary[]
}

const DiaryList = ({diaryList}: DiaryProps) => {
  diaryList.map(it => console.log(it.id))
  diaryList.map(it => console.log(it.content))

  return (
    <div className="DiaryList">
      <h2>Diary List</h2>
      <h4>There are {diaryList.length} Diaries</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  )
}

export default DiaryList
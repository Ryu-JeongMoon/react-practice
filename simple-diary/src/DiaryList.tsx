import DiaryItem from "./DiaryItem";
import {DiaryListProps} from "./Props";

const DiaryList = ({diaryList, onDelete, onEdit}: DiaryListProps) => {
  return (
    <div className="DiaryList">
      <h2>Diary List</h2>
      <h4>There are {diaryList.length} Diaries</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem onDelete={onDelete} onEdit={onEdit} key={it.id} diary={it}/>
        ))}
      </div>
    </div>
  )
}

export default DiaryList
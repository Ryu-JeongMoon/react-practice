import './App.css'
import DiaryEditor from "./DiaryEditor";
import React from "react";
import DiaryList from "./DiaryList";

export const diaryList: Diary[] = [
  {
    id: 1,
    author: "panda",
    content: "bear",
    emotion: 5,
    created_date: new Date().getTime()
  },
  {
    id: 2,
    author: "panda panda",
    content: "bear bear",
    emotion: 3,
    created_date: new Date().getTime()
  },
  {
    id: 3,
    author: "panda panda panda",
    content: "bear bear bear",
    emotion: 1,
    created_date: new Date().getTime()
  }
]

export type Diary = {
  id: number,
  author: string,
  content: string,
  emotion: number,
  created_date: number
}

function App() {
  return (
    <div className="App">
      <DiaryEditor/>
      <DiaryList diaryList={diaryList}/>
    </div>
  )
}

export default App

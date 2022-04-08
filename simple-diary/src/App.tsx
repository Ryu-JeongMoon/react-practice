import './App.css'
import DiaryEditor from "./DiaryEditor";
import React, {useEffect, useRef, useState} from "react";
import DiaryList from "./DiaryList";
import {Diary} from "./Types";
import LifeCycle from "./LifeCycle";

//https://jsonplaceholder.typicode.com/comments

function App() {
  const [data, setData] = useState([] as Diary[])
  const dataId = useRef(0)

  const getData = async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json());

    const initData = result.slice(0, 20).map((it: any) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime(),
        id: dataId.current++
      }
    })

    setData(initData)
  }

  useEffect(() => {
    getData()
  }, [])

  const onCreate = (author: string, content: string, emotion: number) => {
    const created_date = new Date().getTime()
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current
    }

    dataId.current++
    setData([newItem, ...data]);
  }

  const onDelete = (targetId: number) => {
    console.log(`${targetId} diary deleted`)
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList)
  }

  const onEdit = (targetId: number, newContent: string) => {
    setData(
      data.map(it =>
        it.id === targetId ? {...it, content: newContent} : it
      )
    )
  }

  return (
    <div className="App">
      <LifeCycle/>
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList diaryList={data} onDelete={onDelete} onEdit={onEdit}/>
    </div>
  )
}

export default App


/*
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
 */
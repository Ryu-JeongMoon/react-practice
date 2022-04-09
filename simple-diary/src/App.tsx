import './App.css'
import DiaryEditor from "./DiaryEditor";
import React, {useEffect, useMemo, useRef, useState} from "react";
import DiaryList from "./DiaryList";
import {Diary} from "./Types";
import LifeCycle from "./LifeCycle";
import OptimizeTest from "./OptimizeTest";

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

  const getDiaryAnalysis = useMemo(() => {
    if (data.length == 0)
      return {goodEmotionCount: 0, badEmotionCount: 0, goodEmotionRatio: 0}

    console.log('Diary Analysis Start')

    const goodEmotionCount = data.filter(it => it.emotion >= 3).length
    const badEmotionCount = data.length - goodEmotionCount
    const goodEmotionRatio = goodEmotionCount / data.length * 100

    return {goodEmotionCount, badEmotionCount, goodEmotionRatio}
  }, [data.length])

  const {goodEmotionCount, badEmotionCount, goodEmotionRatio} = getDiaryAnalysis;

  return (
    <div className="App">
      <OptimizeTest />
      <LifeCycle/>
      <DiaryEditor onCreate={onCreate}/>
      <div>
        <p>Total Diary : {data.length}</p>
        <p>Good Emotion Diary : {goodEmotionCount}</p>
        <p>Bad Emotion Diary : {badEmotionCount}</p>
        <p>Good Emotion Ratio : {goodEmotionRatio}%</p>
      </div>
      <DiaryList diaryList={data} onDelete={onDelete} onEdit={onEdit}/>
    </div>
  )
}

export default App

/*
useMemo 콜백을 받아 콜백 수행 후 리턴되는 값을 기억해놓는 녀석
두번째 인자로 전달하는 배열에 변경을 감지할 값을 넣어주고 요놈이 바뀔 때만 수행된다
 */
import {Diary} from "./Types";

export type OnCreateProps = {
  onCreate: (author: string, content: string, emotion: number) => void
}

export type DiaryListProps = {
  diaryList: Diary[],
  onDelete: (targetId: number) => void,
  onEdit: (targetId: number, newContent: string) => void
}

export type DiaryItemProps = {
  diary: Diary,
  key: number,
  onDelete: (targetId: number) => void
  onEdit: (targetId: number, newContent: string) => void
}
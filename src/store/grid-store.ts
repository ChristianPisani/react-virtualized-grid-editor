import { create } from 'zustand'
import { produce } from 'immer'

type GridStore = {
  notes: { id: string; x: number; y: number; width: number }[]
  moveNote: (id: string, x: number, y: number) => void
  setNoteWidth: (id: string, width: number) => void
  draggingId: string | undefined
  setDraggingId: (id: string | undefined) => void
}

export const useGridStore = create<GridStore>()(set => ({
  notes: [
    { id: 'note_1', x: 3, y: 4, width: 1 },
    { id: 'note_2', x: 0, y: 6, width: 1 },
    { id: 'note_3', x: 0, y: 5, width: 1 },
    { id: 'note_4', x: 1, y: 10, width: 1 },
    { id: 'note_5', x: 5, y: 6, width: 1 },
    { id: 'note_6', x: 10, y: 2, width: 1 },
    { id: 'note_7', x: 1, y: 6, width: 1 },
    { id: 'note_8', x: 2, y: 1, width: 1 },
    { id: 'note_9', x: 9, y: 9, width: 1 },
    { id: 'note_10', x: 0, y: 3, width: 1 },
    { id: 'note_11', x: 3, y: 0, width: 1 },
    { id: 'note_12', x: 5, y: 7, width: 1 },
    { id: 'note_13', x: 7, y: 6, width: 1 },
    { id: 'note_14', x: 3, y: 9, width: 1 },
    { id: 'note_15', x: 9, y: 5, width: 1 },
    { id: 'note_16', x: 3, y: 10, width: 1 },
    { id: 'note_17', x: 6, y: 8, width: 1 },
    { id: 'note_18', x: 2, y: 3, width: 1 },
    { id: 'note_19', x: 0, y: 4, width: 1 },
    { id: 'note_20', x: 10, y: 4, width: 1 },
    { id: 'note_21', x: 3, y: 2, width: 1 },
    { id: 'note_22', x: 6, y: 3, width: 1 },
    { id: 'note_23', x: 0, y: 3, width: 1 },
    { id: 'note_24', x: 3, y: 0, width: 1 },
    { id: 'note_25', x: 4, y: 3, width: 1 },
    { id: 'note_26', x: 6, y: 9, width: 1 },
    { id: 'note_27', x: 1, y: 6, width: 1 },
    { id: 'note_28', x: 8, y: 6, width: 1 },
    { id: 'note_29', x: 0, y: 4, width: 1 },
    { id: 'note_30', x: 5, y: 4, width: 1 },
    { id: 'note_31', x: 5, y: 10, width: 1 },
    { id: 'note_32', x: 7, y: 4, width: 1 },
    { id: 'note_33', x: 2, y: 0, width: 1 },
    { id: 'note_34', x: 8, y: 8, width: 1 },
    { id: 'note_35', x: 5, y: 10, width: 1 },
    { id: 'note_36', x: 1, y: 8, width: 1 },
    { id: 'note_37', x: 3, y: 4, width: 1 },
    { id: 'note_38', x: 1, y: 1, width: 1 },
    { id: 'note_39', x: 7, y: 0, width: 1 },
    { id: 'note_40', x: 3, y: 3, width: 1 },
    { id: 'note_41', x: 6, y: 5, width: 1 },
    { id: 'note_42', x: 4, y: 2, width: 1 },
    { id: 'note_43', x: 3, y: 4, width: 1 },
    { id: 'note_44', x: 2, y: 6, width: 1 },
    { id: 'note_45', x: 3, y: 5, width: 1 },
    { id: 'note_46', x: 10, y: 7, width: 1 },
    { id: 'note_47', x: 8, y: 8, width: 1 },
    { id: 'note_48', x: 4, y: 10, width: 1 },
    { id: 'note_49', x: 6, y: 10, width: 1 },
    { id: 'note_50', x: 7, y: 6, width: 1 },
    { id: 'note_51', x: 9, y: 7, width: 1 },
    { id: 'note_52', x: 3, y: 0, width: 1 },
    { id: 'note_53', x: 2, y: 4, width: 1 },
    { id: 'note_54', x: 9, y: 6, width: 1 },
    { id: 'note_55', x: 5, y: 2, width: 1 },
    { id: 'note_56', x: 2, y: 6, width: 1 },
    { id: 'note_57', x: 8, y: 5, width: 1 },
    { id: 'note_58', x: 8, y: 4, width: 1 },
    { id: 'note_59', x: 7, y: 9, width: 1 },
    { id: 'note_60', x: 4, y: 10, width: 1 },
    { id: 'note_61', x: 7, y: 6, width: 1 },
    { id: 'note_62', x: 10, y: 8, width: 1 },
    { id: 'note_63', x: 7, y: 6, width: 1 },
    { id: 'note_64', x: 8, y: 10, width: 1 },
    { id: 'note_65', x: 2, y: 0, width: 1 },
    { id: 'note_66', x: 0, y: 10, width: 1 },
    { id: 'note_67', x: 3, y: 5, width: 1 },
    { id: 'note_68', x: 3, y: 10, width: 1 },
    { id: 'note_69', x: 2, y: 5, width: 1 },
    { id: 'note_70', x: 10, y: 5, width: 1 },
    { id: 'note_71', x: 0, y: 1, width: 1 },
    { id: 'note_72', x: 3, y: 1, width: 1 },
    { id: 'note_73', x: 10, y: 1, width: 1 },
    { id: 'note_74', x: 8, y: 6, width: 1 },
    { id: 'note_75', x: 10, y: 1, width: 1 },
    { id: 'note_76', x: 0, y: 1, width: 1 },
    { id: 'note_77', x: 2, y: 3, width: 1 },
    { id: 'note_78', x: 2, y: 2, width: 1 },
    { id: 'note_79', x: 0, y: 7, width: 1 },
    { id: 'note_80', x: 10, y: 10, width: 1 },
    { id: 'note_81', x: 10, y: 2, width: 1 },
    { id: 'note_82', x: 4, y: 7, width: 1 },
    { id: 'note_83', x: 9, y: 6, width: 1 },
    { id: 'note_84', x: 0, y: 4, width: 1 },
    { id: 'note_85', x: 2, y: 10, width: 1 },
    { id: 'note_86', x: 9, y: 1, width: 1 },
    { id: 'note_87', x: 2, y: 9, width: 1 },
    { id: 'note_88', x: 3, y: 10, width: 1 },
    { id: 'note_89', x: 2, y: 0, width: 1 },
    { id: 'note_90', x: 5, y: 1, width: 1 },
    { id: 'note_91', x: 6, y: 2, width: 1 },
    { id: 'note_92', x: 8, y: 8, width: 1 },
    { id: 'note_93', x: 1, y: 3, width: 1 },
    { id: 'note_94', x: 0, y: 9, width: 1 },
    { id: 'note_95', x: 8, y: 4, width: 1 },
    { id: 'note_96', x: 7, y: 10, width: 1 },
    { id: 'note_97', x: 5, y: 3, width: 1 },
    { id: 'note_98', x: 7, y: 5, width: 1 },
    { id: 'note_99', x: 4, y: 9, width: 1 },
    { id: 'note_100', x: 7, y: 2, width: 1 },
  ],
  moveNote: (id: string, x: number, y: number) => {
    set(
      produce((state: GridStore) => {
        const noteToBeMovedIndex = state.notes.findIndex(note => note.id === id)

        if (noteToBeMovedIndex === -1) {
          return
        }

        state.notes[noteToBeMovedIndex].x = x
        state.notes[noteToBeMovedIndex].y = y
      })
    )
  },
  setNoteWidth: (id: string, width: number) => {
    set(
      produce((state: GridStore) => {
        const noteToBeMovedIndex = state.notes.findIndex(note => note.id === id)

        if (noteToBeMovedIndex === -1) {
          return
        }

        state.notes[noteToBeMovedIndex].width = width
      })
    )
  },
  draggingId: undefined,
  setDraggingId: (draggingId: string | undefined) =>
    set(() => ({
      draggingId,
    })),
}))

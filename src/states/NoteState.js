const ACTION_NOTE_SUBMIT = "NOTE_SUBMIT";

const intialState = {
  selection: " ",
  text: " ",
};

export class NoteActions {
  noteAdd = () => ({ type: ACTION_NOTE_SUBMIT });

  
}
export function reduce(state = intialState, action) {
  switch (action.type) {
    case ACTION_NOTE_SUBMIT: {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
}

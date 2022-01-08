import { createSlice } from '@reduxjs/toolkit';
import { createContext, useContext, useReducer } from 'react';

interface Lol {
  currentlyHoveredElementId: string | null;
}

interface State {
  state: Lol;
  dispatch: React.Dispatch<any>;
}

interface CardProviderProps {
  children: React.ReactNode;
}

const initialState = {
  currentlyHoveredElementId: null,
};

export const CardContext = createContext<State | null>(null);

const stateSlice = createSlice({
  name: 'state',
  reducers: {
    onMouseEnter: (state, action) => {
      console.log(action);
      state.currentlyHoveredElementId = action.payload.id;
    },
    onMouseLeave: (state) => {
      state.currentlyHoveredElementId = null;
    },
  },
  initialState,
});

export const { onMouseEnter, onMouseLeave } = stateSlice.actions;

const stateReducer = stateSlice.reducer;

export const CardProvider = ({ children }: CardProviderProps) => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  const store = {
    state,
    dispatch,
  };

  return <CardContext.Provider value={store}>{children}</CardContext.Provider>;
};

export const useCardContext = () => useContext(CardContext);

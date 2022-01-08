import { createSlice } from '@reduxjs/toolkit';
import { createContext, useContext, useReducer } from 'react';

interface State {
  currentArtifact: string | null;
}

interface StateDispatcher {
  state: State;
  dispatch: React.Dispatch<any>;
}

export const GlobalContext = createContext<StateDispatcher | null>(null);

const initialState = {
  currentArtifact: null,
  isSystemInitialized: false,
};

const stateSlice = createSlice({
  name: 'state',
  reducers: {
    setArtifact: (state, action) => {
      state.currentArtifact = action.payload.currentArtifact;
    },
    setIsSystemInitialized: (state, action) => {
      state.isSystemInitialized = action.payload.isSystemInitialized;
    },
  },
  initialState,
});

export const { setArtifact, setIsSystemInitialized } = stateSlice.actions;

const stateReducer = stateSlice.reducer;

interface GlobalProviderProps {
  children: React.ReactNode;
}

export const GlobalProvder = ({ children }: GlobalProviderProps) => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  const store = {
    state,
    dispatch,
  };

  return (
    <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

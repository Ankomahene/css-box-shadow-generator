import { ReactNode, createContext, useState } from 'react';
import {
  IAppContext,
  IBoxShadowProperties,
  IBoxShadowState,
  IContainerProps,
} from './model';
import { v4 as uid } from 'uuid';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AppContext = createContext<IAppContext>(null as any);

const defaultBoxShadowProps: IBoxShadowProperties = {
  id: uid(),
  horizontalOffset: 0,
  verticalOffset: 5,
  blurRadius: 10,
  spreadRadius: -5,
  color: 'rgba(0,0,0,0.1)',
  activeInset: '',
};

const defaultContainerProps: IContainerProps = {
  width: 200,
  height: 200,
  borderRadius: 0,
  backgroundColor: '#ffffff',
};

const initialState: IBoxShadowState = {
  boxShadows: [{ ...defaultBoxShadowProps }],
  containerProps: { ...defaultContainerProps },
};

interface IContextProviderProps {
  children: ReactNode;
}
export function ContextProvider({ children }: IContextProviderProps) {
  const [state, setState] = useState<IBoxShadowState>(initialState);

  const addNewLayer = () => {
    setState((prevState) => ({
      ...prevState,
      boxShadows: [
        ...prevState.boxShadows,
        { ...defaultBoxShadowProps, id: uid() },
      ],
    }));
  };

  const removeLayer = (id: string) => {
    setState((prevState) => ({
      ...prevState,
      boxShadows: prevState.boxShadows.filter(
        (shadowLayer) => shadowLayer.id !== id
      ),
    }));
  };

  const setShadowProperty = <K extends keyof IBoxShadowProperties>(
    id: string,
    shadowKey: K,
    value: IBoxShadowProperties[K]
  ): void => {
    const boxShadows = [...state.boxShadows];
    const index = boxShadows.findIndex((shadowLayer) => shadowLayer.id === id);
    if (index > -1) {
      boxShadows[index][shadowKey] = value;
      setState((prevState) => ({
        ...prevState,
        boxShadows: [...boxShadows],
      }));
    }
  };

  const setContainerProperty = <K extends keyof IContainerProps>(
    key: K,
    value: IContainerProps[K]
  ): void => {
    setState((prevState) => ({
      ...prevState,
      containerProps: { ...prevState.containerProps, [key]: value },
    }));
  };

  return (
    <AppContext.Provider
      value={{
        state,
        addNewLayer,
        removeLayer,
        setShadowProperty,
        setContainerProperty,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

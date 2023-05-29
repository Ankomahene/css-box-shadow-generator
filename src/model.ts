export type ShadowKey =
  | 'horizontalOffset'
  | 'verticalOffset'
  | 'blurRadius'
  | 'spreadRadius'
  | 'color'
  | 'activeInset';

export type ContainerKey =
  | 'width'
  | 'height'
  | 'borderRadius'
  | 'backgroundColor';

export interface IBoxShadowProperties {
  id: string;
  horizontalOffset: number;
  verticalOffset: number;
  blurRadius: number;
  spreadRadius: number;
  color: string;
  activeInset?: '' | 'inset';
}

export interface IContainerProps {
  width: number;
  height: number;
  borderRadius: number;
  backgroundColor: string;
}

export interface IBoxShadowState {
  boxShadows: IBoxShadowProperties[];
  containerProps: IContainerProps;
}

export interface IAppContext {
  state: IBoxShadowState;
  addNewLayer: () => void;
  removeLayer: (id: string) => void;
  setShadowProperty: (
    id: string,
    shadowKey: keyof IBoxShadowProperties,
    value: IBoxShadowProperties[keyof IBoxShadowProperties]
  ) => void;
  setContainerProperty: <K extends keyof IContainerProps>(
    key: K,
    value: IContainerProps[K]
  ) => void;
}

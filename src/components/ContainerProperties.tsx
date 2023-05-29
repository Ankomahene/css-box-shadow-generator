import { ChangeEvent, useContext } from 'react';
import { Slider } from './Slider';
import { AppContext } from '../context';
import { IContainerProps } from '../model';
import { ColorPicker } from './ColorPicker';
import { ColorResult } from 'react-color';

export const ContainerProperties = () => {
  const { state, setContainerProperty } = useContext(AppContext);
  const { containerProps } = state;

  const handleSliderChange = (
    key: keyof IContainerProps,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setContainerProperty(key, Number(e.target.value));
  };

  const handleColorChange = (colorRes: ColorResult) => {
    const { hex } = colorRes;
    setContainerProperty('backgroundColor', hex);
  };
  return (
    <>
      <h1 className="text-lg font-bold mb-5 text-center">
        Container Properties
      </h1>
      <div>
        <div className="mt-5">
          <p className="py-2"> Color</p>
          <ColorPicker
            color={containerProps.backgroundColor}
            onChange={handleColorChange}
          />
        </div>

        <Slider
          minValue={10}
          maxValue={350}
          value={containerProps.width}
          label="Width"
          onChange={(e) => handleSliderChange('width', e)}
        />
        <Slider
          minValue={10}
          maxValue={350}
          value={containerProps.height}
          label="Height"
          onChange={(e) => handleSliderChange('height', e)}
        />

        <Slider
          minValue={0}
          maxValue={300}
          value={containerProps.borderRadius}
          label="Border Radius"
          onChange={(e) => handleSliderChange('borderRadius', e)}
        />
      </div>
    </>
  );
};

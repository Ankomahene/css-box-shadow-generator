import Collapsible from 'react-collapsible';
import { IBoxShadowProperties } from '../model';
import { AppContext } from '../context';
import { ChangeEvent, useContext } from 'react';
import { TrashIcon } from './Icons';
import { Slider } from './Slider';
import { ColorPicker } from './ColorPicker';
import { ColorResult } from 'react-color';

interface IShadowLayerProps {
  index: number;
  layer: IBoxShadowProperties;
}

export const ShadowLayer = ({ layer, index }: IShadowLayerProps) => {
  const { state, setShadowProperty, removeLayer } = useContext(AppContext);

  const handleSliderChange = (
    key: keyof IBoxShadowProperties,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setShadowProperty(layer.id, key, Number(e.target.value));
  };

  const handleColorChange = (colorRes: ColorResult) => {
    const { r, g, b, a } = colorRes.rgb;
    setShadowProperty(layer.id, 'color', `rgba(${r}, ${g}, ${b}, ${a})`);
  };

  return (
    <div className="py-5 border-b-2">
      <Collapsible trigger={`Layer ${index + 1}`} open={index === 0}>
        <div className="text-right">
          <button
            type="button"
            className="bg-red-500 text-white w-8 p-2 rounded-sm hover:bg-red-600 mt-3"
            onClick={() => removeLayer(layer.id)}
            disabled={state.boxShadows.length === 1}
          >
            <TrashIcon />
          </button>
        </div>

        <div className="mt-5">
          <p className="py-2"> Color</p>
          <ColorPicker color={layer.color} onChange={handleColorChange} />
        </div>

        <Slider
          minValue={-200}
          maxValue={200}
          value={layer.horizontalOffset}
          label="Horizontal Length"
          onChange={(e) => handleSliderChange('horizontalOffset', e)}
        />
        <Slider
          minValue={-200}
          maxValue={200}
          value={layer.verticalOffset}
          label="Vertical Length"
          onChange={(e) => handleSliderChange('verticalOffset', e)}
        />

        <Slider
          minValue={0}
          maxValue={200}
          value={layer.blurRadius}
          label="Blur Radius"
          onChange={(e) => handleSliderChange('blurRadius', e)}
        />

        <Slider
          minValue={0}
          maxValue={200}
          value={layer.spreadRadius}
          label="Spread Radius"
          onChange={(e) => handleSliderChange('spreadRadius', e)}
        />
        <div>
          <label className="flex justify-between items-center space-x-2">
            <span className="text-gray-700">Inset</span>
            <input
              type="checkbox"
              className="form-checkbox"
              checked={layer.activeInset != null && layer.activeInset !== ''}
              onChange={(e) =>
                setShadowProperty(
                  layer.id,
                  'activeInset',
                  e.target.checked ? 'inset' : ''
                )
              }
            />
          </label>
        </div>
      </Collapsible>
    </div>
  );
};

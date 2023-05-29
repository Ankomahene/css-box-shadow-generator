import { AppContext } from '../context';
import { useContext } from 'react';
import { ShadowLayer } from './ShadowLayer';

export const Shadows = () => {
  const { state, addNewLayer } = useContext(AppContext);

  return (
    <>
      <h1 className="text-lg font-bold mb-5 text-center">Box Shadows</h1>

      <div className="mb-4">
        <button
          type="button"
          className="rounded-md py-2 w-full shadow-sm bg-blue-600 text-white hover:bg-blue-700"
          onClick={addNewLayer}
        >
          New Layer
        </button>
      </div>
      <div className="overflow-y-auto">
        {state.boxShadows.map((shadowLayer, index) => (
          <ShadowLayer key={shadowLayer.id} index={index} layer={shadowLayer} />
        ))}
      </div>
    </>
  );
};

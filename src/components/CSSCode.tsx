import MEditor from '@monaco-editor/react';
import { useContext, useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { AppContext } from '../context';
import { FileCopy } from './Icons';
import { editorOptions, getStringifiedShadowLayers } from '../helpers';

export const CSSCode = () => {
  const { state } = useContext(AppContext);
  const [css, setCss] = useState('');

  useEffect(() => {
    const boxShadows = getStringifiedShadowLayers(state.boxShadows);

    const timeout = setTimeout(() => {
      const cssStyle = `.container {
    width: ${state.containerProps.width}px;
    height: ${state.containerProps.height}px;
    border-radius: ${state.containerProps.borderRadius}px;
    background-color: ${state.containerProps.backgroundColor};

    box-shadow: ${boxShadows};
    -webkit-box-shadow: ${boxShadows};
    --moz-box-shadow: ${boxShadows};
}`;
      setCss(cssStyle);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [state]);

  return (
    <div>
      <div className="flex justify-between items-center px-10 py-3 bg-blue-500">
        <p className="text-gray-100">CSS Code</p>
        <CopyToClipboard text={css} onCopy={() => console.log('copied')}>
          <button className="bg-white flex items-center py-1 px-2 rounded-sm active:bg-slate-200">
            <span className="inline">
              <FileCopy />
            </span>
            <span className="mx-1">Copy</span>
          </button>
        </CopyToClipboard>
      </div>
      <MEditor
        options={{
          ...editorOptions,
          minimap: { enabled: false },
        }}
        theme={`vs-dark`}
        height="30vh"
        defaultLanguage="css"
        value={css}
      />
    </div>
  );
};

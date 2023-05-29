import './App.css';
import { CSSCode } from './components/CSSCode';
import { Container } from './components/Container';
import { ContainerProperties } from './components/ContainerProperties';
import { Shadows } from './components/Shadows';
import { ContextProvider } from './context';

const gridItemStyles = 'bg-slate-100 p-5 h-96 lg:h-full overflow-y-auto';

function App() {
  return (
    <ContextProvider>
      <header className="p-5">
        <h1 className="text-blue-600 text-xl font-medium ">
          Box Shadow Generator
        </h1>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:h-[calc(100vh-5rem)]">
        <div className={`col ${gridItemStyles}`}>
          <Shadows />
        </div>
        <div className={`col-span-2 ${gridItemStyles}`}>
          <Container />
        </div>
        <div className="col-span-2 bg-slate-100 p-5 h-full">
          <ContainerProperties />
          <CSSCode />
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;

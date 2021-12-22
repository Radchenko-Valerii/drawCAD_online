import Canvas from './components/Canvas';
import ToolsBar from './components/ToolsBar';
import ToolSettingsBar from './components/ToolSettingsBar';
import "./styles/app.scss"

function App() {
  return (
    <div className="app">
      <ToolsBar/>
      <ToolSettingsBar/>
      <Canvas/>
    </div>
  );
}

export default App;

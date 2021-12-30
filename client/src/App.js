import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom"
import Canvas from './components/Canvas';
import ToolsBar from './components/ToolsBar';
import ToolSettingsBar from './components/ToolSettingsBar';
import "./styles/app.scss";

function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Switch>
        <Route path="/:id">
        <ToolsBar/>
        <ToolSettingsBar/>
        <Canvas/>
        </Route>
        <Redirect to={`f${(+new Date).toString(16)}`} />
      </Switch>

      
    </div>
    </BrowserRouter>
  );
}

export default App;

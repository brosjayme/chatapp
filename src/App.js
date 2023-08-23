import "./App.css";
import { ChatEngine } from "react-chat-engine";

function App() {
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="330734e7-0d7b-4c72-90f3-a100ecf77a38"
        userName="john"
        userSecret="jostme"
      />
    </div>
  );
}

export default App;

import "./App.css";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";

function App() {
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="330734e7-0d7b-4c72-90f3-a100ecf77a38"
        userName="john"
        userSecret="jostme"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() =>
          new Audio(
            "https://chat-enngin-assets.s3.amazonaws.com/click.mp3,"
          ).play()
        }
      />
    </div>
  );
}

export default App;

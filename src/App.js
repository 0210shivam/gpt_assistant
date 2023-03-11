import Chat from './pages/Chat';
import Landing from './pages/Landing';

function App() {

  const ChatPage = true;

  return (
    <div>
      {

        (!ChatPage) ? <Landing /> : <Chat />

      }

    </div>
  );
}

export default App;

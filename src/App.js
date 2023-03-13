import Chat from './pages/Chat';
import Landing from './pages/Landing';
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="chat" element={<Chat />} />
    </Routes>
  );
}

export default App;

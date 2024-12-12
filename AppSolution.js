import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/*" element={<Users />} />
        <Route path="/*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <h1>Home</h1>; }
function About() { return <h1>About</h1>; }
function NoMatch() { return <h1>404</h1>; }

function Users() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/');
  const userId = pathSegments[2];

  return (
    <div>
      <h1>Users</h1>
      {userId ? <p>User ID: {userId}</p> : <p>No user selected</p>}
    </div>
  );
}

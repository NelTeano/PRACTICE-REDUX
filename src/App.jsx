import { Route, Routes } from 'react-router-dom'

// PAGES
import Home from './pages/Home'
import SecondPage from './pages/SecondPage';

// STYLES
import './App.css'

function App() {

    const routes = [
      {
        pathname: "/",
        element: Home
      },
      {
        pathname: "/SecondPage",
        element: SecondPage
      },
    ];


    return(
      <>
          <Routes>
          {routes.map((route, index)=> (
            <Route key={index} path={route.pathname} element={<route.element />} />
          ))}
        </Routes>
      </>
    )
}

export default App
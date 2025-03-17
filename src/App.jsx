import { useState } from 'react'
import { Routes,Route, useNavigate, Link, useRoutes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeList from './pages/recipes'
import CommentList from './pages/comments'
import RecipeDetails from './pages/recipe-det'
import NotFoundPage from './pages/notfound'
import Layout from './components/layout'
import ReactHookForm from './pages/react-hook-form'
import Hook from './pages/hook'
import CallBackExample from './pages/use-callback'
import ReactQueryDemo from './pages/react-query'

function App() {
  const [count, setCount] = useState(0)
  const navigate=useNavigate();
  function CustomRoutes(){
    const element=useRoutes([
      {
        path:'/home', element:<Layout/>,
        children:[
          {
            path:'recipe-list',
            element:<RecipeList/>
          },
          {
            path:'comment-list',
            element:<CommentList/>
          },
          {
            path:'recipe-list/:id',
            element:<RecipeDetails/>
          },
        ]
      },
      {
        path:'*',element:<NotFoundPage/>
      },
      {
        path:'react-hook',element:<ReactHookForm/>
      },
      {
        path:'/hook',
        element:<Hook/>
      },
      {
        path:'/call-back',
        element:<CallBackExample/>
      },
      {
        path:'/react-query',
        element:<ReactQueryDemo/>
      }
    ])
    return element;
  }

  return (
    <>
      <div>
        <h1>Routing,Custtom-Hooks</h1>
        <div>
        <Link to='home/recipe-list'>Recipe-Page</Link>
        <Link to='/comment-list'>Recipe-Page</Link>
        </div>
        <button onClick={()=>navigate('/home/comment-list')} style={{backgroundColor:'black',color:'white'}}>Comment Page</button>
        <button onClick={()=>navigate('/home/recipe-list')} style={{backgroundColor:'black',color:'white',marginLeft:'5px'}}>Recipe Page</button>
       <Routes>
        <Route path='/home' element={<Layout/>}>
          <Route path="recipe-list" element={<RecipeList/>}/>
          <Route path="comment-list" element={<CommentList/>}/>
          <Route path='recipe-list/:id' element={<RecipeDetails/>}/>
        </Route>
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
        {/* <CustomRoutes/> */}

      </div>
    </>
  )
}

export default App

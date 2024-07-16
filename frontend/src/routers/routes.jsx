import {createBrowserRouter} from "react-router-dom"
import Home from "../Pages/Home"
import Index from "../layout/Index"
import Products from "../Pages/Products"
import Posts from "../Pages/Posts"
import ProductForm from "../Pages/ProductForm"
import PostForm from "../Pages/PostForm"
import Todo from "../Pages/Todo"
import TodoForm from "../Pages/TodoForm"
import ContactUs from "../Pages/ContactUs"
import Admin from "../Pages/Admin"
import LoginSignup from "../layout/LoginSignup"
import ProductSho from "../Pages/ProductSho"


export default createBrowserRouter([
  
  
    // {
    //     path:"",
    //     element:<LoginSignup/>,
    //     children:[
            {
                path:"/",
                element:<Index/>,
                children:[
                    {
                        path:"",
                        element:<Home/>
                    },
                    {
                        path:"/product",
                        element:<ProductSho/>
                    },
                    {
                        path:"/createProduct",
                        element:<ProductForm/>
                    },
                    {
                        path:"/editProduct/:id",
                        element:<ProductForm/>
                    },
                    {
                        path:"/post",
                        element:<Posts/>,
                      
                    },
                    {
                        path:"/createPost",
                        element:<PostForm/>
                    },
                    {
                        path:"/editPost/:id",
                        element:<PostForm/>
                    },
                    {
                        path:"/todo",
                        element:<Todo/>
                    },
                    {
                        path:"/createTodo",
                        element:<TodoForm/>
                    },
                    {
                        path:"/editTodo/:id",
                        element:<TodoForm/>
                    },
                    
                    {
                        path:"/contact",
                        element:<ContactUs/>
                    },
                    {
                        path:"/admin",
                        element:<Admin/>
                    },
                    
                    {
                        path:"/productEdit",
                        element:<Products/>
                    },
                    {
                        path:"/login",
                            element:<LoginSignup/>,
                    }
                    
        
                    
                    
                
                // ]
            // }
        ]
    },
])
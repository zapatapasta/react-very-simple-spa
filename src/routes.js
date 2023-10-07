import Home from "./pages/Home/Home"
import UsersList from "./pages/Users/UserList"
import NewUser from "./pages/NewUser/NewUser"
import Products from "./pages/Products/Products"

let routes = [
    {path: '/', element: <Home />},
    {path: '/users', element: <UsersList />},
    {path: '/newusers', element: <NewUser />},
    {path: '/products', element: <Products />},
]

export default routes
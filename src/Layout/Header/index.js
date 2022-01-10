import { Link } from "react-router-dom";
import './stayle.css'



export default function Header(){

    return <header>
        <h1>Excersice Stock</h1>
        <nav>
        <Link to='/'>Home</Link>
        <Link to='/admin'>Admin</Link>
        <Link to='/login'>Login</Link>
        </nav>
    </header>

}
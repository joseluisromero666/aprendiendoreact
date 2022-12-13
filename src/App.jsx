import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
} from "react-router-dom";

import Home from './views/home'
import TodoListView from './views/todoListView'

export function App() {
    return (
        <Router>
            <div className="container mt-5">
                <div className="btn-group">
                    <Link to="/" className="btn btn-dark">Inicio</Link>
                    <Link to="/todoListView" className="btn btn-dark">todoListView</Link>
                </div>
                <hr />

                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/todoListView" element={<TodoListView />} />
                </Routes>
            </div>


        </Router>
    );
}

import { BrowserRouter , Switch , Route } from "react-router-dom";
import Header  from "./Header";
import Home from '../pages/Home'
import Footer from "./Footer"

export default function Body() {
    return (
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path="/"  component={Home} />
                </Switch>
                <Footer/>
            </BrowserRouter>

    )
}
import { useEffect } from "react";
import { Nav , Navbar , Form , FormControl , Button} from "react-bootstrap";
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { test} from "../config/Apis";
import  { useState } from "react";
import { useHistory } from "react-router-dom";
export default function Header() {
    const [categories, setCategories] = useState([])
    const [q , setQ]= useState("")
    const history = useHistory()
    useEffect(() => {
       return test().then(data => {
           setCategories(data.data.results)
       })
    }, []) 
    console.log('category',categories);
    const search = (event)=>{
        event.preventDefault()
        history.push(`/?q=${q}`)
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/">Trang chu</Link>
                        {categories.map(c=>{
                            let path = `/?category_id=${c.id}`
                            return  <Link className="nav-link" to={path}>{c.name}</Link>
                        })
                        }
                    </Nav>
                    <Form className="d-flex" onSubmit={search}>
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            value={q}
                            onChange={(event)=>setQ(event.target.value)}

                        />
                        <Button type="submit" variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
</Navbar>
    )
}
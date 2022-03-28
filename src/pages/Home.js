import { useEffect, useState } from "react"
import { Row } from "react-bootstrap";
import ECourseCard from "../layouts/ECoursesCard";
import Axios from "axios"
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

export default function Home() {

    const [courses , setCourses] = useState([])
    const location = useLocation()
    useEffect(()=>{
        Axios.get(`http://127.0.0.1:8000/courses/${location.search}`)
        .then(res =>{
            console.log(res.data)
            setCourses(res.data.results)
        }).catch(err=>console.log(err))
    },[location.search])
    return ( 
        <>
            <h1 className="text-center text-dabger">DANH MUC KHOA HOC</h1>
            <Row>
                { courses && courses.map( (c)=> <ECourseCard obj ={c} />)}
               
            </Row>
        </>
    )
}
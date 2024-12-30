import { useRef } from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Form from "./sections/form";

function Contact() {

    const projectsRef = useRef(null);
    const experienceRef = useRef(null);

    const home = false;

    return (
        <>
            <NavBar projectsRef={projectsRef} experienceRef={experienceRef} home={home} />
            <Form />
            <Footer />
        </>
    )
}

export default Contact;
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import List from "../components/List";
import Link from "../components/Link";
import "./ProjectDetails.css"

const ProjectDetails = ({ userName }) => {

    const [loading, setLoading] = useState(false);
    const [project, setProject] = useState([]);
    const { name } = useParams();
    console.log(name);

    useEffect(() => {
        async function fetchData() {
            const data = await fetch(`https://api.github.com/repos/${userName}/${name}`);
            const result = await data.json();
            console.log(result);

            if (result) {
                setProject(result);
                setLoading(false);
            }
        }
        // fetchData();
        if (userName && name) {
            fetchData();
        }
    }, [userName, name])

    const items = [
        {
            field: "html_url",
            value: <Link url={project.html_url} title={project.html_url} />,
        },
        { field: "description", value: project.description },
        { field: "id", value: project.id },
        { field: "name", value: project.name },
    ];

    return (
        <div className="Project-container">
            <h2>Project: {project.name}</h2>
            {loading ? <span>Loading...</span> : <div>
                <List items={items} />
            </div>}
        </div>
    )
}

export default ProjectDetails
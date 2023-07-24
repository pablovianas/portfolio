import projectList from '../../utils/projectList.json'
import { Image } from '../Image'
import { Link } from '../Link'
import * as S from './style'


export const ProjectList = () => {

    return(
        <S.ProjectList>
            <h2>Projects</h2>
            <ul className='projects'>
            {
                projectList.map((project) => {
                    return (
                        <li key={project.name} className="project">
                            <div className="project-image">
                                <Image src="https://placekitten.com/300/" alt={project.name} />
                                <div className='project-links'>
                                    <Link href={project.deploy}>View Project</Link>
                                    <Link href={project.repository}>View Code</Link>
                                </div>
                            </div>
                            <span>{project.name}</span>
                            <ul className="languages">
                                {project.languages.map((language) => {
                                    return <li key={language}>{language}</li>;
                                })}
                            </ul>
                        </li>
                    );
                })
            }
            </ul>
        </S.ProjectList>
    )
}
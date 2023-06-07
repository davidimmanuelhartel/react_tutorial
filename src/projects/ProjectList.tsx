import React, { useState } from 'react';
import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

interface ProjectListProps {
  projects: Project[];
}

function ProjectList({ projects }: ProjectListProps) {
    const [projectBeingEdited, setProjectBeingEdited] = useState({});
    
    const handleEdit = (project: Project) => {
        console.log(project);
    };

    const items = projects.map(project => (
        <div key={project.id} className="col-sm">
        <ProjectCard 
        project={project}
        onEdit={handleEdit}
        ></ProjectCard>
        <ProjectForm></ProjectForm>
        </div>
    ));
    return <div className="row">{items}</div>;
}

export default ProjectList;
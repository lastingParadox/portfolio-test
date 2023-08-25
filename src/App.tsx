import { ReactOriginal, NodejsOriginal, ExpressOriginal, MongodbOriginal } from 'devicons-react';
import { Container, Grid } from '@mui/material';
import ProjectCard from './components/ProjectCard'; // Adjust the import path
import { FunctionComponent } from 'react';
import './App.css';

interface ProjectData {
  title: string;
  imageSrc: string;
  description: string;
  startDate: string;
  endDate: string;
  technologies: FunctionComponent[];
}

const projects: ProjectData[] = [
  {
    title: 'Project 1',
    imageSrc: '/images/project1.jpg',
    description: 'This portfolio website was built using React, TypeScript, and Material UI.',
    startDate: '2023-01-01',
    endDate: '2023-05-31',
    technologies: [ReactOriginal, NodejsOriginal, ExpressOriginal, MongodbOriginal],
  },
  // Add more project objects here
];

const App = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default App;

import { Card, CardHeader, CardMedia, CardContent, Typography, Chip } from '@mui/material';
import { FunctionComponent } from 'react';

interface FunctionComponentProps {
    style?: React.CSSProperties;
    color?: string;
    size?: string;
};

interface ProjectProps {
  title: string;
  imageSrc: string;
  description: string;
  startDate: string;
  endDate: string;
  technologies: FunctionComponent<FunctionComponentProps>[];
}

const ProjectCard = ({
  title,
  imageSrc,
  description,
  startDate,
  endDate,
  technologies,
} : ProjectProps) => {
  return (
    <Card>
      <CardHeader title={title} subheader={`${startDate} - ${endDate}`} />
      <CardMedia component="img" height="200" image={imageSrc} alt={title} />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
        <div style={{ marginTop: '1rem', display: 'flex' }}>
          {technologies.map((TechComponent, index) => (
            <div style={{ height: 32, width: 32, display: 'inline-block', justifyContent: 'space-around' }}>
              <TechComponent size="32"/>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;

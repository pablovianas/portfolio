import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../../data/projects';
import { fadeInUp, staggerContainer } from '../../animations/variants';
import * as S from './style';

export const Projects = () => {
    return (
        <S.ProjectsSection id="projects">
            <S.Container
                as={motion.div}
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
            >
                <S.Header as={motion.div} variants={fadeInUp}>
                    <S.SectionTitle>Projetos</S.SectionTitle>
                    <S.SectionDescription>
                        Alguns dos projetos que desenvolvi
                    </S.SectionDescription>
                </S.Header>

                <S.ProjectsGrid>
                    {projects.map((project, index) => (
                        <S.ProjectCard
                            key={project.id}
                            as={motion.div}
                            variants={fadeInUp}
                            custom={index}
                        >
                            <S.ProjectImageWrapper>
                                <S.ProjectImage src={project.image} alt={project.name} />
                                <S.ProjectOverlay>
                                    <S.ProjectLinks>
                                        {project.liveUrl && (
                                            <S.ProjectLink
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                as={motion.a}
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <ExternalLink size={20} />
                                                Demo
                                            </S.ProjectLink>
                                        )}
                                        <S.ProjectLink
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            as={motion.a}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <Github size={20} />
                                            Código
                                        </S.ProjectLink>
                                    </S.ProjectLinks>
                                </S.ProjectOverlay>
                            </S.ProjectImageWrapper>

                            <S.ProjectContent>
                                <S.ProjectTitle>{project.name}</S.ProjectTitle>
                                <S.ProjectDescription>{project.description}</S.ProjectDescription>

                                <S.TechStack>
                                    {project.technologies.map((tech) => (
                                        <S.TechTag key={tech}>{tech}</S.TechTag>
                                    ))}
                                </S.TechStack>
                            </S.ProjectContent>
                        </S.ProjectCard>
                    ))}
                </S.ProjectsGrid>
            </S.Container>
        </S.ProjectsSection>
    );
};
import { motion } from 'framer-motion';
import { skills, skillCategories, getAllCategories } from '../../../data/skills';
import { fadeInUp, staggerContainer } from '../../../animations/variants';
import * as S from './style';

export const Skills = () => {
    const categories = getAllCategories();

    return (
        <S.SkillsSection id="skills">
            <S.Container
                as={motion.div}
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
            >
                <S.Header as={motion.div} variants={fadeInUp}>
                    <S.SectionTitle>Tecnologias & Ferramentas</S.SectionTitle>
                </S.Header>

                <S.CategoriesWrapper>
                    {categories.map((category) => {
                        const categorySkills = skills.filter(s => s.category === category);

                        return (
                            <S.CategorySection key={category}>
                                <S.CategoryTitle>{skillCategories[category]}</S.CategoryTitle>
                                <S.SkillsGrid>
                                    {categorySkills.map((skill, index) => (
                                        <S.SkillCard
                                            key={skill.name}
                                            as={motion.div}
                                            variants={fadeInUp}
                                            custom={index}
                                            whileHover={{ y: -8, scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <S.SkillIcon>
                                                <skill.icon />
                                            </S.SkillIcon>
                                            <S.SkillName>{skill.name}</S.SkillName>
                                        </S.SkillCard>
                                    ))}
                                </S.SkillsGrid>
                            </S.CategorySection>
                        );
                    })}
                </S.CategoriesWrapper>
            </S.Container>
        </S.SkillsSection>
    );
};
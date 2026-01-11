import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "../../../data/personal";
import { fadeInUp, staggerContainer } from "../../../animations/variants";
import * as S from "./style";
import profilePicture from "../../../assets/profile-pic.jpeg";

export const Hero = () => {
    const scrollToProjects = () => {
        document
            .getElementById("projects")
            ?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <S.HeroSection id="home">
            <S.Container
                as={motion.div}
                variants={staggerContainer}
                initial="initial"
                animate="animate"
            >
                <S.Content>
                    <S.TextContent as={motion.div} variants={fadeInUp}>
                        <S.Greeting>Olá, eu sou</S.Greeting>
                        <S.Name>{personalInfo.name}</S.Name>
                        <S.Role>{personalInfo.role}</S.Role>
                        <S.Bio>{personalInfo.bio}</S.Bio>

                        <S.CTAGroup>
                            <S.PrimaryButton
                                as={motion.a}
                                href={personalInfo.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label="Conectar no LinkedIn"
                            >
                                <Linkedin size={20} aria-hidden="true" />
                                Vamos conversar
                            </S.PrimaryButton>

                            <S.SecondaryButton
                                as={motion.button}
                                onClick={scrollToProjects}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label="Ver projetos"
                            >
                                Ver projetos
                                <ArrowDown size={20} aria-hidden="true" />
                            </S.SecondaryButton>
                        </S.CTAGroup>

                        <S.SocialLinks>
                            <S.SocialLink
                                href={personalInfo.social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                as={motion.a}
                                whileHover={{ y: -4 }}
                                aria-label="GitHub"
                            >
                                <Github size={24} aria-hidden="true" />
                            </S.SocialLink>
                            <S.SocialLink
                                href={personalInfo.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                as={motion.a}
                                whileHover={{ y: -4 }}
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={24} aria-hidden="true" />
                            </S.SocialLink>
                            <S.SocialLink
                                href={personalInfo.social.email}
                                as={motion.a}
                                whileHover={{ y: -4 }}
                                aria-label="Email"
                            >
                                <Mail size={24} aria-hidden="true" />
                            </S.SocialLink>
                        </S.SocialLinks>
                    </S.TextContent>

                    <S.ImageWrapper as={motion.div} variants={fadeInUp}>
                        <S.ImageGlow aria-hidden="true" />
                        <S.ProfileImage
                            src={profilePicture}
                            alt={`Foto de perfil de ${personalInfo.name}`}
                            loading="eager"
                            width="400"
                            height="400"
                        />
                    </S.ImageWrapper>
                </S.Content>

                <S.ScrollIndicator
                    as={motion.div}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    aria-hidden="true"
                >
                    <ArrowDown size={24} />
                </S.ScrollIndicator>
            </S.Container>
        </S.HeroSection>
    );
};

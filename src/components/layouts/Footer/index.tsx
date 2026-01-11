import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, ArrowUp, Coffee } from "lucide-react";
import { personalInfo } from "../../../data/personal";
import * as S from "./style";

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const currentYear = new Date().getFullYear();

    return (
        <S.Footer id="contact">
            <S.Container>
                <S.FooterContent>
                    <S.FooterTop
                        as={motion.div}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <S.FooterBrand>
                            <S.BrandName>
                                Pablo<span className="accent">.</span>
                            </S.BrandName>
                            <S.BrandTagline>
                                {personalInfo.tagline}
                            </S.BrandTagline>
                        </S.FooterBrand>

                        <S.FooterLinks>
                            <S.FooterSection>
                                <S.FooterSectionTitle>
                                    Navegação
                                </S.FooterSectionTitle>
                                <S.FooterLinkList>
                                    <S.FooterLinkItem>
                                        <S.FooterButton
                                            onClick={() =>
                                                document
                                                    .getElementById("home")
                                                    ?.scrollIntoView({
                                                        behavior: "smooth",
                                                    })
                                            }
                                        >
                                            Início
                                        </S.FooterButton>
                                    </S.FooterLinkItem>
                                    <S.FooterLinkItem>
                                        <S.FooterButton
                                            onClick={() =>
                                                document
                                                    .getElementById("skills")
                                                    ?.scrollIntoView({
                                                        behavior: "smooth",
                                                    })
                                            }
                                        >
                                            Skills
                                        </S.FooterButton>
                                    </S.FooterLinkItem>
                                    <S.FooterLinkItem>
                                        <S.FooterButton
                                            onClick={() =>
                                                document
                                                    .getElementById("projects")
                                                    ?.scrollIntoView({
                                                        behavior: "smooth",
                                                    })
                                            }
                                        >
                                            Projetos
                                        </S.FooterButton>
                                    </S.FooterLinkItem>
                                </S.FooterLinkList>
                            </S.FooterSection>

                            <S.FooterSection>
                                <S.FooterSectionTitle>
                                    Contato
                                </S.FooterSectionTitle>
                                <S.FooterLinkList>
                                    <S.FooterLinkItem>
                                        <S.FooterLink
                                            href={personalInfo.social.email}
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        >
                                            Email
                                        </S.FooterLink>
                                    </S.FooterLinkItem>
                                    <S.FooterLinkItem>
                                        <S.FooterLink
                                            href={personalInfo.social.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            LinkedIn
                                        </S.FooterLink>
                                    </S.FooterLinkItem>
                                    <S.FooterLinkItem>
                                        <S.FooterLink
                                            href={personalInfo.social.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            GitHub
                                        </S.FooterLink>
                                    </S.FooterLinkItem>
                                </S.FooterLinkList>
                            </S.FooterSection>
                        </S.FooterLinks>

                        <S.SocialLinks>
                            <S.SocialLink
                                href={personalInfo.social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                as={motion.a}
                                whileHover={{ y: -4 }}
                                aria-label="GitHub"
                            >
                                <Github size={24} />
                            </S.SocialLink>
                            <S.SocialLink
                                href={personalInfo.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                as={motion.a}
                                whileHover={{ y: -4 }}
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={24} />
                            </S.SocialLink>
                            <S.SocialLink
                                href={personalInfo.social.email}
                                as={motion.a}
                                whileHover={{ y: -4 }}
                                aria-label="Email"
                            >
                                <Mail size={24} />
                            </S.SocialLink>
                        </S.SocialLinks>
                    </S.FooterTop>

                    <S.FooterDivider />

                    <S.FooterBottom>
                        <S.Copyright>
                            © {currentYear} Pablo Viana. Feito com{" "}
                            <Heart size={16} /> e muito <Coffee size={16} />
                        </S.Copyright>
                        <S.BackToTop
                            onClick={scrollToTop}
                            as={motion.button}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Voltar ao topo"
                        >
                            <ArrowUp size={20} />
                        </S.BackToTop>
                    </S.FooterBottom>
                </S.FooterContent>
            </S.Container>
        </S.Footer>
    );
};

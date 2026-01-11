import { useState, useEffect } from "react";
import { FaSquareGithub, FaLinkedinIn } from "react-icons/fa6";
import { Menu, X } from "lucide-react";
import { personalInfo } from "../../../data/personal";
import * as S from "./style";
import { ThemeToggle } from "../../features/ThemeToggle";

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <S.Header $isScrolled={isScrolled}>
            <S.Container>
                <S.Logo
                    onClick={() => scrollToSection("home")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span>Pablo</span>
                    <span className="accent">Viana</span>
                </S.Logo>

                <S.Nav $isOpen={isMobileMenuOpen}>
                    <S.NavList>
                        <li>
                            <S.NavLink onClick={() => scrollToSection("home")}>
                                Home
                            </S.NavLink>
                        </li>
                        <li>
                            <S.NavLink
                                onClick={() => scrollToSection("skills")}
                            >
                                Skills
                            </S.NavLink>
                        </li>
                        <li>
                            <S.NavLink
                                onClick={() => scrollToSection("projects")}
                            >
                                Projects
                            </S.NavLink>
                        </li>
                        <li>
                            <S.NavLink
                                onClick={() => scrollToSection("contact")}
                            >
                                Contact
                            </S.NavLink>
                        </li>
                    </S.NavList>
                </S.Nav>

                <S.Actions>
                    <S.SocialLinks>
                        <S.SocialLink
                            href={personalInfo.social.github}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="GitHub Profile"
                            title="GitHub Profile"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaSquareGithub />
                        </S.SocialLink>
                        <S.SocialLink
                            href={personalInfo.social.linkedin}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="LinkedIn Profile"
                            title="LinkedIn Profile"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaLinkedinIn />
                        </S.SocialLink>
                    </S.SocialLinks>

                    <ThemeToggle />

                    <S.MobileMenuButton
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                        whileTap={{ scale: 0.95 }}
                    >
                        {isMobileMenuOpen ? (
                            <X size={24} />
                        ) : (
                            <Menu size={24} />
                        )}
                    </S.MobileMenuButton>
                </S.Actions>
            </S.Container>
        </S.Header>
    );
};

import { FaSquareGithub, FaLinkedinIn } from "react-icons/fa6";
import * as S from './style'

export const Header = () => {
    return (
        <S.Header>
            <span>Pablito</span>
            <nav>
                <ul>
                    <li>
                        <a href="#">
                            <FaSquareGithub />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FaLinkedinIn />
                        </a>
                    </li>
                </ul>
            </nav>
            <button>Change mode</button>
        </S.Header>
    );
}
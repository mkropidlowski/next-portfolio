import Button from "components/atoms/Button";
import { FC, HTMLProps } from "react";

export interface Props {}

const NavBar: FC<Props & HTMLProps<HTMLDivElement>> = ({}) => {
    return (
        <nav>
            <ul>
                <li>
                    <Button>MENU</Button>
                </li>
                <li>
                    <Button>MENU</Button>
                </li>
                <li>
                    <Button>MENU</Button>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;

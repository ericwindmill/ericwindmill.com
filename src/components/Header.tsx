import * as React from "react";
import styled from "styled-components";
import MaterialButton from "./MaterialButton";
import {colors} from "../styles/variables";

const StyledHeader = styled.header`
  display:flex;
  justify-content: flex-end;
  background: ${colors.brand};
  padding: 10px;
  border-radius: 25px 25px 0 0;
`;

const Links = styled.div`
`;

interface HeaderProps {
  title?: string;
  toggleMenu: () => void;
}

class Header extends React.Component<HeaderProps> {
  private onClick = () => {
    this.props.toggleMenu();
  }

  public render(): React.ReactNode {
    return (
      <StyledHeader>
        <Links>
          <MaterialButton
            darkTheme={true}
            label={"menu"}
            trigger={this.onClick}
          ></MaterialButton>
        </Links>
      </StyledHeader>
    );
  }

}

export default Header;

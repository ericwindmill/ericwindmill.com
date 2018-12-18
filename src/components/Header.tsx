import * as React from "react";
import styled from "styled-components";
import { transparentize } from "polished";
import Link from "gatsby-link";

import { heights, dimensions, colors } from "../styles/variables";
// import { onEvent } from "../styles/mixins";
import Container from "./Container";

const StyledHeader = styled.header`
`;

const HeaderInner = styled(Container)`
`;

const Links = styled.div`
`;

const Title = styled.div`
`;

interface HeaderProps {
  title: string;
}

const Header: React.SFC<HeaderProps> = ({ title }) => (
  <StyledHeader>
    <HeaderInner>
      <Title>
        <Link to="/">{title}</Link>
      </Title>
      <Links>
        <Link to="/posts/my-library/">Library</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/portfolio">Portfolio</Link>
      </Links>
    </HeaderInner>
  </StyledHeader>
);

export default Header;

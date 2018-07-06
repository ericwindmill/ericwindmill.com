import * as React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

import Page from "../components/Page";
import Container from "../components/Container";
import { dimensions } from "../styles/variables";
import { media } from "../styles/mixins";

const StyledHeader = styled.div`
  h1,
  h2 {
    display: inline;
    line-height: ${dimensions.lineHeight.hero};
  }
`;

const StyledContent = styled.div`
  margin-top: 100px;

  ${media.sm`
    margin-top: 25px
  `};
`;

export default () => (
  <Page>
    <Container>
      <StyledHeader>
        <h1>Hi There.</h1>{" "}
        <h2>I'm Eric Windmill. Software Engineer, UI Designer, and Author.</h2>
      </StyledHeader>
      <StyledContent>
        <h3>Work</h3>
        <p>
          I've been designing and building web applications for 3 years. These
          days, I'm a Dart 🎯 developer at{" "}
          <a style={{ color: "#00b300" }} href="https://apptree.cloud">
            AppTree
          </a>, a PaaS company in Portland, Oregon. I'm also writing Flutter in
          Action for <a href="https://manning.com">Manning Publishing</a>. I
          also write articles <Link to={"/articles"}>on this site</Link> and
          sometimes on <a href="https://csstricks.com">CSS Tricks</a>.
        </p>
        <h3>Extra Curricular</h3>
        <p>
          On my own time, I mentor for{" "}
          <a href="https://askadev.org">Ask-a-dev </a> and contribute to
          open-source projects like <a href="">GatsbyJS</a>,{" "}
          <a href="">flutter_map_view plugin</a>, and the{" "}
          <a href="">flutter_calendar plugin</a>.
        </p>
        <h3>Et Cetera</h3>
        <p>
          In the past, I got my <a href="">Sommelier certification</a>. I've
          also spent time working in Bourbon distilleries in my hometown of
          Lousiville, KY. I spend a lot of energy learning about booze -- its
          the most interesting food around.
        </p>
        <p>
          I like to read and write a lot. I'm a big fan of stand-up. Ever since
          I can remember, <a href="">I've devoured music</a>.
        </p>
      </StyledContent>
    </Container>
  </Page>
);

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
          </a>, a PaaS company in Portland, Oregon. I'm writing Flutter in
          Action for <a href="https://www.manning.com/">Manning Publishing</a>.
          I also write articles <Link to={"/articles"}>on this site</Link> and
          sometimes on{" "}
          <a href="https://css-tricks.com/using-es2017-async-functions/">
            CSS Tricks
          </a>.
        </p>
        <p>
          Finally, I write and maintain a few sites about my favorite
          programming technologies, notably{" "}
          <a href="https://flutterbyexample.com">Flutter By Example</a>. See the
          rest on my <Link to="/portfolio">portfolio page</Link>.
        </p>
        <h3>Extra Curricular</h3>
        <p>
          On my own time, I mentor for{" "}
          <a href="https://askadev.org/">Ask-a-dev </a> and contribute to
          open-source projects like{" "}
          <a href="https://www.gatsbyjs.org/">GatsbyJS</a>,{" "}
          <a href="https://pub.dartlang.org/packages/map_view">
            Flutter map_view plugin
          </a>, and the{" "}
          <a href="https://pub.dartlang.org/packages/flutter_calendar">
            flutter_calendar plugin
          </a>.
        </p>
        <h3>Et Cetera</h3>
        <p>
          In the past, I got my{" "}
          <a href="https://www.mastersommeliers.org/">
            Sommelier certification
          </a>. I've also spent time working in Bourbon distilleries in my
          hometown of Lousiville, KY. I spend a lot of energy learning about
          booze -- its the most interesting food around.
        </p>
        <p>
          I like to <Link to="/posts/my-library">read</Link> and{" "}
          <Link to="/articles">write</Link>. I'm a big fan of stand-up. Ever
          since I can remember,{" "}
          <a href="https://www.youtube.com/watch?v=JnAzDRaOD-k">
            I've devoured music
          </a>.
        </p>
      </StyledContent>
    </Container>
  </Page>
);

import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import HomeGridBox from "../components/HomeGridBox";
import PageHeader from "../components/PageHeader";
import config from "../../data/SiteConfig";
import {Helmet} from "react-helmet";

export default class ResumePage extends React.Component {
  render() {
    return (
      <ResumePageContainer>
        <Helmet title={`Resume | ${config.siteTitle}`}/>
        <PageHeader>
          <h1>Resumé</h1>
        </PageHeader>
        <ResumeContentContainer>
          <h3>Work</h3>
          <p>
            I've been deisgning and building web applications for 3 years,
            focused primarily on building beautiful web experiences in
            JavaScript world, but now I have an infatuation with{" "}
            <a href="https://www.dartlang.org/">Dart</a>. I also like to{" "}
            <Link to={"/stream"}>write about development,</Link> and sometimes I contribute to{" "}
            <a href="https://css-tricks.com/using-es2017-async-functions/">
              CSS Tricks.
            </a>
          </p>
          <p>
            I currently work at enterprise PaaS company AppTree in Portland, OR.
            I help design and build web and mobile clients written in Dart,
            AngularDart and Flutter.
          </p>
          <h3>Extra-curricular</h3>
          <p>
            On my own time, I like to help new engineers who're switching
            careers. I mostly work on that through my site{" "}
            <a href="https://nuggets.cloud">Nuggets</a>. I also mentor in the
            Portland tech community at various meetups, most notably for my
            friend's organization <a href="https://askadev.org/">Ask-a-dev</a>.
          </p>
          <h3>Projects and Open Source</h3>
          <p>It's a great joy of the software world to contribute back to the communities that lift me up. I'm lucky
            enough to work at a company that open sources many of our internal plugins. These are some of the tools I've
            been able to contibure to:</p>
          <ul className={'open-source-list'}>
            <li><a href="https://gatsbyjs.org">GatsbyJS</a></li>
            <li><a href="https://pub.dartlang.org/packages/flutter_calendar">flutter_calendar Plugin</a></li>
            <li><a href="https://pub.dartlang.org/packages/date_utils">Dart date_utils library</a></li>
            <li><a href="https://pub.dartlang.org/packages/map_view">Flutter map_view plugin</a></li>
          </ul>
          <h3>Et Cetera</h3>
          <p>
            In my younger years, I got my Sommelier certification. I've also spent time working in Bourbon
            distilleries
            in my hometown of Lousiville, KY. I spend a lot of energy learning about booze -- its the most interesting
            food around.
          </p>
          <p>
            I like to <Link to={"/my-library"}>read</Link> and write a lot. I'm a big fan of
            stand-up.{" "} Ever since I can remember, I've devoured music.
          </p>
        </ResumeContentContainer>
      </ResumePageContainer>
    );
  }
}

const ResumePageContainer = styled.div`
  max-width: 1100px;
  margin: 10px;
  `;

const ResumeContentContainer = styled.div`
  margin: 0 50px;

  @media screen and (max-width: 900px) {
    margin: 0 10px;
  }
  
  .open-source-list {
    list-style: disc;
  }
  `;

import React from "react";
import styled from "styled-components";
import HorizontalScrollable from "../HorizontalScrollable";

export default class April2018Favorites extends React.Component {
  render() {
    return (
      <April2018FavoritesContainer>
        <ul className="links">
          <li>
            Shameless plug artcile:{" "}
            <a
              href="https://medium.com/@matthew.smith_66715/why-we-chose-flutter-and-how-its-changed-our-company-for-the-better-271ddd25da60">
              {" "}
              An article from my CTO about why Flutter is awesome.
            </a>
          </li>
          <li>
            You should definitely watch:{" "}
            <a href="https://www.hbo.com/documentaries/the-zen-diaries-of-garry-shandling">
              The Zen Diaries of Gary Shandler
            </a>
          </li>
          <li>
            Favorite Ridiculous Website ('cause CSS):{" "}
            <a href="https://dev.to/">Space Needle website</a>
          </li>
          <li>
            Backup Ridiculous Website ('cause speed):{" "}
            <a href="https://dev.to/">Dev.to</a>
          </li>
          <li>
            Favorite YouTube Video (and live-on-TV music perforamce):{" "}
            <a href="https://www.youtube.com/watch?v=JnAzDRaOD-k">
              My Morning Jacket perform One Big Holiday - Late Night With Conan
              O Brien, 2003{" "}
            </a>
          </li>
          <li>
            Favorite CSS Color:{" "}
            <span
              style={{
                background: "mistyrose",
                padding: "3px 8px",
                borderRadius: "10px",
              }}
            >
              mistyrose
            </span>
          </li>
        </ul>
        <Divider/>
        <h2>Music in 2018</h2>
        <HorizontalScrollable>
          <img
            src="https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/83/1c/87/831c871d-71f1-2175-2e0d-79f1139eb4b1/UMG_cvrart_00602567350248_01_RGB72_3000x3000_18UMGIM00001.jpg/268x0w.jpg"
            alt=""
            className="album-cover"
          />
          <img
            src="https://f4.bcbits.com/img/a3837558328_10.jpg"
            alt=""
            className="album-cover"
          />
          <img
            src="https://media.pitchfork.com/photos/5a81f52f000dc822199a69a8/1:1/w_320/ravynlenae.jpg"
            alt=""
            className="album-cover"
          />
          <img
            src="https://img.apmcdn.org/049f417f358216d883f8dc8e6461172cc1670b5d/square/8a6770-20180209-brandi-carlile-by-the-way-i-forgive-you.jpg"
            alt=""
            className="album-cover"
          />
          <img
            src="https://static.spin.com/files/2018/02/Screen-Shot-2018-02-28-at-4.04.36-PM-1519851989-640x644.png"
            alt=""
            className="album-cover"
          />
        </HorizontalScrollable>
        <Divider/>
        <h2>Podcast Episodes</h2>
        <ul className="podcasts">
          <li>
            <a
              href="http://www.talkhouse.com/matt-berninger-national-talks-conor-oberst-bright-eyes-desaparecidos-talkhouse-music-podcast/">
              <img
                src="https://d1eedt7bo0oujw.cloudfront.net/art?s=20e7b8cd050b19372fdc7bc2a9aab9bbd17b8c8096cbc8b1dc9b32bcf0a3c85d&w=840&u=http%3A%2F%2Fstatic.libsyn.com%2Fp%2Fassets%2Fb%2F3%2F5%2Fc%2Fb35cb9a29df50c9f%2FTH_Podcast_Art_1500.jpg"
                alt=""/>
            </a>
            <div>
              <p className="podcast-meta">
                Talkhouse Music Podcast
              </p>
              <p className="episode-title">Conor Oberst (Bright Eyes) and Matt Berninger (The National) </p>
              <p className="episode-highlight">
                Two of the worlds greatest lyricists discuss Leonard Cohen, writing songs, and the Great Gatsby.
              </p>
            </div>
          </li>
          <li>
            <a href="https://nerdist.com/you-made-it-weird-299-garry-shandling/">
              <img
                src="http://is1.mzstatic.com/image/thumb/Music71/v4/53/f9/8d/53f98d9e-dc6a-1c7c-a1de-a3ac57a4e435/source/1200x630bb.jpg"
                alt=""
              /></a>
            <div>
              <p className="podcast-meta">
                You Made It Weird with Pete Holmes #299
              </p>
              <p className="episode-title">With Gary Shandling</p>
              <p className="episode-highlight">
                A good man is someone gives more love than they were given. -
                Gary quoting someone he can't recall.
              </p>
            </div>
          </li>
        </ul>
      </April2018FavoritesContainer>
    );
  }
}

const Divider = styled.div`
  border-top: 1px solid black;
  width: 150px;
  margin-top: 50px;
  margin-bottom: 15px;
`;

const April2018FavoritesContainer = styled.div`
  .links {
    list-style: initial;
    li {
      margin-bottom: 10px;
      margin-left: 25px;
    }
  }

  .albums {
    display: flex;
    flex-wrap: nowrap;
    overflow: auto;
  }
  .album-cover {
    width: 200px;
    height: 200px;
    flex: 0 0 auto;
  }

  .podcasts {  
    @media screen and (max-width: 900px) {
      li {
      flex-flow: column;
      }
    }
      @media screen and (min-width: 900px) {
      li {
      flex-flow: row;
      }
    }
  
    li {
      display: flex;
      margin-bottom: 3rem;
      img {
        width: 200px;
        height: 200px;
        flex: 0 0 auto;
      }
      div {
        margin-left: 10px;
      }
      
      div > p {
        margin: 0;
      }
      
      .podcast-meta {
        font-weight: 600;
        font-size: 2.4rem;
      }
      
      .episode-title {
        font-weight: 600;
      }
    }
  }
`;

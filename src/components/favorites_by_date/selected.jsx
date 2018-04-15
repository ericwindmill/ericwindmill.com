import React from "react";
import styled from "styled-components";
import Link from 'gatsby-link';
import AlbumCover from "./AlbumCover";
import HorizontalScrollable from "../HorizontalScrollable";
import PodcastContainer from "./PodcastWithDescription";

export default class CurrentSelectionsFavorites extends React.Component {
  render() {
    return (
      <CurrentSelectionsFavoritesContainer>
        <div className="explanation">
          <p>I've always loved art and media. I've always devoured music. I've always been delusional enough to think
            that anyone cares.</p>.
          <p>This is my way of finding my tribe. This is me sending an S.O.S. over the airwaves, hoping to hear
            something back, from someone just like me.</p>
          <p>
            <a target='_blank' href="https://twitter.com/ericwindmill">I love recommendations. Don't be shy.</a>
          </p>
        </div>
        <Divider/>
        <h2>A short list of some perfect albums:</h2>
        <HorizontalScrollable>
          <AlbumCover
            imgUrl={'http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_300/v1523811627/portfolio_site/yankeehotelfoxtrot.jpg'}
            albumTitle={"Yankee Hotel Foxtrot"}
            artist={"Wilco"}
          />
          <AlbumCover
            imgUrl={'http://monstersoffolk.com/wp-content/uploads/2009/08/MOF-minix500.jpg'}
            albumTitle={"Monsters of Folk"}
            artist={"Monsters of Folk"}
          />
          <AlbumCover
            imgUrl={'http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_300/v1523811627/portfolio_site/iststillmoves.jpg'}
            albumTitle={"It Still Moves"}
            artist={"My Morning Jacket"}
          />
          <AlbumCover
            imgUrl={'http://res.cloudinary.com/ericwindmill/image/upload/v1523811627/portfolio_site/lastwaltz.jpg'}
            albumTitle={"The Last Waltz"}
            artist={"The Band"}
          />
          <AlbumCover
            imgUrl={'http://res.cloudinary.com/ericwindmill/image/upload/c_scale,h_300,w_300/v1523811628/portfolio_site/tpab.jpg'}
            albumTitle={"To Pimp a Butterfly"}
            artist={"Kendrick Lamar"}
          />
          <AlbumCover
            imgUrl={'http://res.cloudinary.com/ericwindmill/image/upload/c_scale,h_300,w_300/v1523811628/portfolio_site/theclash.jpg'}
            albumTitle={"Combat Rock"}
            artist={"The Clash"}
          />
          <AlbumCover
            imgUrl={'http://res.cloudinary.com/ericwindmill/image/upload/v1523811627/portfolio_site/220px-Alleyezonme.jpg'}
            albumTitle={"All Eyez On Me"}
            artist={"Tupac"}
          />
          <AlbumCover
            imgUrl={'http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_300/v1523811627/portfolio_site/purplerain.jpg'}
            albumTitle={"Purple Rain"}
            artist={"Prince"}
          />
          <AlbumCover
            imgUrl={'http://res.cloudinary.com/ericwindmill/image/upload/v1523811626/portfolio_site/imwideawake.jpg'}
            albumTitle={"I'm Wide Awake, It's Morning"}
            artist={"Bright Eyes"}
          />
          <AlbumCover
            imgUrl={'http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_300/v1523811627/portfolio_site/savestheday.jpg'}
            albumTitle={"Through Being Cool"}
            artist={"Saves the Day"}
          />
          <AlbumCover
            imgUrl={'http://res.cloudinary.com/ericwindmill/image/upload/v1523811626/portfolio_site/mliw.jpg'}
            albumTitle={"Marshalltown"}
            artist={"Modern Life is War"}
          />
          <AlbumCover
            imgUrl={'http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_300/v1523811626/portfolio_site/loaded.jpg'}
            albumTitle={"Loaded"}
            artist={"Velvet Underground"}
          />
          <AlbumCover
            imgUrl={'http://res.cloudinary.com/ericwindmill/image/upload/v1523811626/portfolio_site/ohia.jpg'}
            albumTitle={"Electric Magnolia Company"}
            artist={"Songs: Ohia"}
          />
          <AlbumCover
            imgUrl={'http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_300/v1523811626/portfolio_site/yeild.jpg'}
            albumTitle={"Yeild"}
            artist={"Pearl Jam"}
          />
          <AlbumCover
            imgUrl={'http://res.cloudinary.com/ericwindmill/image/upload/v1523811626/portfolio_site/lucero.jpg'}
            albumTitle={"Rebels, Rogues, and Sworn Brothers"}
            artist={"Lucero"}
          />
        </HorizontalScrollable>
        <Divider/>
        <div className="books">
          <h2>Books To Live Your Life By:</h2>
          <img
            src="http://res.cloudinary.com/ericwindmill/image/upload/v1523752339/portfolio_site/marcusaurelius_meditations_2.png"
            alt="meditations by marcus aurelius"/>
          <img
            src="http://res.cloudinary.com/ericwindmill/image/upload/v1523752357/portfolio_site/Tiny_Beautiful-330.jpg"
            alt="tiny beautiful things by cheryl strayed"/>
          <Link to={'/my-library'}>A comprehensive list of my favorite books.</Link>
        </div>
        <Divider/>
        <h3>A Musical Performance That'll Change You:</h3>
        <p>My Morning Jacket in 2004 absolutely killing it on Conan O' Brien.</p>
        <div className="video">
          <iframe width="560" height="315"
                  src="https://www.youtube.com/embed/JnAzDRaOD-k?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0"
                  allow="autoplay; encrypted-media" allowfullscreen></iframe>

        </div>
        <Divider/>
        <h3>My Favorite CSS Color</h3>
        <div className="mistyrose">mistyrose</div>
        <Divider/>
        <h3>Some Special Podcasts</h3>
        <div className="podcasts">
          <PodcastContainer
            link={'https://nerdist.com/you-made-it-weird-299-garry-shandling/'}
            imgUrl={'http://is1.mzstatic.com/image/thumb/Music71/v4/53/f9/8d/53f98d9e-dc6a-1c7c-a1de-a3ac57a4e435/source/1200x630bb.jpg'}
            title={'You Made It Weird with Pete Holmes'}
            highlight={'Comedian Pete Holmes interviews artists (mostly comedians) about life, work, philosophy and' +
            ' spirtuality. I believe Pete Holmes is the most skilled interviewer in Podcast Land today. I appreciate' +
            ' his disposition and philosophies about life, despite disagreeing with a majorty of them.'}
            episodeTitle={'Favorite Episode: #299 - Gary Shandling'}
          />
          <PodcastContainer
            imgUrl={'https://d1eedt7bo0oujw.cloudfront.net/art?s=20e7b8cd050b19372fdc7bc2a9aab9bbd17b8c8096cbc8b1dc9b32bcf0a3c85d&w=840&u=http%3A%2F%2Fstatic.libsyn.com%2Fp%2Fassets%2Fb%2F3%2F5%2Fc%2Fb35cb9a29df50c9f%2FTH_Podcast_Art_1500.jpg'}
            link={'http://www.talkhouse.com/matt-berninger-national-talks-conor-oberst-bright-eyes-desaparecidos-talkhouse-music-podcast/'}
            title={'Talkhouse Film and Music Podcast'}
            episodeTitle={'Favorite Episode: Conor Oberst (Bright Eyes) talks with Matt Berninger (The National)'}
            highlight={'Artists...speak one-on-one with their peers via the Talkhouse Podcast, and offer' +
            ' listeners unique insight into creative work of all genres and generations.'}
          />
          <PodcastContainer
            imgUrl={'https://www.dancarlin.com/wp-content/uploads/2014/12/HH-54-Dan-Carlin.jpg'}
            link={'https://www.dancarlin.com/hardcore-history-series/'}
            title={'Hardcore History'}
            episodeTitle={'Favorite Episode: Blueprint For Armageddon (WW1)'}
            highlight={"Some 'episodes' are over 20 hours long. That's a full college history course  for free. And" +
            " ten times more entertaining. I learned more about WW1 from this series than I did from 20 years of" +
            " schoolin'."}
          />
          <PodcastContainer
            imgUrl={'https://secureimg.stitcher.com/feedimagesplain328/90889.jpg'}
            link={'http://letsknowthings.com/'}
            highlight={"Learn a lot about seemingly random -- but not trivial -- topics. I'm a big fan of Colin" +
            " Wrights. He's a perfect teacher for two reasons: He's incredibly smart. He can explain complex topics" +
            " in a way that anyone can digest. "}
            title={"Let's Know Things"}
            episodeTitle={"National Parks"}
          />
        </div>
        <Divider/>
        <h3>The Greatest Scene in TV/Film History:</h3>
        <img
          src="https://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_600/v1523753691/portfolio_site/omar.png"
          alt="omar from the wire"/>
      </CurrentSelectionsFavoritesContainer>
    )
      ;
  }
}


const CurrentSelectionsFavoritesContainer = styled.div`
  .explanation {
    max-width: 600px;
  }
  
  .mistyrose {
    height: 200px;
    width: 500px;
    background: mistyrose;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(0,0,0, .1);
    font-size: 6rem;
  }
  
`;

const Divider = styled.div`
  border-top: 1px solid black;
  width: 150px;
  margin-top: 50px;
  margin-bottom: 15px;
  `;


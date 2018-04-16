import React from "react";
import styled from "styled-components";
import HorizontalScrollable from "../HorizontalScrollable";
import AlbumCover from "./AlbumCover";
import PodcastContainer from "./PodcastWithDescription";

export default class December2017Favorites extends React.Component {

  render() {
    return (
      <December2017FavoritesContainer>
        <h2>Top 10 Albums:</h2>
        <p>2017 was one the best years for music in my lifetime that I can remember. </p>
        <HorizontalScrollable>
          <AlbumCover
            imgUrl={'http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_300/v1523917929/portfolio_site/lorde-melodrama.jpg'}
            albumTitle={"Melodrama"}
            artist={"Lorde"}
          />
          <AlbumCover
            imgUrl={'http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_300/v1523917930/portfolio_site/salutations.jpg'}
            albumTitle={"Salutations"}
            artist={"Conor Oberst"}
          />
          <AlbumCover
            imgUrl={'http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_300/v1523917929/portfolio_site/thenational_sleepwellbeast.jpg'}
            albumTitle={"Sleep Well Beast"}
            artist={"The National"}
          />
          <AlbumCover
            imgUrl={'http://res.cloudinary.com/ericwindmill/image/upload/v1523917929/portfolio_site/damn.jpg'}
            albumTitle={"DAMN"}
            artist={"Kendrick Lamar"}
          />
          <AlbumCover
            imgUrl={'http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_300/v1523917929/portfolio_site/strangerinthealps.jpg'}
            albumTitle={"Strangers in the Alps"}
            artist={"Phoebe Bridgers"}
          />
          <AlbumCover
            imgUrl={'http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_300/v1523917936/portfolio_site/aftertheparty.jpg'}
            albumTitle={"After the Party"}
            artist={"The Menzingers"}
          />
          <AlbumCover
            imgUrl={'http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_300/v1523917930/portfolio_site/destroyer_ken.jpg'}
            albumTitle={"ken"}
            artist={"Destroyer"}
          />
          <AlbumCover
            imgUrl={'http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_300/v1523917929/portfolio_site/bigbadluv.jpg'}
            albumTitle={"Big Bad Luv"}
            artist={"John Moreland"}
          />
          <AlbumCover
            imgUrl={'http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_300/v1523917929/portfolio_site/soitis.jpg'}
            albumTitle={'So It Is'}
            artist={"Preservation Hall Jazz Band"}
          />
          <AlbumCover
            imgUrl={'http://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_300/v1523917929/portfolio_site/white_reaper.jpg'}
            albumTitle={"The Worlds Greatest American Band"}
            artist={"White Reaper"}
          />
        </HorizontalScrollable>
        <Divider />
        <h2>Favorite Podcast Episodes</h2>
        <div className="podcasts">
          <PodcastContainer
            link={''}
            imgUrl={'https://is5-ssl.mzstatic.com/image/thumb/Music71/v4/de/23/77/de23775a-9b84-14dd-9a98-db025427c80f/source/600x600bb.jpg'}
            title={'The Dollop'}
            highlight={'Comedian Dave Anthony explains something from history to Comedian Gareth Reynolds whos clueless.'}
            episodeTitle={'Favorite Episode: Uber'}
          />
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
            imgUrl={'https://www.dancarlin.com/wp-content/uploads/2014/12/HH-54-Dan-Carlin.jpg'}
            link={'https://www.dancarlin.com/hardcore-history-series/'}
            title={'Hardcore History'}
            episodeTitle={'Favorite Episode: Blueprint For Armageddon (WW1)'}
            highlight={"Some 'episodes' are over 20 hours long. That's a full college history course  for free. And" +
            " ten times more entertaining. I learned more about WW1 from this series than I did from 20 years of" +
            " schoolin'."}
          />
        </div>

      </December2017FavoritesContainer>
    );
  }
}

const December2017FavoritesContainer = styled.div`

`

const Divider = styled.div`
  border-top: 1px solid black;
  width: 150px;
  margin-top: 50px;
  margin-bottom: 15px;
  `;
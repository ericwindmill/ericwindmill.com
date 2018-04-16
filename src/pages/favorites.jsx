import React from "react";
import styled from "styled-components";
import PageHeader from "../components/PageHeader";
import HomeGridBox from "../components/HomeGridBox";
import April2018Favorites from "../components/favorites_by_date/apr_2018";
import December2017Favorites from "../components/favorites_by_date/dec_2017";
import CurrentSelectionsFavorites from "../components/favorites_by_date/selected";

export default class FavoritesPage extends React.Component {
  constructor() {
    super();
    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleTabChange(e) {
    const nextActiveTabId = e.currentTarget.id;
    const currentActiveTabLink = document.querySelector('.active-tab-link');
    const currentActiveTab = document.querySelector(`#${currentActiveTabLink.id}-tab`);
    const nextActiveTabLink = document.querySelector(`#${nextActiveTabId}`);
    const nextActiveTab = document.querySelector(`#${nextActiveTabId}-tab`);

    currentActiveTabLink.classList.remove('active-tab-link');
    currentActiveTab.style.display = 'none';
    nextActiveTabLink.classList.add('active-tab-link');
    nextActiveTab.style.display = 'initial';
  }

  render() {
    return (
      <FavoritesPageContainer>
        <PageHeader>
          <h1>
            My Favorite Things. {' '}
            <b>Bookmarks, articles, musics, and other frivolous details.</b>
          </h1>
        </PageHeader>
        <PageContentContainer>
          <SnapshotTabsContainer>

            <ul className={'date-tabs'}>
              <li className={'tab-link active-tab-link'} id={'currated'} onClick={this.handleTabChange}>
                All Times
              </li>
              <li className={'tab-link'} id={'april2018'} onClick={this.handleTabChange}>2018 (So far)</li>
              <li className={'tab-link'} onClick={this.handleTabChange} id={'december2017'}>2017</li>
            </ul>
            <div className="favorites-tab" id={'currated-tab'}>
              <CurrentSelectionsFavorites/>
            </div>
            <div className="favorites-tab" id={'april2018-tab'}>
              <April2018Favorites/>
            </div>
            <div className="favorites-tab" id={'december2017-tab'}>
              <December2017Favorites/>
            </div>
          </SnapshotTabsContainer>
        </PageContentContainer>
      </FavoritesPageContainer>
    );
  }
}

const FavoritesPageContainer = styled.div`
  max-width: 1100px;
  margin: 10px 10px 100px;
`;

const SnapshotTabsContainer = styled.div`
  

  .date-tabs {
    width: 500px;
    display: flex;
    margin-bottom: 100px;
  }
  
  li.tab-link, h3.tab-link {
    display: flex;
    flex-flow: column;
    justify-content: center;
    height: 40px;
    margin: 0 10px 0 0;
    border-radius: 5px;
    padding: 0 10px;
    transition: all 300ms ease-out;
    
    --link-blue: rgba(41, 99, 255, 1);
    --link-blue-o-1: rgba(41, 99, 255, 0.1);
    --link-blue-o-2: rgba(41, 99, 255, 0.2);
    --link-blue-o-3: rgba(41, 99, 255, 0.3);
    
    :hover {
      background: var(--link-blue-o-3);
      cursor: pointer;
    }
    
    
    &.active-tab-link {
      background: rgba(41, 99, 255, 1);
      color: white;
      box-shadow: 0 2px 2px 0 var(--link-blue-o-2),
        0 3px 1px 2px var(--link-blue-o-1), -2px 1px 1px 0 var(--link-blue-o-1);
      :hover {
        background: rgba(41, 99, 255, 1);
        color: white;
      }
    }
   }
   
     .favorites-tab {
      display: none;
    }
    
    #currated-tab {
      display: initial;
    }
`

const PageContentContainer = styled.main`
  // Layout
  margin: 0 50px;
  
  @media screen and (max-width: 600px) {
    margin: 0 10px;
  }
  
  // Style
  .tldr-list {
    list-style: disc;
    li {margin-right: 10px;}
  }
  
  .box {
    display: flex;
  }
`;

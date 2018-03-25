import React, {Component} from 'react'
import styled from 'styled-components'
import NuggetCard from './NuggetCard'

class ProjectListing extends Component {
  buildProjectCards() {
    const cards = new Array(this.props.postEdges.length)
    this.props.postEdges.forEach((post, i) => {
      cards[post.node.frontmatter.order] = (
        <NuggetCard
          arrangement={i % 2 === 1 ? 'leftArrangement' : 'rightArrangement'}
          title={post.node.frontmatter.title}
          image={post.node.frontmatter.image}
          description={post.node.frontmatter.description}
          externalUrl={post.node.frontmatter.externalUrl}
        />
      )
    })
    return cards
  }

  render() {
    return (
      <NuggetListingContainer>
        {this.buildProjectCards()}
      </NuggetListingContainer>
    )
  }
}

export default ProjectListing

const NuggetListingContainer = styled.div``

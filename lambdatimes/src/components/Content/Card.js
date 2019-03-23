import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyleCard = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;
`
const Headline = styled.div`
font-size: 25px;
font-family: Didot, serif;
`

const AuthorContainer = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;
`
const ImageContainer = styled.div`
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;
`
const Image = styled.img`
width: 40px;
`

const Author = styled.span`
  padding-left: 10px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`

const Card = props => {
  return (
    <StyleCard>
      <Headline>{props.card.headline}</Headline>
      <AuthorContainer>
        <ImageContainer>
          <Image src={props.card.img /* image source goes here */} />
        </ImageContainer>
        <Author>By {props.card.author}</Author>
      </AuthorContainer>
    </StyleCard>
  );
};

// Make sure to include PropTypes.
Card.PropTypes ={
  card: PropTypes.shape({
    headline: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  })
}
export default Card;

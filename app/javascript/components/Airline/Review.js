import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  color: #ff0000;
`

const Card = styled.div`
  border-radius: 4px;
  border: 1px solid #E6E6E6;
  padding: 20px;
  margin: 0px 0px 20px 0px;
  width: 80%;
`
const Title = styled.div`
  padding: 20px 0px;
  font-weight: bold;
`
const Description = styled.div`
  padding: 0 0 20px 0;
`
const Rating = styled.div`

`

const Review = (props) => {
  const total = props.reviews.length

  return (
    <Wrapper>
      <div className="totalReviews">{total} 人のユーザーが評価しています</div>
      <Card>
        <Title>
          {props.title}
        </Title>
        <Description>
          {props.description}
        </Description>
        <div className="review-rating">
          {props.score}
        </div>
      </Card>
    </Wrapper>
  )
}

export default Review

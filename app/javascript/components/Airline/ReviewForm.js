import React, {Fragment} from 'react'
import styled from 'styled-components'
import Gray from './Stars/Gray'
import Hover from './Stars/Hover'
import Selected from './Stars/Selected'

const RatingContainer = styled.div`
  text-align: center;
  boder-radius: 4px;
  font-size: 18px;
  padding: 40px 0 10px 0;
  border: 1px solid #e6e6e6;
  background: #fff;
`

const RatingBox = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  positon: relative;

  input {
    display: none;
  }

  label {
    cursor: pointer;
    width: 40px;
    height: 40px;
    background-image: url("data:image/svg+xml;charset=UTF-8,${Gray}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 70%;
  }

  input:checked ~ label,
  input:checked ~ label ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8,${Selected}");
  }

  input:not(:checked) ~ label:hover,
  input:not(checked) ~ label:hover ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8,${Hover}");
  }
`
const RatingTitle = styled.div`

`

const ReviewForm = (props) => {

  const ratingOptions = [5,4,3,2,1].map( (score, index) => {
    return (
      <Fragment>
        <input type="radio" value={score} name="rating" onChange={() => console.log('selected:', score)} id={`rating-${score}`} />
        <label></label>
      </Fragment>
    )
  })

  return (
    <div className="wrapper">
      <form onSubmit={props.handleSubmit}>
        <div> {props.attributes.name}の評価をしてみましょう</div>
        <div className="field">
          <input onChange={props.handleChange} value={props.review.title} type="text" name="title" placeholder="Review Title" />
        </div>
        <div className="field">
          <input onChange={props.handleChange} value={props.review.description} type="text" name="description" placeholder="Review Description" />
        </div>
        <div className="field">
          <RatingContainer>
            <div className="rating-title-text">評価点を付けてみよう</div>
            <RatingBox>
              {ratingOptions}
            </RatingBox>
          </RatingContainer>
        </div>
        <button type="submit">評価する</button>
      </form>
    </div>
  )
}

export default ReviewForm

import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.div`
  border: 1px solid #efefef;
  background: #fff;
  font-family: sans-serif;
`
const AirlineLogo = styled.div`
  height: 50px;
`
const AirlineName = styled.div`
  padding: 20px;
`
const LinkWrapper = styled.div`
  margin: 20px 0;

  a {
    color: #fff;
    background: #71b406;
    border-radius: 4px;
    padding: 10px 30px;
    cursor: pointer;
    border-radius: 3px;
    border: 1px solid #71b406;
    text-align: center;
    line-height: 20px;
    min-height: 7px;
    margin: 7px;
    font-weight: 600;
    text-decoration: none;
  }
`

const Airline = (props) => {
  const {name, image_url, slug} = props.attributes

  return (
    <Card>
      <AirlineLogo>
        <img src={image_url} alt={name} width="50" />
      </AirlineLogo>
      <AirlineName>
        {name}
      </AirlineName>
      <LinkWrapper>
        <Link to={"/" + slug}> 投稿を見る </Link>
      </LinkWrapper>
    </Card>
  )
}

export default Airline

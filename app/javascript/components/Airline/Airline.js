import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import Header from './Header'
import Review from './Review'

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
const Column = styled.div`
  background: #fff;
  height: 100vh;
  overflow: scroll;

  &:last-child {
    background: #000;
  }
`

const Main = styled.div`
  padding-left: 50px;
`

const Airline = (props) => {
  const [airline, setAirline] = useState({})
  const [review, setReview] = useState({})
  const [loaded, setLoaded] = useState(false)

  useEffect( () => {
    const slug = props.match.params.slug
    const url = `/api/v1/airlines/${slug}`

    axios.get(url)
    .then( (resp) => {
      console.log(resp)
      setAirline(resp.data)
      setLoaded(true)
    })
    .catch( resp => console.log(resp) )
  }, [])

  return (
    <Wrapper>
      <Column>
        <Main>
          {
            loaded &&
            <Header attributes={airline.data.attributes} />
          }
          <Review>
            [reviews表示]
          </Review>
        </Main>
      </Column>
      <Column>
        [reviewの新規投稿フォーム]
      </Column>
    </Wrapper>
  )
}

export default Airline

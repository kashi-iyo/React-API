import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Airline from './Airline'
import styled from 'styled-components'

const Home = styled.div`
  text-align: center;

  h3{
    font-size: 42px;
  }
`
const Subheader = styled.p`
  font-weight: 300;
  font-size: 20px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2em;
  width: 100%;
  padding: 20px;

  > div {
    background: #fff;
    border-radius: 5px;
    padding: 20px;
  }
`

const Airlines = () => {
  const [airlines, setAirlines] = useState([])

  useEffect(() => {
    axios.get('/api/v1/airlines.json')
    .then( resp => { setAirlines(resp.data.data) })
    .catch( resp => { console.log(resp) })
  }, [])

  const grid = airlines.map( (airline, index) => {
    return (
      <Airline
      key={index}
      attributes={airline.attributes}
      />
    )
  })

  return (
    <Home>
      <div className="header">
        <h3> Airline一覧 </h3>
        <Subheader>自由に投稿してください</Subheader>
      </div>
      <Grid>
        {grid}
      </Grid>
    </Home>
  )
}

export default Airlines

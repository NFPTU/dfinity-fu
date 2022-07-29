import React from 'react'
import GameHeader from '../../game-header'
import { Container } from './game-layout-header.elements'

function GameLayoutHeader({ children }) {
  return (
    <Container>
    <GameHeader />
    { children }
    </Container>
  )
}

export default GameLayoutHeader
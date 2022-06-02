import React from 'react'
import GameNavbar from '../../game-navbar'
import { Container } from './game-layout.elements'

function GameLayout({ children }) {
  return (
    <Container>
    <GameNavbar />
    { children }
    </Container>
  )
}

export default GameLayout
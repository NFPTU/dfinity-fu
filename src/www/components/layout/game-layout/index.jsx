import React from 'react'
import GameNavbar from '../../game-navbar'
import GameFooter from '../../game-footer'
import { Container } from './game-layout.elements'

function GameLayout({ children }) {
  return (
    <Container>
    <GameNavbar />
    { children }
    <GameFooter />
    </Container>
  )
}

export default GameLayout
import React from 'react'
import GameNavbar from '../../game-navbar'
import GameFooterOnlyHeader from '../../game-footer-only-header'
import { Container } from './game-layout-not-footer.elements'

function GameLayoutNotFooter({ children }) {
  return (
    <Container>
    <GameNavbar />
    { children }
    </Container>
  )
}

export default GameLayoutNotFooter
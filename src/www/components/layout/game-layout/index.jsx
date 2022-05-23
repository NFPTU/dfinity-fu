import React from 'react'
import GameNavbar from '../../game-navbar'

function GameLayout({ children }) {
  return (
    <>
    <GameNavbar />
    { children }
    </>
  )
}

export default GameLayout
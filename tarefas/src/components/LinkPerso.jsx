import React from 'react'
import { Link } from 'react-router-dom'

export default function LinkPerso({caminho,children}) {
  return (
    <div>
        <Link to={caminho}>{children}</Link>
    </div>
  )
}

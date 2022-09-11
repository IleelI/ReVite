import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/main.css'
import Root from './Root'

const rootContainer = document.getElementById('root')

if (rootContainer) {
  const rootElement = createRoot(rootContainer)

  rootElement.render(
    <StrictMode>
      <Root />
    </StrictMode>
  )
}

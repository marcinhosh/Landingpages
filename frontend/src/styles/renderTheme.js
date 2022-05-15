import {theme} from '../styles/theme'
import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'

export const renderTheme = (childe) => {
    return render(
        <ThemeProvider theme={theme} >
            {childe}
        </ThemeProvider>
    )
}
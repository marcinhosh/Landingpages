import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';

import Home from '.';
import { theme } from '../../styles/theme';

describe('<Home />', () => {
  it('should render home', () => {
    renderTheme(<Home />);
  });
});
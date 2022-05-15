import { screen } from '@testing-library/react';

import Home from '.';
import {renderTheme} from '../../styles/renderTheme'

test('renders learn react link', () => {
  renderTheme(<Home />);
});

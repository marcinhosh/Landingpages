import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { MenuLink } from '.';

describe('<MenuLink />', () => {
    it('should render a link', () => {
        renderTheme(<MenuLink link = 'www.google.com'>Children</MenuLink>);
        expect(screen.getByRole('link', {name: 'Children'})).toHaveAttribute(
            'target',
            '_self'
        );
    });
});

import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { LogoLink } from '.';

describe('<LogoLink />', () => {
    it('should render text logo', () => {
        renderTheme(<LogoLink link="#target" text="Olá mundo" />);
        expect(
            screen.getByRole('heading', { name: 'Olá mundo' }),
        ).toBeInTheDocument();
    });

    it('should render image logo', () => {
        renderTheme(
            <LogoLink link="#target" text="Olá mundo" srcImg="image.jpg" />,
        );
        expect(screen.getByAltText('Olá mundo')).toHaveAttribute(
            'src',
            'image.jpg',
        );
    });

    it('should match snapshot', () => {
        const { container } = renderTheme(
            <LogoLink link="#target" text="Olá mundo" srcImg="image.jpg" />,
        );
        expect(container.firstChild).toMatchSnapshot();
    });
});
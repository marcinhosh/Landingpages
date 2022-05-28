import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { TextComponent } from '.';

describe('<TextComponent />', () => {
    it('should render', () => {
        renderTheme(<TextComponent>Children</TextComponent>);
        expect(screen.getByText('Children')).toBeInTheDocument();
    });
    it('should render', () => {
        const {container} = renderTheme(<TextComponent>Children</TextComponent>);
        expect(container.firstChild).toMatchSnapshot();
    });
});

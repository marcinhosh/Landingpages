import P from 'prop-types';
import * as Styled from './styles';

export const MenuLink = ({ children, link, newTab }) => {
    const target = newTab ? '_blanck' : '_self'
    return (
        <Styled.Container href={link} target = {target}>
            {children}
        </Styled.Container>
    );
};

MenuLink.propTypes = {
    children: P.node.isRequired,
    link: P.string.isRequired,
    newTab: P.bool.isRequired,
};

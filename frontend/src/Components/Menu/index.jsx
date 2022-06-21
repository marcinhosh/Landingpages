import P from 'prop-types';
import * as Styled from './styles';
import { SectionContainer } from '../SectionContanier'
import { LogoLink } from '../LogoLink'
import { NavLinks } from '../NavLinks'
// import { Menu as MenuIcon } from '@styled-icons/material/Menu'


export const Menu = ({ links = [], logoData }) => {
    return (

        <Styled.Container>
            <SectionContainer>
                <Styled.MenuContainer>
                    <LogoLink {...logoData} />
                    <NavLinks links={links} />
                </Styled.MenuContainer>
            </SectionContainer>
        </Styled.Container>
    );
};

Menu.propTypes = {
    ...NavLinks.propTypes,
    logoData: P.shape(LogoLink.propTypes).isRequired,
};

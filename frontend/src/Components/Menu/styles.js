import styled, { css } from 'styled-components';
import { Container as SectionContanier } from '../SectionContanier/styles'
import { Title as Heading } from '../Heading/styles'

export const Container = styled.div`
    ${({ theme }) => css`
        position: fixed;
        z-index: 5;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-bottom: ${theme.colors.mediumGray};

        > ${SectionContanier} {
            padding-top: 0;
            padding-bottom: 0;
        }

        & ${Heading} {
            margin-top: 0;
            margin-bottom: 0;
        }

        @media ${theme.media.lteMedium} {
            height: 100vh;

            > ${SectionContanier} {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;
                height: 100vh;
                align-items: center;
                overflow-y: auto;
            }

            & ${Heading} {
               padding-bottom: ${theme.spaces.large};
               display: flex;
               justify-content: center;
            }
        }
    `}
`;

export const MenuContainer = styled.div`
    ${({ theme }) => css`
       display: flex;
       justify-content: space-between;
       align-items: center;

       @media ${theme.media.lteMedium} {
        display: block;
        text-align: center;
        padding: ${theme.spaces.xxlarge} 0;

       }
    `}
`;
export const Button = styled.button`
    ${({ theme }) => css`
       
    `}
`;

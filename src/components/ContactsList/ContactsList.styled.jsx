import styled from '@emotion/styled';

export const List = styled.li`
padding-left: ${p => p.theme.space[3]}px;
padding-right: ${p => p.theme.space[3]}px;
  display: flex;
  align-items: center;
  justify-content:space-between;
  font-weight: ${p => p.theme.fontweights.aboveNormal};
  font-size: ${p => p.theme.fontSizes.big};
  background-color: grey;
  border-radius: 6px;
  :hover {
    background-color: lightgrey;
  }
`;

export const Img = styled.img`
width: 50px;
border-radius: 50%;
`;
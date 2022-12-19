import styled from '@emotion/styled';

export const Label = styled.label`
  display: block;
  margin-bottom: ${p => p.theme.space[3]}px;
  font-weight: ${p => p.theme.fontweights.aboveNormal};
  font-size: ${p => p.theme.fontSizes.big};
  
`;

export const Input = styled.input`
  width: 150px;
  
  padding: ${p => p.theme.space[1]}px;
  
  margin-bottom: ${p => p.theme.space[4]}px;
  margin-left: ${p => p.theme.space[4]}px;
  
  background-color: lightgrey;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  :focus {
    outline: 2px solid ${p => p.theme.colors.accent};
  } 

  ::placeholder: {
    color: grey;
  }
`;

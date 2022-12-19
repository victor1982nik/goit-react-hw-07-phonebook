import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: ${p => p.theme.space[4]}px;
  width: 300px;
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.borderBlack};
  border-radius: ${p => p.theme.space[4]}px;
  
`;

export const Button = styled.button`
  width: 100px;
  
  font-weight: 700;
  padding: 4px 10px 3px 10px;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 1px 3px 1px rgba(0, 0, 0, 0.1), 2px 1px 2px rgba(0, 0, 0, 0.08),
    1px 2px 2px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  background-color: lightgrey;

  :active {
    background-color: ${p => p.theme.colors.accent};
  }
  :hover {
    background-color: ${p => p.theme.colors.blue};
  }
`;

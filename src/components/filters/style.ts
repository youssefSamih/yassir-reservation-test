import styled from 'styled-components'

export const STFormControl = styled.input`
  display: block;

  width: 70%;

  padding: 0.375rem 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.iron};

  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;

  color: ${({ theme }) => theme.colors.dark};
  background-color: ${({ theme }) => theme.colors.white};
  background-clip: padding-box;

  appearance: none;

  border-radius: 0.25rem;
`

export const STFormControlSelect = styled.select`
  display: block;

  width: 70%;

  padding: 0.375rem 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.iron};

  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;

  color: ${({ theme }) => theme.colors.dark};
  background-color: ${({ theme }) => theme.colors.white};
  background-clip: padding-box;

  appearance: none;

  border-radius: 0.25rem;
`

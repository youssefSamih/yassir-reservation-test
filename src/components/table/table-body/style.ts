import styled from 'styled-components'

export const STTableTd = styled.td`
  border-top: 1px solid ${({ theme }) => theme.colors.gainsBoro};

  padding: 8px 20px;
`

export const STCaption = styled.tr`
  position: absolute;

  width: 100%;

  margin-top: 100px;

  display: flex;
  justify-content: center;
`

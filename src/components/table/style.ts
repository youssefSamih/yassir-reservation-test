import styled from 'styled-components'

import DefaultPng from 'images/default.png'
import UpArrowPng from 'images/up_arrow.png'
import DownArrowPng from 'images/down_arrow.png'

export const STtable = styled.table`
  width: 100%;

  border-spacing: 0;
`

export const STtableTr = styled.tr`
  &:first-child td {
    border-top: none;
  }

  &:nth-child(n) td {
    background: ${({ theme }) => theme.colors.brightGrey};
  }

  &:nth-child(2n) td {
    background: ${({ theme }) => theme.colors.white};
  }
`

export const STtableTh = styled.th`
  background: ${({ theme }) => theme.colors.white};

  padding: 8px 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.eerieBlack};

  font-weight: bold;

  text-align: left;
`

export const STSort = styled.div`
  margin-bottom: 5px;

  &.default {
    background-image: url(${DefaultPng});
  }

  &.up {
    background-image: url(${UpArrowPng});
  }

  &.down {
    background-image: url(${DownArrowPng});
  }

  &.up,
  &.default,
  &.down {
    margin-left: 10px;

    cursor: pointer;

    background-repeat: no-repeat;

    background-position: center right;
  }
`

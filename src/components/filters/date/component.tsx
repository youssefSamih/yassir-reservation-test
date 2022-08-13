import React from 'react'

import { STFormControl } from 'components/filters/style'

// ~~~~~~ Type

type Props = {
  onChange: (value: string) => void
}

// ~~~~~~ Component

export const DateFilter: React.FC<Props> = ({ onChange }) => {
  // ~~~~~~ Render

  return <STFormControl type="date" onChange={(evt) => onChange(evt.target.value)} />
}

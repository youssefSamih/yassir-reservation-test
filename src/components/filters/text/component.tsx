import React from 'react'

import { STFormControl } from 'components/filters/style'

// ~~~~~~ Type

type Props = {
  onChange: (value: string) => void
}

// ~~~~~~ Component

export const TextFilter: React.FC<Props> = ({ onChange }) => {
  // ~~~~~~ Render

  return <STFormControl type="text" onChange={(evt) => onChange(evt.target.value)} />
}

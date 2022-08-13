import React from 'react'

import { STFormControlSelect } from 'components/filters/style'

// ~~~~~~ Types

type Props = {
  options: {
    label: string | number
    value: string | number
  }[]

  onChange: (value: string) => void
}

// ~~~~~~ Component

export const SelectFilter: React.FC<Props> = ({ options, onChange }) => {
  // ~~~~~~ Render

  return (
    <STFormControlSelect onChange={(evt) => onChange(evt.target.value)}>
      <option value="">___</option>

      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </STFormControlSelect>
  )
}

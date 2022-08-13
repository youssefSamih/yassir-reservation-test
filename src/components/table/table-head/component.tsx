import { useState } from 'react'

import type { TableDataObject } from 'components/table/table-body/component'
import { FiltersComponents } from 'components/filters'
import { STSort, STtableTh, STtableTr } from 'components/table/style'
import { STSpace } from './style'

// ~~~~~~ Types

export type ColumnsTypes = {
  label: string
  filterKind?: 'date' | 'select' | 'text' | 'number'
  accessor: string
  sortable?: boolean
  sortbyOrder?: 'asc' | 'desc'
}

type Props = {
  columns: ColumnsTypes[]
  tableData: TableDataObject[]

  handleSorting(sortOrder: ColumnsTypes['sortbyOrder'], sortField?: string | number): void
  onFilter: (
    accessor: string,
    value: string | number,
    kindOfSearch: ColumnsTypes['filterKind']
  ) => void
}

// ~~~~~~ Component

export const TableHead: React.FC<Props> = ({ columns, tableData, handleSorting, onFilter }) => {
  // ~~~~~~ State

  const [sortField, setSortField] = useState('')

  const [order, setOrder] = useState('asc')

  // ~~~~~~ Handlers

  function handleSortingChange(accessor: string, sortable?: boolean) {
    if (!sortable) return

    const sortOrder = accessor === sortField && order === 'asc' ? 'desc' : 'asc'

    setSortField(accessor)

    setOrder(sortOrder)

    handleSorting(sortOrder, accessor)
  }

  // ~~~~~~ Render

  return (
    <thead>
      <STtableTr>
        {columns.map(({ label, accessor, sortable, filterKind }) => {
          const FilterComponent = filterKind ? FiltersComponents[filterKind] : undefined

          const dataAccessor = tableData.map((access) => access[accessor])

          const options = [...new Set(dataAccessor)].map((data) => ({
            label: data,
            value: data,
          }))

          const className = sortable
            ? sortField === accessor && order === 'asc'
              ? 'up'
              : sortField === accessor && order === 'desc'
              ? 'down'
              : 'default'
            : undefined

          return (
            <STtableTh key={accessor}>
              <STSort className={className} onClick={() => handleSortingChange(accessor, sortable)}>
                {label}
              </STSort>

              {FilterComponent ? (
                <FilterComponent
                  options={options}
                  onChange={(evt) => onFilter(accessor, evt, filterKind)}
                />
              ) : (
                <STSpace />
              )}
            </STtableTh>
          )
        })}
      </STtableTr>
    </thead>
  )
}

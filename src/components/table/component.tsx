import React from 'react'

import { TableBody, TableDataObject } from './table-body/component'
import { ColumnsTypes, TableHead } from './table-head/component'
import { useSortableTable } from './hooks/use-sortable-table'
import { useFilterTable } from './hooks/use-filter-table'
import { STtable } from './style'

// ~~~~~~ Types

type Props = {
  columns: ColumnsTypes[]
  tableData: TableDataObject[]
}

// ~~~~~~ Component

export const Table: React.FC<Props> = ({ columns, tableData: data }) => {
  // ~~~~~~ Hooks

  const { tableData, handleSorting } = useSortableTable(data, columns)

  const { result, onFilter } = useFilterTable(tableData)

  // ~~~~~~ Render

  return (
    <STtable>
      <TableHead
        columns={columns}
        tableData={data}
        handleSorting={handleSorting}
        onFilter={onFilter}
      />

      <TableBody columns={columns} tableData={result} />
    </STtable>
  )
}

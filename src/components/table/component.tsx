import React from 'react'

import { TableBody, TableDataObject } from './table-body/component'
import { ColumnsTypes, TableHead } from './table-head/component'
import { useSortableTable } from './hooks/use-sortable-table'
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

  // ~~~~~~ Render

  return (
    <STtable>
      <TableHead columns={columns} tableData={data} handleSorting={handleSorting} />

      <TableBody columns={columns} tableData={tableData} />
    </STtable>
  )
}

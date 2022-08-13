import type { ColumnsTypes } from 'components/table/table-head/component'
import { STtableTr } from 'components/table/style'

import { STCaption, STTableTd } from './style'

// ~~~~~~ Types

export type TableDataObject = {
  id: number
  [key: string]: string | number
}

type Props = {
  tableData: TableDataObject[]
  columns: ColumnsTypes[]
}

// ~~~~~~ Component

export const TableBody: React.FC<Props> = ({ tableData, columns }) => {
  // ~~~~~~ Render

  return (
    <tbody>
      {tableData.length > 0 ? (
        tableData.map((data) => {
          return (
            <STtableTr key={data.id}>
              {columns.map(({ accessor }) => {
                const tData = data[accessor] ? data[accessor] : '——'

                return <STTableTd key={accessor}>{tData}</STTableTd>
              })}
            </STtableTr>
          )
        })
      ) : (
        <STCaption>
          <td>There is no record data</td>
        </STCaption>
      )}
    </tbody>
  )
}

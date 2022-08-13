import React from 'react'

import { Table } from 'components/table/component'

import db from './db.json'
import { ColumnsTypes } from 'components/table/table-head/component'

// ~~~~~~ Constants

const LabelAccessObject = {
  id: 'ID',
  businessDate: 'Business date',
  status: 'Status',
  shift: 'Shift',
  start: 'Start date',
  end: 'End date',
  quantity: 'Quantity',
  customer: 'Customer',
  area: 'Area',
  guestNotes: 'Notes',
} as Record<string, string>

const FilterAccessObject = {
  id: 'number',
  businessDate: 'date',
  status: 'select',
  shift: 'select',
  start: 'date',
  end: 'date',
  quantity: 'number',
  customer: 'text',
  area: 'select',
  guestNotes: 'text',
} as Record<string, ColumnsTypes['filterKind']>

const columns = Object.entries(db.reservations[0]).map(([accessor]) => {
  const label = LabelAccessObject[accessor]

  return {
    label,
    accessor,
    filterKind: FilterAccessObject[accessor],
    sortable: true,
  }
})

const tableData = db.reservations.map((reservation) => ({
  ...reservation,
  customer: `${reservation.customer.firstName} ${reservation.customer.lastName}`,
}))

// ~~~~~~ Component

export const App = () => {
  // ~~~~~~ Render

  return <Table tableData={tableData} columns={columns} />
}

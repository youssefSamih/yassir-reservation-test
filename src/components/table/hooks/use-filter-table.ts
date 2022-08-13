import React from 'react'

import type { TableDataObject } from 'components/table/table-body/component'
import { formatDate, getTime } from 'utils/date'
import { ColumnsTypes } from '../table-head/component'

// ~~~~~~ Helper

const buildFilter = (filters: Record<string, Record<string, string | number>>) => {
  const dateCondition =
    filters?.start?.value || filters?.end?.value
      ? (item: TableDataObject) =>
          filters?.start?.value && filters?.end?.value
            ? getTime(filters.start.value as string) <= getTime(item.start as string) &&
              getTime(filters.end.value as string) >= getTime(item.end as string)
            : filters?.start?.value && !filters?.end?.value
            ? getTime(filters.start.value as string) <= getTime(item.start as string)
            : getTime(filters.end.value as string) >= getTime(item.end as string)
      : undefined

  const businessDate = filters?.businessDate?.value
    ? (item: TableDataObject) =>
        getTime(String(filters.businessDate.value)) <=
        getTime(formatDate(String(item.businessDate)))
    : undefined

  const selectedFilter = []

  dateCondition && selectedFilter.push(dateCondition)

  businessDate && selectedFilter.push(businessDate)

  const restQuery = { ...filters }

  delete restQuery?.businessDate

  delete restQuery?.start

  delete restQuery?.end

  for (const key in restQuery) {
    if (restQuery[key]?.value) {
      selectedFilter.push((item: TableDataObject) => {
        if (restQuery[key].kindOfSearch === 'text') {
          return String(item[key]).includes(String(restQuery[key].value))
        }

        if (restQuery[key].kindOfSearch === 'select' || restQuery[key].kindOfSearch === 'number') {
          return String(restQuery[key].value) === String(item[key])
        }
      })
    }
  }

  return selectedFilter
}

const filterData = (
  data: TableDataObject[],
  filters: Record<string, Record<string, string | number>>
) => {
  const filteredData = data.filter((item) => buildFilter(filters).every((method) => method(item)))

  return filteredData
}

// ~~~~~~ Hook

export const useFilterTable = (tableData: TableDataObject[]) => {
  // ~~~~~~ State

  const [filters, setFilters] = React.useState({})

  // ~~~~~~ Computed

  const result = filterData(tableData, filters)

  // ~~~~~~ Handlers

  function onFilter(
    accessor: string,
    value: string | number,
    kindOfSearch: ColumnsTypes['filterKind']
  ) {
    setFilters((prevState) => ({
      ...prevState,
      [accessor]: {
        value,
        kindOfSearch,
      },
    }))
  }

  return {
    result,
    onFilter,
  }
}

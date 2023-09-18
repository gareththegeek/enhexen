import { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import dompurify from 'dompurify'
import { formatDate, toDateTime } from '../../helpers/dates'
import { LogContext } from '../../contexts/LogContext'
import { useFetchLog, useDeleteLog, usePutLog } from '../../hooks/logs'
import { useFetchSettlements } from '../../hooks/settlements'
import Button from '../atoms/Button'
import Table from '../atoms/Table'
import IconButton from '../atoms/IconButton'
import { useFetchFactions } from '../../hooks/factions'
import { useFetchNpcs } from '../../hooks/npcs'
import Paginator from '../molecules/Paginator'

const referenceRegex = /([0-9]{1,2}\.[0-9]{1,2})/g

const indexBy = ({ key, value, data }) =>
  data?.reduce((a, c) => {
    a[key(c)] = value(c)
    return a
  }, {}) ?? {}

const buildRegex = (data) =>
  new RegExp(`(${data?.map(({ name }) => name).join('|')})`)

const renderLogEntry = ({ factions, npcs, settlements }) => {
  const factionLookup = indexBy({
    key: (x) => x.name,
    value: (x) => x.id,
    data: factions,
  })
  const npcLookup = indexBy({
    key: (x) => x.name,
    value: (x) => x.id,
    data: npcs,
  })
  const settlementLookup = indexBy({
    key: (x) => x.name,
    value: (x) => x.hex?.reference,
    data: settlements,
  })

  const factionRegex = buildRegex(factions)
  const npcRegex = buildRegex(npcs)
  const settlementRegex = buildRegex(settlements)

  const logEntry = (text) => {
    const sanitiser = dompurify.sanitize
    const html = sanitiser(text)
      .replace(referenceRegex, "<a href='/$1'>$1</a>")
      .replace(
        factionRegex,
        (sub) => `<a href='factions/${factionLookup[sub]}'>${sub}</a>`
      )
      .replace(npcRegex, (sub) => `<a href='npcs/${npcLookup[sub]}'>${sub}</a>`)
      .replace(
        settlementRegex,
        (sub) => `<a href='settlements/${settlementLookup[sub]}'>${sub}</a>`
      )
    return <p dangerouslySetInnerHTML={{ __html: html }} />
  }
  return logEntry
}

const LogTable = ({ addButton, onEdit, className }) => {
  const [confirm, setConfirm] = useState(false)
  const [page, setPage] = useState(0)
  const { searchText } = useContext(LogContext)
  useEffect(() => {
    setPage(0)
  }, [searchText])
  const putLog = usePutLog()
  const deleteLog = useDeleteLog()
  const { entries, meta, mutateEntries } = useFetchLog({ searchText, page })
  const { settlements } = useFetchSettlements()
  const { factions } = useFetchFactions()
  const { npcs } = useFetchNpcs()

  const handleDeleteClick = ({ id }) => {
    if (confirm !== id) {
      setConfirm(id)
      return
    }
    deleteLog(id).then(mutateEntries)
  }

  const handlePinClick = ({ id, created, text, pinned }) => {
    putLog({
      id,
      created,
      text,
      pinned: !pinned,
    }).then(mutateEntries)
  }

  const render = renderLogEntry({ factions, npcs, settlements })

  return (
    <Table className={className}>
      <thead>
        <tr>
          <th>Log</th>
          <th></th>
          <th></th>
          {addButton}
        </tr>
      </thead>
      <tbody>
        {meta?.pagination && (
          <tr>
            <td colSpan={4}>
              <Paginator
                pagination={meta.pagination}
                onPage={(page) => setPage(page)}
              />
            </td>
          </tr>
        )}
        {entries?.map((logEntry) => (
          <tr key={logEntry.id}>
            <td>
              <IconButton
                title="Pin"
                className={!logEntry.pinned && 'grayscale'}
                onClick={() => handlePinClick(logEntry)}
              >
                📌
              </IconButton>
            </td>
            <td>{formatDate(toDateTime(logEntry.created))}</td>
            <td>{render(logEntry.text)}</td>
            <td>
              <Button
                warning={logEntry.id === confirm}
                onClick={() => handleDeleteClick(logEntry)}
              >
                {logEntry.id === confirm ? 'Confirm?' : 'Delete'}
              </Button>
              <Button onClick={() => onEdit(logEntry)}>Edit</Button>
            </td>
          </tr>
        ))}
        {meta?.pagination && (
          <tr>
            <td colSpan={4} className="text-right">
              <Paginator
                pagination={meta.pagination}
                onPage={(page) => setPage(page)}
              />
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  )
}

LogTable.propTypes = {
  addButton: PropTypes.node,
  onEdit: PropTypes.func,
  className: PropTypes.string,
}

export default LogTable

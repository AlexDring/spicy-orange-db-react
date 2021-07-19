/* eslint-disable react/display-name */
/* eslint-disable react/jsx-key */
import { useMemo, useState } from 'react'
import { useTable } from 'react-table'
import Modal from '../components/modals/Modal'
import NewMediaModal from '../components/modals/NewMediaModal'
import styled from 'styled-components'

const TableStyles = styled.table`
  background: white;
  border-radius: 3px;
  border: 1px solid var(--light-gray);
  text-align: left;
  border-collapse: collapse; 
  width: 100%;
  tr {
  transition: background 0.5s ease;
    :hover {
      background: #f7f7f7;
    }
  }
  th { 
    padding: 12px;
    font-family: 'lora';
    white-space: nowrap;
  }
  th,
  td {
    padding: 16px;
    border-bottom: 1px solid var(--light-gray);
    :first-child {
      img {
        max-width: 50px;
        height: 70px;
        margin-right: 12px;
        object-fit: cover;
        @media (max-width: 500px) {
          display: none;
        }
      }
    }
    h4 {
      display: inline;
    }
    :first-child {
      /* padding: 0; */
      /* border-right: 0; */
      /* border-bottom: 0; */
    }
  }
  thead {
    border-left: 3px solid var(--light-gray);
  }
`

const AddRecommendationTable = () => {
  const [displayModal, setDisplayModal] = useState(false)
  const [recId, setRecId] = useState('') 
  const data = useMemo(() => 
    [
      {
        Title: 'Working Girl',
        Year: '1988',
        imdbID: 'tt0096463',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BNDg4MGM3OTAtZjNlZC00NjE1LTk5YTAtMGE2YWUxMjRjZDA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
      },
      {
        Title: 'The Working Man',
        Year: '1933',
        imdbID: 'tt0024785',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BYmJlMzQyNWUtOTdmNi00ODFjLWJiNGYtNmQ1ZjNhZjljODY3XkEyXkFqcGdeQXVyNTY4NjI2OTA@._V1_SX300.jpg'
      },
      {
        Title: 'Working the Engels',
        Year: '2014',
        imdbID: 'tt3489108',
        Type: 'series',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMjAyMTU5NjYwNF5BMl5BanBnXkFtZTgwMDc2NDUxMjE@._V1_SX300.jpg'
      },
      {
        Title: 'Working Girls',
        Year: '1986',
        imdbID: 'tt0092238',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMzI0OTNmZjUtOGVmYi00OTYyLTg3MWYtNzI0NmZmZjhmNGY2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
      },
      {
        Title: 'Hardly Working',
        Year: '1980',
        imdbID: 'tt0082501',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BNjA3MzViOGQtYTQ4YS00M2NkLWI0ZDktMmJkYjQxNDlmYjI5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg'
      },
      {
        Title: 'The Shark Is Still Working',
        Year: '2007',
        imdbID: 'tt0469185',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BYTM0ZjJhOGMtNDE4MC00YjUyLTkyMjUtZjE4ZmY0NjVhMzA3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
      },
      {
        Title: 'Working for Peanuts',
        Year: '1953',
        imdbID: 'tt0046560',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BZDljYzRhZDUtNmFhNC00NDU2LTkwZWEtZTlmNmM2MzEzY2YyXkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_SX300.jpg'
      },
      {
        Title: 'She\'s Working Her Way Through College',
        Year: '1952',
        imdbID: 'tt0045144',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMzA1M2NlYjUtNDU0YS00N2U3LTk3OWMtZTlhODc4NmE3MWZjXkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SX300.jpg'
      },
      {
        Title: 'Working!!',
        Year: '2010–2015',
        imdbID: 'tt1685484',
        Type: 'series',
        Poster: 'https://m.media-amazon.com/images/M/MV5BNzk4MzRmNDYtOTI0MC00MWQ3LTllZmMtNGE3YWY0MzIwNDYwXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_SX300.jpg'
      },
      {
        Title: 'Working Man',
        Year: '2019',
        imdbID: 'tt8391044',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMzU0YzZiNTEtOWE0NS00ODZkLTkxZDktYTQxNWVhM2I2NjI0XkEyXkFqcGdeQXVyNjM0NzMyMDY@._V1_SX300.jpg'
      }
    ], [])

  const openModal = (imdbId) => {
    setDisplayModal(!displayModal)
    setRecId(imdbId)
  }

  const columns = useMemo(() => [
    {
      Header: 'Poster',
      accessor: 'Poster',
      Cell: row => {
        return(
          <img src={row.row.original.Poster} alt="" />
        )
      }
    },
    {
      Header: 'Title',
      accessor: 'Title',
      Cell: row => {
        return(
          <h3 onClick={() => openModal(row.row.original.imdbID)}>{row.row.original.Title}</h3>
        )
      }
    },
    {
      Header: 'Type',
      accessor: 'Type',
      Cell: row => {
        return(
          <div style={{'textTransform': 'capitalize'}}>{row.row.original.Type}</div>
        )
      }
    },
  ], [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ 
    columns, 
    data,
  }) 

  return(
    <>
      <Modal displayModal={displayModal} setDisplayModal={setDisplayModal} >
        <NewMediaModal recId={recId} />
      </Modal>
      <TableStyles {...getTableProps()}>
        <thead>
          {// Loop over the header rows
            headerGroups.map(headerGroup => (
              // Apply the header row props
              <tr {...headerGroup.getHeaderGroupProps()}>
                {// Loop over the headers in each row
                  headerGroup.headers.map(column => (
                    // Apply the header cell props
                    <th {...column.getHeaderProps()}>
                      {// Render the header
                        column.render('Header')}
                    </th>
                  ))}
              </tr>
            ))}
        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()}>
          {// Loop over the table rows
            rows.map(row => {
              // Prepare the row for display
              prepareRow(row)
              return (
              // Apply the row props
                <tr style={row.original.Type === 'movie' ? {'borderLeft': '3px solid var(--orange)'} : {'borderLeft': '3px solid var(--yellow'}} {...row.getRowProps()}>
                  {// Loop over the rows cells
                    row.cells.map(cell => {
                      // Apply the cell props
                      return (
                        <td {...cell.getCellProps()}>
                          {// Render the cell contents
                            cell.render('Cell')}
                        </td>
                      )
                    })}
                </tr>
              )
            })}
        </tbody>
      </TableStyles>
    </>
  )
}

export default AddRecommendationTable
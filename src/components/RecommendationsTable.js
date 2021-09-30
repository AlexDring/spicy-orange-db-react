/* eslint-disable react/display-name */
/* eslint-disable react/jsx-key */
import { useEffect, useMemo } from 'react'
import { useTable } from 'react-table'
import { useWindowSize } from '../utils/hooks'
import { Link } from 'react-router-dom'
import rottenIcons from '../assets/images/rotten-gas/rottenIcons'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useRecommendations } from '../utils/recommendations'


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

const RecommendationsTable = () => {
  const size = useWindowSize()
  const {recommendations} = useRecommendations()
  
  console.log(recommendations)
  const data = useMemo(() => recommendations, [recommendations])
 
  const columns = useMemo(
    () => [
      {
        Header: 'Title',
        // eslint-disable-next-line react/display-name
        Cell: row => {
          return(
            <div style={{'display': 'flex', 'alignItems': 'center'}}>
              <img src={row.row.original.Poster} alt="" />
              <div type={row.row.original.Type}>
                <Link to={`/recommendation/${row.row.original._id}`}>
                  <h4>{row.row.original.Title}</h4>
                </Link> 
                <small> • {row.row.original.Year}</small>
                {row.row.original.Runtime !== 'N/A' &&  <small> • {row.row.original.Runtime}</small> }
                {row.row.original.totalSeasons && <small> • {row.row.original.totalSeasons} Season</small> }
                <p>
                  {row.row.original.imdbRating !== 'N/A' && <small>IMDb: {row.row.original.imdbRating}/10 </small>}
                  {row.row.original.Metascore !== 'N/A' && <small>• MetaCritic: {row.row.original.Metascore}/100</small>}
                </p>
              </div>
            </div>
          )
        }
      },
      {
        Header: 'Genre',
        accessor: 'Genre',
        Cell: row => (   <small>{row.row.original.Genre}</small> ),
      },
      {
        Header: 'Rotten Ga\'s',
        Cell: row => {
          return(
            <div style={{'textAlign': 'center'}}>
              {row.row.original.rottenAverage && <img width={25} src={row.row.original.rottenAverage > 899 ? rottenIcons.certifiedGa 
                : row.row.original.rottenAverage > 599 ? rottenIcons.freshGa 
                  : rottenIcons.rottenGa} alt="" />}
              {row.row.original.rottenAverage && <div>{row.row.original.rottenAverage}/1000</div>}
              {row.row.original.rottenAverage ? <small>{row.row.original.rottenCount} Reviews</small> : <small>No Reviews</small>}
            </div>
          )
        },
      }
    ], [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setHiddenColumns
  } = useTable({ 
    columns, 
    data,
  }) 

  useEffect(() => {
    setHiddenColumns(size.width < 501 ? ['Genre'] : [])
  }, [setHiddenColumns, size.width])

  return(
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
  )
}

RecommendationsTable.propTypes = {
  data: PropTypes.array
}

export default RecommendationsTable
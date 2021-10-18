/* eslint-disable react/jsx-key */
import Breadcrumbs from 'components/layout/navigation/breadcrumbs'
import Section from 'components/layout/section'
import { Spinner } from 'components/lib'


import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useTable, useBlockLayout } from 'react-table'
import styled from 'styled-components'
import { rottenReviewImage } from 'utils/misc'
import { useRecommendations } from 'utils/recommendations'

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


const Recommendations = () => {
  const { recommendations, isLoading, isSuccess } = useRecommendations()

  const data = useMemo(() => recommendations, [recommendations])
  const columns = useMemo(() => [
    {
      Header: 'Title',
      // eslint-disable-next-line react/display-name
      Cell: row => {
        return(
          <div id="title" style={{'display': 'flex', 'alignItems': 'center'}}>
            <img src={row.row.original.Poster} alt="" />
            <div type={row.row.original.Type}>
              <Link to={`/recommendation/${row.row.original._id}`}>
                <h4>{row.row.original.Title}</h4>
              </Link>
              <div>
                <small>{row.row.original.Year} • {row.row.original.Type}</small>
                {row.row.original.Runtime !== 'N/A' &&  <small> • {row.row.original.Runtime}</small> }
                {row.row.original.totalSeasons && <small> • {row.row.original.totalSeasons} Season</small> }
              </div> 
              {/* <p><small>Director: {row.row.original.Director}</small></p> */}
              <div>
                
                {row.row.original.imdbRating !== 'N/A' && <small>IMDb: {row.row.original.imdbRating}/10 </small>}
                {row.row.original.Metascore !== 'N/A' && <small>• MetaCritic: {row.row.original.Metascore}/100</small>}
              </div>

            </div>
          </div>
        )
      }
    },
    // {
    //   Header: 'Genre',
    //   accessor: 'Genre',
    //   // eslint-disable-next-line react/display-name
    //   Cell: row => (   <small>{row.row.original.Genre}</small> ),
    // },
    {
      Header: 'Rotten Ga\'s',
      // eslint-disable-next-line react/display-name
      Cell: row => {
        return(
          <div style={{display: 'flex', textAlign: 'center'}}>
            {row.row.original.rottenAverage && 
            <img  style={{paddingRight: 15, objectFit: 'contain'}} width={30} src={rottenReviewImage(row.row.original.rottenAverage)} alt="" />}
            <div>
              {row.row.original.rottenAverage && <div>{row.row.original.rottenAverage.toFixed()}/1000</div>}
              {row.row.original.rottenAverage ? <small>{row.row.original.rottenCount} Reviews</small> : <small>No Reviews</small>}
            </div>
          </div>
        )
      }
    }
  ], [])


  const tableInstance = useTable({ columns, data: isSuccess ? data : [] })

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance
  console.log(tableInstance)

  return(
    <Section>
      <Breadcrumbs 
        routes={[
          { path: '/', breadcrumb: 'Home' },
          { path: '/recommendations', breadcrumb: 'Recommendations' }
        ]} 
      />
      <h1>Recommendations</h1>
      {isLoading ? <Spinner /> : 
        (<TableStyles {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()} 
                  style={row.original.Type === 'movie' ? {'borderLeft': '3px solid var(--orange)'} : {'borderLeft': '3px solid var(--yellow'}} >
                  {row.cells.map(cell => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        style={{padding: '10px'}}>
                        {cell.render('Cell')}
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
    </Section>
  )
}

export default Recommendations
/* eslint-disable react/jsx-key */
/* eslint-disable react/display-name */
import { useMemo, useState, useEffect } from 'react'
import { useTable } from 'react-table'
import { SectionStyles } from '../styles/styles'
import { Link } from 'react-router-dom'
import { useWindowSize } from '../hooks'
import styled from 'styled-components'
import rottenIcons from '../assets/images/rotten-gas/rottenIcons'
import Modal from '../components/Modal'
import MediaInformationList from '../components/MediaInformationList'

const TableStyles = styled.table`
  background: white;
  border-radius: 3px;
  border: 1px solid var(--light-gray);
  text-align: left;
  border-collapse: collapse; 
  width: 100%;
  tr {
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
  const [displayModal, setDisplayModal] = useState(false) 
  const size = useWindowSize()
 
  const media = useMemo(
    () => [
      {
        _id: '60ba24a46960ba215ceabb99',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
        Title: 'Inception',
        Type: 'movie',
        Year: '2010',
        Runtime: '148 min',
        Director: 'Christopher Nolan',
        Genre: 'Action, Adventure, Sci-Fi, Thriller',
        Language: 'English, Japanese, French',
        Metascore: '74',
        imdbRating: '8.8',
        user: 'Dringer',
        mediaDetail: '60ba24a46960ba215ceabb95',
        __v: 0,
        rottenAverage: 921,
        rottenCount: 3
      },
      {
        _id: '60c0a9244fcbb433ce53658a',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@._V1_SX300.jpg',
        Title: 'Up',
        Type: 'movie',
        Year: '2009',
        Runtime: '96 min',
        Director: 'Pete Docter, Bob Peterson(co-director)',
        Genre: 'Animation, Adventure, Comedy, Family',
        Language: 'English',
        Metascore: '88',
        imdbRating: '8.2',
        user: 'Dringer',
        mediaDetail: '60c0a9244fcbb433ce536586',
        __v: 0,
        rottenAverage: 599,
        rottenCount: 2
      },
      {
        _id: '60daf4aaf97f998c0e6e723e',
        Poster: 'https://m.media-amazon.com/images/M/MV5BYjIyOGU1NzAtODZmYi00NGMzLWJiMjItNGNjNTFjOTM5ZDJhXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg',
        Title: 'Mare of Easttown',
        Type: 'series',
        totalSeasons: '1',
        Year: '2021',
        Runtime: '403 min',
        Director: 'N/A',
        Genre: 'Crime, Drama, Mystery',
        Language: 'English',
        Metascore: 'N/A',
        imdbRating: '8.6',
        user: 'Dringer',
        mediaDetail: '60daf4aaf97f998c0e6e723c',
        rottenAverage: 888,
        rottenCount: 4,
        __v: 0
      },
      {
        _id: '60dc679bc26320d82eb3871a',
        Poster: 'https://m.media-amazon.com/images/M/MV5BZjUyMjQ0YmUtZWNmMi00NjE5LWJhNzctNDUxYWMwM2Y3NzhmXkEyXkFqcGdeQXVyMzM0MTEzMTg@._V1_SX300.jpg',
        Title: 'Time',
        Type: 'series',
        Year: '2021–',
        Runtime: 'N/A',
        Director: 'N/A',
        Genre: 'Crime, Drama',
        Language: 'English',
        Metascore: 'N/A',
        imdbRating: 'N/A',
        user: 'Dringer',
        mediaDetail: '60dc679bc26320d82eb38719',
        __v: 0
      },
      {
        _id: '60dafa9ff97f998c0e6e7243',
        Poster: 'https://m.media-amazon.com/images/M/MV5BOTNjZDA2NDMtNzU3My00YWMzLWI4NDQtNDkyZGMzMzkyODA0XkEyXkFqcGdeQXVyNzU4ODEwNDI@._V1_SX300.jpg',
        Title: 'Mouthpiece',
        Type: 'movie',
        Year: '2018',
        Runtime: '91 min',
        Director: 'Patricia Rozema',
        Genre: 'Drama',
        Language: 'English',
        Metascore: '73',
        imdbRating: '6.4',
        user: 'Dringer',
        mediaDetail: '60dafa9ff97f998c0e6e723f',
        rottenAverage: 888,
        rottenCount: 4,
        __v: 0
      },
      {
        _id: '60dafb42f97f998c0e6e7248',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMTk0MTQ3NDQ4Ml5BMl5BanBnXkFtZTcwOTQ3OTQzMw@@._V1_SX300.jpg',
        Title: 'Borat: Cultural Learnings of America for Make Benefit Glorious Nation of Kazakhstan',
        Type: 'movie',
        Year: '2006',
        Runtime: '84 min',
        Director: 'Larry Charles',
        Genre: 'Comedy',
        Language: 'English, Romanian, Hebrew, Polish, Armenian',
        Metascore: '89',
        imdbRating: '7.3',
        user: 'Dringer',
        mediaDetail: '60dafb42f97f998c0e6e7244',
        rottenAverage: 589,
        rottenCount: 4,
        __v: 0
      },
      {
        _id: '60dafa9ff97f998c0e6e7244',
        Poster: 'https://m.media-amazon.com/images/M/MV5BOTNjZDA2NDMtNzU3My00YWMzLWI4NDQtNDkyZGMzMzkyODA0XkEyXkFqcGdeQXVyNzU4ODEwNDI@._V1_SX300.jpg',
        Title: 'Mouthpiece',
        Type: 'movie',
        Year: '2018',
        Runtime: '91 min',
        Director: 'Patricia Rozema',
        Genre: 'Drama',
        Language: 'English',
        Metascore: '73',
        imdbRating: '6.4',
        user: 'Dringer',
        mediaDetail: '60dafa9ff97f998c0e6e723f',
        rottenAverage: 921,
        rottenCount: 4,
        __v: 0
      },
      {
        _id: '60dafa9ff97f998c0e6e7244',
        Poster: 'https://m.media-amazon.com/images/M/MV5BOTNjZDA2NDMtNzU3My00YWMzLWI4NDQtNDkyZGMzMzkyODA0XkEyXkFqcGdeQXVyNzU4ODEwNDI@._V1_SX300.jpg',
        Title: 'Mouthpiece',
        Type: 'movie',
        Year: '2018',
        Runtime: '91 min',
        Director: 'Patricia Rozema',
        Genre: 'Drama',
        Language: 'English',
        Metascore: '73',
        imdbRating: '6.4',
        user: 'Dringer',
        mediaDetail: '60dafa9ff97f998c0e6e723f',
        rottenAverage: 921,
        rottenCount: 4,
        __v: 0
      }
    ], 
    [])
  
  const columns = useMemo(
    () => [
      {
        Header: 'Title',
        // accessor: 'Title',
        Cell: row => {
          return(
            <div style={{'display': 'flex', 'alignItems': 'center'}}>
              <img src={row.row.original.Poster} alt="" />
              <div type={row.row.original.Type}>
                <Link to='/media'>
                  <h4>{row.row.original.Title}</h4>
                </Link> 
                <small> • {row.row.original.Year}</small>
                {row.row.original.Runtime !== 'N/A' &&  <small> • {row.row.original.Runtime}</small> }
                {row.row.original.totalSeasons && <small> • {row.row.original.totalSeasons} Season</small> }
                {/* <p><small>{row.row.original.Genre}</small></p>
                <p><small>Director: {row.row.original.Director}</small></p> */}
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
    data: media,
  })

  useEffect(() => {
    setHiddenColumns(size.width < 501 ? ['Genre'] : [])
  }, [size.width < 501])
  
  return(
    <>
      <SectionStyles>
        <section>
          <h1>Recommendations</h1>
          <button onClick={() => setDisplayModal(!displayModal)}></button>
          <Modal displayModal={displayModal} setDisplayModal={setDisplayModal} >
            <MediaInformationList />
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
        </section>
      </SectionStyles>
    </>
  )
}

export default Recommendations
import 'normalize.css'
import Layout from './components/Layout'
import GlobalStyles from './styles/GlobalStyles'
import Typography from './styles/Typography'

function App() {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <Layout>
        <h1>test</h1>
        <p>test</p>
      </Layout>
    </>
  )
}

export default App

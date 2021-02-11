import Container from './components/Container'
import styles from './styles/Home.module.scss'
import Ofertas from './components/Ofertas'
import Descubre from './components/Descubre'

const Home = () => (
  <div data-testid="div-home">
    <Container>
      <p className={styles['lbl-bienvenida']}>Bienvenido busca todo lo que deseas</p>
      <Ofertas/>
      <Descubre/>
    </Container>
  </div>
)

export default Home

import Link from 'next/link'
import { ofetasejemplos } from '../../../mocks/ofertasmocks'
import styles from  '../styles/Ofertas.module.scss'

const Ofertas = () => {
  
  return(
    <div className={styles['div-ofertas']} data-testid="div-ofertas">
      <h1>Ofertas</h1>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {
          ofetasejemplos.map(o => {
            return(
              <div className="col mb-3" key={o.id}>
                <div className={styles['div-card']}>
                  <div className="card h-100">
                    <Link href={{pathname: '/items/[id]', query: { id: o.id }}} scroll={true}>
                      <a>
                        <img src={o.picture} className="card-img-top" alt={o.title} />
                        <div className={styles['des-product']}>
                          <div className="card-body">
                            <h5 className="card-title">$ {o.price.amount}</h5>
                            <p className="card-text">{o.title}</p>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Ofertas

import Link from 'next/link'
import { descubremocks } from '../../../mocks/descubremocks'
import styles from  '../styles/Descubre.module.scss'

const Descubre = () => {
  
  return(
    <div className={styles['div-descubre']} data-testid="div-descubre">
      <h1>Descubre</h1>

      <div className="row row-cols-1 row-cols-md-2 g-4">
        {
          descubremocks.map(o => {
            return(
              <div className="col" key={o.id}>
                <div className={styles['div-descubre']}>
                  <div className="card mb-3">
                    <Link href={{pathname: '/items', query: { search: o.card.query }}} scroll={true}>
                      <a>
                        <div className="row g-0">
                          <div className="col-md-6">
                            <div className={`card-body ${styles['txt-card']}`}>
                              <p className="card-text">{o.card.lbl1}</p>
                              <h5 className="card-title">{o.card.lbl2}</h5>
                              <p className="card-text">
                                <button>Ver m&aacute;s</button>
                              </p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <img src={o.picture} alt="..." width="250" height="210"/>
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

export default Descubre

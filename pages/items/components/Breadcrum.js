import styles from '../styles/Breadcrum.module.scss'
import Link from 'next/link'

const Breadcrum = ({breadcrums}) => {
  
  return(
    <div className={styles['div-crums']} data-testid="div-breadcrums">
      {
        breadcrums.map((b, i) => {
          return(
            <Link href={{pathname: '/items', query: { search: b }}} key={i}>
              <a>
                <span className={breadcrums[i+1] ? '' : 'font-weight-bold' }>{b}</span>
                <span>{breadcrums[i+1] ? ' > ' : ''}</span>
              </a>
            </Link>
          )
        })
      }
    </div>
  )

}

export default Breadcrum
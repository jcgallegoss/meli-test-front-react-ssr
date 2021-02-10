import { getItemsProps } from './Items.controller'
import Link from 'next/link'
import Head from 'next/head'
import Container from '../home/components/Container';
import styles from './styles/Items.module.scss'
import Breadcrum from './components/Breadcrum'

const Items = ({items, title}) => {
    
  return(
    <Container>
        <Head>
            <title>{title} | Mercado libre</title>
        </Head>
        <div data-testid="div-items">
          <Breadcrum breadcrums={items.categories}/>
          {
            items.items.map(item => {
              return (
                <Link href={{pathname: '/items/[id]', query: { id: item.id }}} scroll={true} key={item.id} >
                  <a>
                    <div className={styles['div-row']} key={item.id}>
                      <img className={styles['img-result']} src={item.picture} alt={item.title}/>
                      <div className={styles['div-precio']}>
                        <span className={styles['lbl-price']}>
                          <span className={styles['lbl-price-simbol']}>$</span>
                          <span>{item.price.amount}</span>
                        </span>
                        {item.free_shipping && <img src='/images/ic_shipping.png' alt="Envio gratis"/>}
                        <span className={styles['lbl-location']}>{item.state}</span>
                      </div>
                      <div><span className={styles['lbl-description']}>{item.title}</span></div>
                    </div>
                  </a>
                </Link>
              )
            })
          }
        </div>
    </Container>
  )
}

export const getServerSideProps = async ({ req }) => await getItemsProps(req);

export default Items
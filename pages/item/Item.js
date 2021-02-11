import { getItemProps } from './Item.controller'
import Head from 'next/head'
import Container from '../home/components/Container'
import styles from './styles/Item.module.scss'

const Item = ({item, title}) => {

  return(
    <Container>
      <Head>
        <title>{title} | Mercado libre</title>
      </Head>
      <div data-testid="div-item">
        <div className={styles['div-container']}>
          <div className="row">
            <div className="col-12 col-md-8">
              <img className={styles['img-detail']} src={item.item.picture}/>
            </div>
            <div className="col-12 col-md-4">
              <div className={styles['space-16']}>
                <span className={styles['lbl-detail-vendidos']}>{item.item.condition} - {item.item.sold_quantity} vendidos</span>
              </div>
              <div className={styles['space-32']}>
                <span className={styles['lbl-detail-item']}>{item.item.title}</span>
              </div>
              <div className={styles['space-32']}>
                <span className={styles['lbl-detail-price']}>
                  <span className={styles['lbl-price-simbol']}>$</span>
                  <span>{item.item.price.amount}</span>
                </span>
              </div>
              <div className={styles['space-32']}>
                <button className={styles['btn-detail-buy']}>Comprar</button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-8">
              <div className={styles['space-32']}>
                <span className={styles['lbl-detail-des']}>Descripci&oacute;n del producto</span>
              </div>
              <div>
                <p className={styles['lbl-detail-des-txt']}>{item.item.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export const getServerSideProps = async ({ req }) => await getItemProps(req);

export default Item
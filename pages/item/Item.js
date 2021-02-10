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
          <div className={styles['div-detail-row']}>
            <div className={styles['div-detail-col-1']}>
                <img className={styles['img-detail']} src={item.item.picture}/>
            </div>
            <div className={styles['div-detail-col-2']}>
              <div className={styles['div-detail-vendidos']}><span className={styles['lbl-detail-vendidos']}>{item.item.condition} - {item.item.sold_quantity} vendidos</span></div>
              <div className={styles['div-detail-item']}><span className={styles['lbl-detail-item']}>{item.item.title}</span></div>
              <div className={styles['div-detail-price']}>
                <span className={styles['lbl-detail-price']}>
                  <span className={styles['lbl-price-simbol']}>$</span>
                  <span>{item.item.price.amount}</span>
                </span>
              </div>
              <div className={styles['div-detail-buttton']}>
                <button className={styles['btn-detail-buy']}>Comprar</button>
              </div>
            </div>
            <div className={styles['div-detail-col-3']}>
                <div className={styles['div-detail-des']}><span className={styles['lbl-detail-des']}>Descripción del producto</span></div>
                <div className={styles['div-detail-des-txt']}><p className={styles['lbl-detail-des-txt']}>{item.item.description}</p></div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export const getServerSideProps = async ({ req }) => await getItemProps(req);

export default Item
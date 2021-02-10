import Link from 'next/link'
import  Router from "next/router"
import { useForm } from 'react-hook-form'
import styles from '../styles/Search.module.scss'

const Search = (props) => {

  const {register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    Router.push({
      pathname: '/items', 
      query: { 
        search: data.query 
      }
    })
  }

  return(
    <header className={styles['nav-header']} data-testid="div-search">
      <div className={styles['nav-search']}>
        <div className={styles['nav-logo']}>
          <Link href="/">
            <a>
              <img src="/images/Logo_ML.png" alt="Logo de mercado libre"/>
            </a>
          </Link>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <input 
            type="text" 
            name="query" 
            className={styles['nav-search-input']} 
            placeholder="Nunca dejes de buscar"
            autoFocus
            ref={register({ required: true })}
            data-testid="inputSearch"
          />
          <button type="submit" className={styles['nav-icon-search']} data-testid="btnSearch">
            <img src="/images/ic_Search.png" alt="Buscar"/>
          </button>
        </form>
      </div>
    </header>
  )
}

export default Search
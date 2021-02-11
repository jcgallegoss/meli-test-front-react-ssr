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
      <nav className={`navbar navbar-light ${styles['nav-xs']}`}>
        <div className={`container pr-0 ${styles['icon-cont']}`}>
          <div className="row container-fluid p-0">
            <div className="col-2 col-md-1">
              <Link href="/">
                <a className="navbar-brand">
                  <img src="/images/Logo_ML.png" alt="Logo de mercado libre" className="d-inline-block align-top"/>
                </a>
              </Link>
            </div>
            <div className="col-10 col-md-11 pr-0">
              <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                <div className={`input-group ${styles['nav-search-group']}`}>
                  <input type="text"
                    name="query"
                    className={`form-control ${styles['nav-search-input']}`}
                    placeholder="Nunca dejes de buscar" 
                    autoFocus
                    ref={register({ required: true })}
                    aria-label="Recipient's username" 
                    aria-describedby="basic-addon2"
                    data-testid="inputSearch"
                  />
                  <div className="input-group-append">
                    <button type="submit" 
                      className={`btn btn-outline-secondary ${styles['nav-btn-search']}`}
                      data-testid="btnSearch">
                        <img src="/images/ic_Search.png" alt="Buscar"/>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>  
        </div>
      </nav>
    </header>
  )
}

export default Search
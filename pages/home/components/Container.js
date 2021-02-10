import Head from 'next/head'
import Search from "./Search"

const Container = (props) => (
  <div style={{paddingTop: '62px'}} data-testid="div-container">
    <Head>
      <title>Mercado libre</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
    </Head>
    <Search/>
    <div className="container">
      {props.children}
    </div>
  </div>
)

export default Container
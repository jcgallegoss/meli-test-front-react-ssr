const Breadcrum = ({breadcrums}) => {
  
  const style = {
    paddingTop: '16px',
    paddingBottom: '16px',
    fontSize: '14px',
    color: '#666666'
  }

  return(
    <div style={style} data-testid="div-breadcrums">
      {breadcrums.join(' > ')}
    </div>
  )

}

export default Breadcrum
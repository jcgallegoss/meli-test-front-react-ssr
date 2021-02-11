const Breadcrum = ({breadcrums}) => {
  
  const style = {
    paddingLeft: '2px',
    paddingTop: '16px',
    paddingBottom: '16px',
    fontSize: '14px',
    color: '#666666',
    fontWeight: '400'

  }

  return(
    <div style={style} data-testid="div-breadcrums">
      {breadcrums.join(' > ')}
    </div>
  )

}

export default Breadcrum
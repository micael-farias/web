import ColorTheme from './MyColorContext'

const FunctionContextD = () => {
  const estilo = {
    backgroundColor: cores.bkgD
  }
  
  return (
    <ColorTheme.Consumer>
      {(value) => {
        return (
          <div>
            <h1 style={estilo}>Contexto D</h1>
          </div>
        )
      }}
    </ColorTheme.Consumer>
  )
}

export default FunctionContextD
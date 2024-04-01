import ColorTheme from './MyColorContext'

const FunctionContextC = () => {
  const estilo = {
    backgroundColor: cores.bkgC
  }

  return (
    <ColorTheme.Consumer>
      {(value) => {
        return (
          <div>
            <h1 style={estilo}>Contexto C</h1>
          </div>
        )
      }}
    </ColorTheme.Consumer>
  )
}

export default FunctionContextC
import ColorTheme from './MyColorContext'

const FunctionContextB = () => {

  const estilo = {
    backgroundColor: cores.bkgB
  }

  return (
    <ColorTheme.Consumer>
      {(value) => {
        return (
          <div>
            <h1 style={estilo}>Contexto B</h1>
          </div>
        )
      }}
    </ColorTheme.Consumer>
  )
}

export default FunctionContextB
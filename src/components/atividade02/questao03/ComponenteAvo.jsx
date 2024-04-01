import { useState } from 'react'
import { Filho } from './ComponenteFilho'
import { Contador } from './ContadorContexto'

import { Imagem } from './Imagem'
import { Decrementar } from './Decrementar'
import { Incrementar } from './Incrementar'

export function Avo() {
  const [numero, setNumero] = useState(9)

  return (
    <div>
      <h1>Avo</h1>
      <Contador.Provider value={{ numero, setNumero }}>
        <Imagem id={numero} />
        <Filho />
        <Incrementar />
        <Decrementar />
      </Contador.Provider>
    </div>
  )
}
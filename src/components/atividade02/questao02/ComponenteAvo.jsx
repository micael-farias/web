import { Filho } from './ComponenteFilho'
import { Contador } from './ContadorContexto'

import { Imagem } from './Imagem'

export function Avo() {
  const numero = 1

  return (
    <div>
      <h1>Avo</h1>
      <Contador.Provider value={numero}>
        <Imagem id={numero} />
        <Filho />
      </Contador.Provider>
    </div>
  )
}
import { useState } from 'react'
import Capa from './assets/hashtaurante.webp'
import { ItemCardapio } from './ItemCardapio'
import { Navegacao } from './Navegacao'
import { pratosPrincipais, sobremesas, bebidas } from './cardapio'


export function App() {
  const paginasMenu = [pratosPrincipais, sobremesas, bebidas]
  const [paginaSelecionada, atualizarPaginaSelecionada] = useState(0)
  return <>
          <img src={Capa} alt="" className='capa'/>
          <Navegacao atualizarPaginaSelecionada={atualizarPaginaSelecionada}/>
          <div className='menu'>
            {paginasMenu[paginaSelecionada].map(item => <ItemCardapio nome={item.nome} descricao={item.descricao} preco={item.preco} imagem={item.imagem}/>)}
          </div>
        </>
}
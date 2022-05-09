import { useHistory } from 'react-router-dom'
import './styles.css'
import { Button, Typography } from 'antd';
import imgInicio from '../assets/imgLista.png' 

export default function Inicio(){

    const { Title } = Typography;
    const history = useHistory()

    async function listarProdutos(){
        window.location.href = '/produtos'
    }


    return(
        <div className='inicio__container'>
            <section>
                <div class='container'>
                    <div>
                        <img src={imgInicio} height='490'  />
                    </div>
                    <div className='containerDireito'> 
                        
                            <span className='tituloTexto'> Bem-vindo ao ListaCerta</span>
                            <span className='conteudoTexto'>Aqui você pode montar sua lista do supermercado de uma maneira rápida e simples.</span>
                            <span className='finalTexto'> Organize seus produtos e boas compras &#128512;</span>
                    </div>
                </div> 
            </section>
        </div>
    )
}
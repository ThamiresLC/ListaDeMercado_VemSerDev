import React, { useEffect, useState } from "react";
import api from '../../services/api';
import { useHistory } from 'react-router-dom'
import {  UnorderedListOutlined, EditOutlined   } from '@ant-design/icons';
import './styles.css'
import { Button, Card, Row, Col } from 'antd';

export default function Produtos(){
    const [ produtos, setProdutos] = useState([])
    const history = useHistory()

    function detalhesProduto(id){
        window.location.href = '/detalhes/' + id;
      }

    useEffect(() => {
        api.get('/item')
        .then((response) =>{
        setProdutos(response.data)
        })
        .catch((err) => {
            console.log("Aconteceu um erro inesperado" + err)
        })
    }, [])

    

    return(

        <div className="produto__container">
            <p>{<UnorderedListOutlined   style={{color: "green"}} />} Sua lista de produtos</p>

            <div className="produto__card__container">
                {produtos.map(produto => (
                   
                    <Card key={produto.id} title={produto.name}  bordered={false} style={{width: 300}}>
                        <p>
                            Descrição: {produto.description}
                        </p>
                        <p>
                            Quantidade: { produto.quantity}
                        </p>
                        <div>
                            <Button type="primary" icon={<EditOutlined />} onClick={detalhesProduto.bind(this, produto.id)}>
                                Detalhar
                            </Button>
                        </div>
                    </Card>
                 
                ))}

            </div>

        </div>
    )

}
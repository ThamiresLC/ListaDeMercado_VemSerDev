import React, { useEffect, useState } from "react";
import api from '../../services/api';
import { useParams } from 'react-router-dom';
import './styles.css'
import { useHistory } from 'react-router-dom'

import { Button, Card, Modal, message } from 'antd';
import { ExclamationCircleOutlined, EditOutlined, CheckOutlined, DeleteOutlined} from '@ant-design/icons';


export default function DetalhesProduto(){
    const [ produto, setProduto] = useState([])
    
    const history = useHistory()

    let {id} = useParams()



    const { confirm } = Modal;

    function showConfirm(produto) {
    confirm({
        title: 'Confirma a exclusão do produto?',
        icon: <ExclamationCircleOutlined />,
        content: produto.name,
        okText: 'Confirmar',
        cancelText: 'Cancelar',
        onOk() {
            handleDelete(produto.id)
        },
        
        onCancel() {
        console.log('Cancel');
        },
    });
    }

    function handleDelete(id){
        api.delete(`/item/${id}`)
        .then((response) =>{
            if(response.status === 200){
                message.success("Produto foi excluido com sucesso!")
                window.location.href = '/produtos'
            }
        })
        .catch((err) =>{
            message.error("Aconteceu um erro inesperado")
        })
    }

    function editarProduto(id){
        window.location.href = '/editar/' + id;
      }

    useEffect(() => {
        api.get(`/item/${id}`)
        .then((response) =>{
        setProduto(response.data)
        })
        .catch((err) => {
            console.log("Aconteceu um erro inesperado" + err)
        })
    }, [])


    return(
        <div className="produto__container">
            <p>{<EditOutlined style={{color: "green"}} />} Deseja alterar seu produto?</p>
            <div className="produto__card__container">
                
                    <Card key={produto.id} title={produto.name}  bordered={false} style={{width: 300}}>
                        <p>Descrição: {produto.description}</p>
                        <p>Quantidade: {produto.quantity}</p>
                        <hr/>
                        <div className="produto__card--actions">
                            <Button type="primary" success icon={<CheckOutlined />} onClick={editarProduto.bind(this, produto.id)}>Editar produto</Button>
                            <Button type="primary" danger icon={<DeleteOutlined />} onClick={()=> showConfirm( produto)}>Excluir </Button>
                        </div>
                    </Card>
            </div>
        </div>
    )

}
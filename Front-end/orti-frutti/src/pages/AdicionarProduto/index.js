import './styles.css'
import { CheckCircleOutlined, CheckOutlined, LikeOutlined  } from '@ant-design/icons'
import React from "react";
import api from '../../services/api';
import { useHistory } from 'react-router-dom'


import { message, Form, Input, Button, InputNumber, Divider } from 'antd';


export default function Produtos(){    


    const history = useHistory()


   async function handleSubmit(produto){
        api.post('/item', produto )
        .then((response) =>{
            if(response.status === 201){
                message.success('Produto criado com sucesso', 5, true);
                window.location.href='/produtos'
            }
        })
        .catch((err) => {
            message.warning("Aconteceu um erro inesperado" + err);
        })
    }

    return(
        <div className="produto__container">
            <p className='tituloAdd' >{<LikeOutlined  style={{color: "orange"}} />} Bem-vindo ao ListaCerta!</p>
            <p className='tituloAdd' >{<CheckCircleOutlined style={{color: "green"}} />} Adicione agora um novo produto ao seu carrinho!</p>
            <br/>
            <div className="produto__card__container">

        <Form
        name="basic"
        labelCol={{ span: 40 }}
        wrapperCol={{ span: 20 }}
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
        autoComplete="off"
        >
        
            <Form.Item
                label="Nome"
                name="name"
                rules={[{ required: true, message: 'Por favor, insira o nome do produto.' }]}
            >
                <Input  placeholder='Insira o nome do produto' />
            </Form.Item>

            <Form.Item
                label="Descrição"
                name="description"
                rules={[{ required: true, message: 'Por favor, insira a descrição.' }]}
            >
                <Input placeholder='Descrição do produto' />
            </Form.Item>

            <Form.Item
                label="Quantidade"
                name="quantity"
                rules={[{ required: true, message: 'Por favor, insira a quantidade.' }]}
                
            >
                <InputNumber placeholder='ex: "10"'/>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button icon={<CheckOutlined />} type="primary" htmlType="submit">
                Confirmar
                </Button>
            </Form.Item>
        </Form>
            </div>

        </div>
    )

}
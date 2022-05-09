import './styles.css'
import React,{useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import api from '../../services/api';
import { useHistory, useLocation } from 'react-router-dom'
import { EditOutlined, CheckOutlined } from '@ant-design/icons';



import { message,  Input, Button, InputNumber, } from 'antd';


export default function EditarProduto(){    

    const location = useLocation()
    const history = useHistory()

    const [produtoEdit, setProdutoEdit] = useState({})

    useEffect(() => {
       console.log(location.state)
       setProdutoEdit( {...location.state})
    }, [location])


   async function handleSubmit(produtoEdit){
        var url = window.location.pathname;
        var id = url.substring(url.lastIndexOf('/') + 1);  
        console.log(id);
        api.patch(`/item/${id}`, produtoEdit )
        .then((response) =>{
            if(response.status === 200){
                message.success('Editado com sucesso', 5, true);
                window.location.href ='/produtos';
            }
        })
        .catch((err) => {
            message.warning("Por favor, preencha todos os campos" + err);
        })
    }


    return(
        <div className="produto__container">
             <p>{<EditOutlined style={{color: "green"}} />} Editar novo produto</p>
            <br/>
            <div className='produto__edit'>

                <div className='produto__campo1'>
                    <span className='protudo__label'>NOME:</span>
                    <Input placeholder='*Nome do produto' value={produtoEdit?.name} onChange={(e) => 
                    { setProdutoEdit((produtoEdit) => {
                        return { ...produtoEdit, name: e.target.value };
                    });
            }} />
                </div>
            
                <div className='produto__campo2'>
                    <span className='protudo__label'>DESCRIÇÃO:</span>
                    <Input placeholder='*Descrição do produto' value={produtoEdit?.description} onChange={(e) => 
                    { setProdutoEdit((produtoEdit) => {
                        return { ...produtoEdit, description: e.target.value };
                    });
            }} />
                </div>

                <div className='produto__campo'>
                    <span className='protudo__label'>QUANTIDADE:</span>
                    <InputNumber placeholder='*ex: "10"' value={produtoEdit?.quantity} onChange={(e) => 
                    { setProdutoEdit((produtoEdit) => {
                        return { ...produtoEdit, quantity: e };
                    });
            }}/>
                </div>

                <Button type="primary" className='editar--btn' onClick={() =>handleSubmit(produtoEdit)}> {<CheckOutlined />}Confirmar</Button>
            </div>
            
            
        </div>
    )

}
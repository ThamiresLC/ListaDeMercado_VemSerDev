import React from "react";
import { useHistory, BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom'
import './App.css';
import { Menu, Layout, Divider, Row, Col  } from 'antd';
import LogoHeader from './pages/assets/header_market.png'  
import { PlusCircleOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import RouterPage from './routes'
import Produtos from './pages/Produtos'
import AdicionarProdutos from './pages/AdicionarProduto'


const { Header, Footer, Sider, Content } = Layout;

function App() {
  const history = useHistory()

  async function adicionarProdutos(){
    window.location.href = '/adicionar'
  }

  async function listarProdutos(){
    window.location.href = '/produtos'
  }


  return (
    <div className="main">
    <Router>
      <Layout className='main__content'>
          <Header className='header'>
            <img className="imgHeader" src={LogoHeader} height="60" width="60" />
            <span className="textHeader">ListaCerta</span>
          </Header>
          <Layout>
            <Sider className='menu'>
              <Menu className='menu__section'>
                <Menu.Item onClick={adicionarProdutos} key={1} icon={<PlusCircleOutlined style={{color: "orange"}}/>}>
                  Novos Produtos 
                </Menu.Item>
                <Divider type="vertical" />
                <Menu.Item onClick={listarProdutos} k key={2} icon={<ShoppingCartOutlined style={{color: "orange"}}/>}>
                  Seu Carrinho
                </Menu.Item>
              </Menu>
            </Sider>
            
              <Content className="body">
                <RouterPage />
              </Content>
           
          </Layout>
        <Footer className='footer'> &copy;Todos os direitos reservados.</Footer>
      </Layout>
    </Router>
    </div>
  );
}

export default App;

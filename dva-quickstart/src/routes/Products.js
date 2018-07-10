import React,{Component} from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';
import { Button,Input,Menu, Dropdown, Icon,Progress,Spin,Radio,Row, Col,Layout,Affix} from 'antd';

const { Header, Content, Footer } = Layout;
const RadioGroup = Radio.Group;
const ButtonGroup = Button.Group;
const antIcon = <Icon type="loading" style={{ fontSize: 48 }} spin />   
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const zxc = (
    <Menu>
      <Menu.Item key="1">1st menu item</Menu.Item>
      <Menu.Item key="2">2nd menu item</Menu.Item>
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>)

const menu = (
    
    <Menu> 
      <Menu.Item>1st menu item</Menu.Item>
      <Menu.Item>2nd menu item</Menu.Item>
      <SubMenu title="sub menu">
        <Menu.Item>3rd menu item</Menu.Item>
        <Menu.Item>4th menu item</Menu.Item>
      </SubMenu>
      <SubMenu title="disabled sub menu" disabled>
        <Menu.Item>5d menu item</Menu.Item>
        <Menu.Item>6th menu item</Menu.Item>
      </SubMenu>
    </Menu>
  );

  @connect(({ products }) => ({
    products,
  }))
  export default class Products extends Component {
    state = {
        loading: false,
        iconLoading: false,
      }
    
      enterLoading = () => {
        this.setState({ loading: true });
      }
    
      enterIconLoading = () => {
        this.setState({ iconLoading: true });
      }
 
    

    state = {
        percent : 10,
        sdfas:1
    }

    decline = () =>{
        this.setState(
            {
                percent:this.state.percent - 10
            }
        )
        
    }
    increase = () =>{
        this.setState(
            {
                percent:this.state.percent +10
            }
        )
        
    }

   handleDelete=(id) =>{
    this.props.dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  render() {
      return (
      <div style={{marginTop:0}}><div>
          <Dropdown overlay={zxc} trigger={['contextMenu']}>
    <span style={{ userSelect: 'none' }}>Right Click on Me</span>
  </Dropdown>,

          <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
    <Button>120px to affix top</Button>
  </Affix>
          
      <span>
        <Button type="primary" loading>
          Loading
        </Button>
        <Button type="primary" size="small" loading>
          Loading
        </Button>
        <br />
        <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
          Click me!
        </Button>
        <Button type="danger" icon="poweroff" loading={this.state.iconLoading} onClick={this.enterIconLoading}>
          Click me!
        </Button>
        <br />
        <Button shape="circle" loading />
        <Button type="primary" shape="circle" loading />
      </span>
    
  

          

      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="mail">
          <Icon type="mail" />Navigation One
        </Menu.Item>
        <Menu.Item key="app" disabled>
          <Icon type="appstore" />Navigation Two
        </Menu.Item>
        <SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
          <MenuItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
        </Menu.Item>
      </Menu>

  }
}
           
           <div>
    
    <Row type="flex">
      <Col span={6} order={4}>1 col-order-4</Col>
      <Col span={6} order={3}>2 col-order-3</Col>
      <Col span={6} order={2}>3 col-order-2</Col>
      <Col span={6} order={1}>4 col-order-1</Col>
    </Row>
  

    <Row>
    <Col xs={2} sm={4   } md={6} lg={8} xl={10}>Col</Col>
    <Col xs={20} sm={16} md={12} lg={8} xl={4}>Col</Col>
    <Col xs={2} sm={4} md={6} lg={8} xl={10}>Col</Col>
  </Row>,       
    
    <p>sub-element align right</p>
    <Row type="flex" justify="end">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>
    </div >
);
      <div>
    <Button type="primary"  shape="circle" icon="search" />
    <Button type="primary" icon="search">Search</Button>
    <Button shape="circle" icon="search" />
    <Button icon="search">Search</Button>
    <br />
    <Button shape="circle" icon="search" />
    <Button icon="search">Search</Button>
    <Button type="dashed" shape="circle" icon="search" />
    <Button type="dashed" icon="search">Search</Button>
  </div>
          <div style={{display: 'flex',flexDirection: 'column',alignItems:'center',marginTop:100}}>>
    
    <Spin size="large" indicator={antIcon} />
        
  </div>
      <Progress type="circle" percent={this.state.percent}/>
      <Progress type="circle" percent={this.state.percent}/>
      <ButtonGroup>
        <Button onClick={this.decline} icon="minus" />
        <Button onClick={this.increase} icon="plus" />
      </ButtonGroup>
    </div>
      
      <div style={{display: 'flex',flexDirection: 'column',alignItems:'center',marginTop:100}}>>
       <RadioGroup onChange={this.onChange} >
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
      </RadioGroup></div>
        <Dropdown overlay={menu}>    
            <span>菜单<Icon type="down" /></span>
        </Dropdown>
        <div style={{display: 'flex',flexDirection: 'column',alignItems:'center',marginTop:100}}>
        
            <Input style={{flex:1,width:300}} placeholder="账号" />
            <Input style={{flex:1,width:300}} placeholder="密码" />
            <Button style={{flex:1,width:100}}>登录</Button>
        </div>
    </div>


  );
}
}

// export default Products;

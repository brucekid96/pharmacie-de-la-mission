import React,{useState} from 'react';
import {ProjectFilled,DropboxSquareFilled,FundFilled,PieChartFilled,SettingFilled,PictureOutlined,MenuOutlined,CloseOutlined} from '@ant-design/icons';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import './Header.css'

const Header = () => {

  const [active,setActive] = useState(false)

  const activeNav = () => {
    setActive(!active)
  }
  return (
    <div className={active ? 'header' : 'header-mobile'}>

      <div className='menu-icon' onClick={activeNav}>
        
        {!active ? <MenuOutlined className='menu'/> : <CloseOutlined className='menu' />}
      </div>

      <nav>
        <ul className={active ? 'ul-item' : 'ul-item oicon'}>
          <li>
          <ProjectFilled className='icon' />
          <Link to='/'>Sell</Link>
          </li>

          <li>
          <DropboxSquareFilled className='icon'/>
          <Link to='/products'>Products</Link>
          </li>

          <li>
          <FundFilled className='icon'/>
          <Link to='/'>Stock</Link>
          </li>

         

          <li>
          <SettingFilled className='icon'/>
          <Link to='/'>Purchase</Link>
          </li>
          <li>
          <PieChartFilled className='icon'/>
          <Link to='/'>Report</Link>
          </li>

          <li>
          <PictureOutlined className='icon'/>
          <Link to='/'>Suppliers</Link>
          </li>

          <li>
          <PictureOutlined className='icon'/>
          <Link to='/addProduct'>Add Products</Link>
          </li>

          

        </ul>
      </nav>
      
    </div>
  )
}

export default Header

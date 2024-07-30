import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <section className="h-wrapper">
        <div className=" flexCenter paddings innerWidth h-container">
            <img src='./logo.png' alt='logo' className='logo' />

            <div className='flexCenter h-menu'>
                <a href=''> TRANG CHỦ </a>
                <a href=''> DỊCH VỤ </a>
                <a href=''> SẢN PHẨM </a>
                <a href=''> ĐẶT LỊCH </a>
                <a href=''> BLOG </a>
                <button className='button'> 
                    <a href=''> ĐĂNG NHẬP </a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Header;
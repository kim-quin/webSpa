// src/Home.js
import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [likeCount, setLikeCount] = useState(() => {
    const savedLikeCount = localStorage.getItem('likeCount');
    return savedLikeCount ? parseInt(savedLikeCount, 10) : 0;
  });

  const [viewCount, setViewCount] = useState(() => {
    const savedViewCount = localStorage.getItem('viewCount');
    return savedViewCount ? parseInt(savedViewCount, 10) : 0;
  });

  const handleLike = () => {
    const newLikeCount = likeCount + 1;
    setLikeCount(newLikeCount);
    localStorage.setItem('likeCount', newLikeCount);
  };

  useEffect(() => {
    const newViewCount = viewCount + 1;
    setViewCount(newViewCount);
    localStorage.setItem('viewCount', newViewCount);
  }, []);

  return (
    <div>
      <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
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

      <section className='title-wrapper'>
        <div className='paddings innerWidth flexCenter title-container'>
          
          {/*leftside*/}
          <div className='flexColStart title-left'>
            <div className='intro-title'>
              <div className='orange-circle'/>
              <h1>
                CHÀO MỪNG <br/> BẠN ĐẾN "QUINN'S BEAUTY"
              </h1>
            </div>

            <div className='flexColStart Intro-des'>
              <span>
                Quinn's Beauty sẽ giúp bạn giải tỏa áp lực cuộc giống.<br/> Tỏa sáng với nét đẹp tự nhiên.<br/>
                Trải nghiệm ngay!
              </span>
            </div>

            <div className="ggmap-bar">
              <i className="fas fa-map-marker-alt"></i> 
              <a href="https://maps.app.goo.gl/8txL89MP3NXfL6FG6" target="_blank" rel="noopener noreferrer"> 
                ẤP KINH 2A, LONG ĐỊNH, CHÂU THÀNH, TIỀN GIANG
              </a>
            </div>

            {/* Nút Like và số lượng người xem */}
            <div className="engagement-section">
              <div className="like-section">
                <div className="like-container">
                  <button className="like-btn" onClick={handleLike}>
                    <i className="fas fa-thumbs-up"></i> Lượt thích
                  </button>
                </div>
                <span className="like-count">{likeCount}</span>
              </div>

              <div className="view-section">
                <i className="fas fa-eye"></i> <span className="view-text">Lượt quan tâm</span>
                <span className="view-count">{viewCount}</span>
              </div>
            </div>

          </div>

          {/*rightside*/}
          <div className='flexCenter title-right'>
            <div className='image-container'>
              <img src='./title.jpg' alt='title'/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

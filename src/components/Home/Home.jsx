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

      <section className='Intro-spa'>
        <div className='about-us'>
        <img src='./intro-spa.jpg' alt='intro-spa' className='intro-image' />
          <div className='text-content'>
            <h2>QUINN'S BEAUTY</h2>
            <p>"Đắm mình trong không gian yên bình tại QUINN'S BEAUTY, bạn sẽ được thư giãn với những liệu trình massage truyền thống kết hợp hiện đại độc đáo.
             Với đôi bàn tay ma thuật của các chuyên viên, mọi căng thẳng, mệt mỏi sẽ tan biến, nhường chỗ cho cảm giác sảng khoái, thư thái. 
             <br/>Hãy đến với chúng tôi để trải nghiệm sự hòa quyện giữa thiên nhiên và con người."</p>
            <button className='button'>ĐẶT LỊCH NGAY</button>
          </div>
        </div>
      </section>

      <section className='combo'>
          <div className='best-choices'>
            <h2>COMBO ƯU ĐÃI ĐẶC BIỆT</h2>
            <h3>SỰ LỰA CHỌN HOÀN HẢO</h3>
            <div className='navigation'>
              <button className='nav-button'>{'<'}</button>
              <button className='nav-button'>{'>'}</button>
            </div>
            <div className='residencies'>
              <div className='residency'>
                <img src='combo1.jpg' alt='combo1' className='combo-image' />
                <div className='price'>$250k</div>
                <div className='name'>COMBO 90 PHÚT
               <span>
                <br/> GỘI DƯỠNG SINH + MASSAGE BODY(90PHÚT)
                <i>

                </i>

               </span>

               </div>
                
              </div>
              <div className='residency'>
                <img src='path-to-your-image2.jpg' alt='Asatti Garden City' className='residency-image' />
                <div className='price'>$66,353</div>
                <div className='name'>Asatti Garden City</div>
                <div className='address'>Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat</div>
              </div>
              <div className='residency'>
                <img src='path-to-your-image3.jpg' alt='Citralan Puri Serang' className='residency-image' />
                <div className='price'>$35,853</div>
                <div className='name'>Citralan Puri Serang</div>
                <div className='address'>Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten</div>
              </div>
              <div className='residency'>
                <img src='path-to-your-image1.jpg' alt='Aliva Priva Jardin' className='residency-image' />
                <div className='price'>$47,043</div>
                <div className='name'>Aliva Priva Jardin</div>
                <div className='address'>Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta</div>
              </div>
            </div>
           
          </div>
        </section>


    </div>
  );
}

export default Home;

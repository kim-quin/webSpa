import React, { useState, useEffect } from 'react';

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
    <div className="font-sans">
      <section className="bg-[#F6E6CB] h-40 flex items-center">
        <div className="flex justify-between items-center w-full px-5">
          <img src='./logo.png' alt='logo' className='w-36 h-36' />

          <div className='flex items-center space-x-4'>
            <a href=''>TRANG CHỦ</a>
            <a href=''>DỊCH VỤ</a>
            <a href=''>SẢN PHẨM</a>
            <a href=''>ĐẶT LỊCH</a>
            <a href=''>BLOG</a>
            <button className='bg-blue-500 text-white px-4 py-2 rounded'>
              <a href=''>ĐĂNG NHẬP</a>
            </button>
          </div>
        </div>
      </section>

      <section className='relative bg-[#F6E6CB] py-8 '>
        <div className='flex justify-between items-center px-20 relative '>
          <div className='absolute left-[18%] top-[3%] w-16 h-16 bg-orange-500 rounded-full ' />
          <div className='space-y-8'>
            <div className='relative z-10 mt-[-50%] mb-[-10px]'>
              <h1 className='font-semibold text-4xl leading-tight'>
                CHÀO MỪNG <br /> BẠN ĐẾN "QUINN'S BEAUTY"
              </h1>
            </div>

            <div className='text-xl font-medium'>
              <span>
                Quinn's Beauty sẽ giúp bạn giải tỏa áp lực cuộc sống.<br /> Tỏa sáng với nét đẹp tự nhiên.<br />
                Trải nghiệm ngay!
              </span>
            </div>
            <div className="flex items-center  mb-[-20px] ">
              <i className="fas fa-map-marker-alt text-blue-500 text-2xl mr-2" /> 
              <a href="https://maps.app.goo.gl/8txL89MP3NXfL6FG6" target="_blank" rel="noopener noreferrer"> 
                ẤP KINH 2A, LONG ĐỊNH, CHÂU THÀNH, TIỀN GIANG
              </a>
            </div>

            <div className="flex items-center space-x-10 mt-0">
              <div className="flex items-center">
                <button className="bg-blue-500 text-white px-3 py-2 rounded-l" onClick={handleLike}>
                  <i className="fas fa-thumbs-up mr-2"></i> Lượt thích
                </button>
                <span className="bg-blue-500 text-white px-3 py-2 rounded-r">{likeCount}</span>
              </div>

              <div className="flex items-center border-2 border-blue-500 rounded bg-blue-500 text-white px-3 py-2">
                <i className="fas fa-eye mr-2"></i> <span>Lượt quan tâm</span>
                <span className="ml-2">{viewCount}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-83 h-83 rounded-full">
              <img src="./title.jpg" alt="title" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className='flex justify-center items-center py-5 bg-[#A0937D] text-white'>
        <div className='flex max-w-5xl'>
          <img src='./intro-spa.jpg' alt='intro-spa' className='w-80 rounded-xl mt-[-10px] mr-10' />
          <div className='p-5 mt-[-100px]'>
            <h2 className='text-5xl mb-4 text-black'>QUINN'S BEAUTY</h2>
            <p className='text-xl mb-6'>
              "Đắm mình trong không gian yên bình tại QUINN'S BEAUTY, bạn sẽ được thư giãn với những liệu trình massage truyền thống kết hợp hiện đại độc đáo.
              Với đôi bàn tay ma thuật của các chuyên viên, mọi căng thẳng, mệt mỏi sẽ tan biến, nhường chỗ cho cảm giác sảng khoái, thư thái. 
              <br />Hãy đến với chúng tôi để trải nghiệm sự hòa quyện giữa thiên nhiên và con người."
            </p>
            <button className='bg-blue-500 text-white px-4 py-2 rounded'>ĐẶT LỊCH NGAY</button>
          </div>
        </div>
      </section>

      <section className='py-5 bg-white'>
        <div className='text-center'>
          <h2 className='text-[#ff7b54] text-2xl'>COMBO ƯU ĐÃI ĐẶC BIỆT</h2>
          <h3 className='text-[#1a1a1a] text-4xl mt-2'>SỰ LỰA CHỌN HOÀN HẢO</h3>
          <div className='flex justify-between items-center mt-5'>
            <button className='nav-button'>{'<'}</button>
            <button className='nav-button'>{'>'}</button>
          </div>
          <div className='flex justify-between mt-5'>
            <div className='flex flex-col items-center w-1/5 bg-[#f9f9f9] p-3 rounded-lg shadow-lg'>
              <img src='combo1.jpg' alt='combo1' className='w-4/5 rounded-lg mb-3 object-cover' />
              <div className='text-[#ff7b54] text-xl'>$250k</div>
              <div className='text-[#1a1a1a] text-lg mt-2'>COMBO 90 PHÚT
                <span>
                  <br /> GỘI DƯỠNG SINH + MASSAGE BODY(90PHÚT)
                </span>
              </div>
            </div>
            {/* Add other combos similarly */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

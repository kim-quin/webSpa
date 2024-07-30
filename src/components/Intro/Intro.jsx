import React from 'react'
import "./Intro.css"
const Title = () => {
  return (
    <section className='title-wrapper'>
        <div className='paddings innerWidth flexCenter title-container '>
            
            {/*leftside*/}
            <div className='title-left'>
                <div className='intro-title'>
                    <h1>
                        CHÀO MỪNG <br/> BẠN ĐẾN "QUINN'S BEAUTY"
                    </h1>
                </div>

                <div className='flexColStart Intro-des'>
                    <span>
                    Nâng niu sắc đẹp, chăm sóc từ tâm.
                    </span>

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
  )
}

export default Title
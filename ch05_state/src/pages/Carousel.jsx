import React from 'react';

const images = [
    1,2,3,4,5
];

export default function Carousel() {
    const [current, setCurrent] = React.useState(0);
    console.log(`before current: ${current}`);

    const nextSlide = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    }

    return (
        <div className={'grid-col-12'}>
            <div onClick={nextSlide}>다음 슬라이드</div>
            <div onClick={prevSlide}>이전 슬라이드</div>
            <div>현재 상태값 : {current}</div>
            {/*{images.map((image, index) =>
                    current === index && (
                        <div key={image} className="slide">
                            <img src={image} alt="images" />
                        </div>
                    )
            )}*/}
        </div>
    );
}
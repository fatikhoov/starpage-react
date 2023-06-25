import Slider from 'react-slick'

export const CenterMode = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
  }

  return (
    <div>
      <h2>Center Mode</h2>
      <Slider {...settings}></Slider>
    </div>
  )
}

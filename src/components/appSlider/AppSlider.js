import './appSlider.scss'

import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import img1 from '../../img/slide1.jpg';
import img2 from '../../img/slide2.jpg';
import img3 from '../../img/slide3.jpg';
import img4 from '../../img/slide4.jpg';

const AppSlider = () => {
    return (
        <>
            <main>
                <Slideshow/>
                <div className="text1">
                    <p>Մենք GS Production-ի կրեատիվ խումբն ենք։ Մեր ամենասիրելի զբաղմունքը հարսանեկան արարողություններին
                        մասնակցելն ու
                        էմոցիոնալ պահերը ֆիքսելն է։ Չնայած այն բանին, որ մեր խումբը համալրված է էմոցիոնալ երիտասարդ
                        մասնագետներով, մենք արդեն
                        իսկ ունենք աշխատանքային բազմամյա փորձ, և դե իհարկե գոհունակ հաճախորդներ, որոնց հետ հետադարձ կապը
                        շարունակաբար պահում
                        ենք։</p>
                </div>
            </main>
        </>
    )
}

const images = [
    img1, img2, img3, img4
]

const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true
  };

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Zoom{...zoomOutProperties}>
          {
            images.map((each, index) => <img key={index} className='slide__img' alt='' src={each} />)
          }
        </Zoom>
      </div>
    )
}


export default AppSlider;
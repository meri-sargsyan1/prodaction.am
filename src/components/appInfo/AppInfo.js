import './appInfo.scss';
import img1 from '../../img/img1.jpg';
import img2 from '../../img/img2.jpg';
import img3 from '../../img/img3.jpg';

const AppInfo = () => {
    return (
        <>
            <div className="fvf">
                <div className="foto">
                    <div className="klor1">
                        <img src={img1} alt=""/>
                    </div>
                    <div className="vern1">
                        <b>Ֆոտո Նկարահանում</b>
                    </div>
                    <p>Մեր ստեղծագործ ու փորձառու նկարահանող խումբը Ձեզ հետ է ամենակարևոր պահերին՝ ֆիքսելու չկրկնվող կադրերն ու
                        ստեղծելու
                        անմոռանալի հիշողություններ։</p>
                </div>
                <div className="video">
                    <div className="klor2">
                        <img src={img2} alt=""/>
                    </div>
                    <div className="vern2">
                        <b>Վիդեո Նկարահանում</b>
                    </div>
                    <p>Մեր օպերատորների աչքից ոչինչ չի վրիպում, որովհետև նրանք զինված են հզոր նկարահանող սարքերով և սուր
                        աչքերով:</p>
                </div>
                <div className="film">
                    <div className="klor3">
                        <img src={img3} alt=""/>
                    </div>
                    <div className="vern3">
                        <b>Հարսանեկան Ֆիլմեր</b>
                    </div>
                    <p>Մենք ստեղծում ենք հարսանեկան ֆիլմեր, որպեսզի Դուք կարողանաք հիշել և վերապրել Ձեր կյանքի կարևոր օրերից
                        մեկը դրա ավարտից
                        հետո։ Կարևոր է հիշարժան դարձնել այդ օրվա յուրաքանչյուր պահը։</p>
                </div>
            </div>
        </>
    )
}

export default AppInfo;
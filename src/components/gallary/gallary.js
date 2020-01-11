import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'
import bed1 from "../image/bed1.jpg"

const Gallary = () => {
    const handleOnDragStart = (e) => e.preventDefault()
    return (
        <AliceCarousel mouseTrackingEnabled>
            <div className="container col card bg-light ">
                <div className="row card-body">
                    <div className="col">  
                        <img src={bed1} className="yours-custom-class" />
                        <p> Mr Emmanuel Eseke (President)</p>
                    </div>
                    <div className="col">
                        <img src={bed1} className="yours-custom-class" />
                        <p> Mr Anthony Okwube (Vice President)</p>
                    </div>
                    <div className="col">
                        <img src={bed1} className="yours-custom-class" />
                        <p> Mr jonathan Onwugbonu (Sec Gen )</p>
                    </div>


                </div>
                
            </div>
            <div className="container card bg-light">
                <div className="row card-body">
                    <div className="col">
                        <img src={bed1} className="yours-custom-class" />
                        <p> Joseph Akogor ( Fin sec)</p>
                    </div>
                    <div className="col">
                        <img src={bed1} className="yours-custom-class" />
                        <p> Nwabueze Elubiaozo (Treasurer) </p>
                    </div>
                    <div className="col">
                        <img src={bed1} className="yours-custom-class" />
                        <p>  Egoba Andrew (Auditor) </p>
                    </div>
                </div>

            </div>
        </AliceCarousel>
    )
}
export default  Gallary

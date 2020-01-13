import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'
import bed1 from "../image/bed1.jpg"

const Gallary2 = () => {
    const handleOnDragStart = (e) => e.preventDefault()
    return (
        <AliceCarousel mouseTrackingEnabled>
           
            <div className="container col card bg-light ">
                <div className="row card-body">
                    <div className="col">
                        <p> Peter Onyejose  </p>
                        <p> The present Odionwere of iru</p>
                    </div>
                    <div className="col">
                        <p> Okuwe    </p>
                        <p> from 2000 - 2000</p>
                    </div>
                    <div className="col">
                        <p> Ikwekwe  </p>
                        <p> 2013-2015</p>
                    </div>


                </div>

            </div>
            <div className="container card bg-light">
                <div className="row card-body">
                    <div className="col">
                        <p> Okube Benjamin  </p>
                        <p> 2000-2000</p>
                    </div>
                    <div className="col">
                        <p> Okatupor  </p>
                        <p> 2007 </p>
                    </div>
                    <div className="col">
                        <p> Udwa  </p>
                        <p> 2005 </p>
                    </div>
                </div>

            </div>
        </AliceCarousel>
    )
}
export default Gallary2

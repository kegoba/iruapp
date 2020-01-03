const HomeSlide = ()=>{
    const handleOnDragStart = (e) => e.preventDefault()
    return (

        <div className="container">
            <div className="row">
                <div className="col">
                    <AliceCarousel mouseTrackingEnabled>
                        <img src="/img1" onDragStart={handleOnDragStart} className="yours-custom-class" />
                        <img src="/img2" onDragStart={handleOnDragStart} className="yours-custom-class" />
                        <img src="/img3" onDragStart={handleOnDragStart} className="yours-custom-class" />

                    </AliceCarousel>
                </div>
            </div>
        </div>
        
    )
}


//export default HomeSlide
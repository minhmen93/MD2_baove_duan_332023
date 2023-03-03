import Carousel from 'react-bootstrap/Carousel';

function Slide() {
    return (
        
        <Carousel>
            
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src="https://pubcdn.ivymoda.com/files/news/2023/02/18/fd302db458755d3bde39cbbe6c9c9be9.jpg"
                    alt="First slide"
                />
              
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src="https://pubcdn.ivymoda.com/files/news/2023/02/21/25504e9da8e71056c53a059e8f6b9b58.jpg"
                    alt="Second slide"
                />
               
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src="https://pubcdn.ivymoda.com/files/news/2023/02/16/e483085312cc49eef613eeaef7ecdd5f.jpg"
                    alt="Third slide"
                />
               
            </Carousel.Item>
        </Carousel>
    );
}

export default Slide;
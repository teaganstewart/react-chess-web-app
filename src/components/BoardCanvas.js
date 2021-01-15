import { resize } from 'ionicons/icons';
import React, { useRef, useEffect } from 'react'

const BoardCanvas = props => {
    
    const scale = (a, b, max, min, x) => { 
        return (((b - a) * (x - min)) / (max - min)) + a;
    }

    const canvasRef = useRef(null)

    useEffect(() => { window.resizeTo(100,100)}, []);
    useEffect(() => {

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        const resizeCanvas = () => { 
        
            if (window.innerWidth > 640) {
                canvas.width = 640 / scale(1.22, 1.26, 397, 568, 530);
                canvas.height = canvas.width;
            }
            else {

                canvas.width = window.innerWidth / scale(1.19, 1.26, 397, 640, canvas.width);
                canvas.height = canvas.width;
            }
            
            
            let xOffset = 0; let yOffset = 0;

            for (let i = 0; i < 8; i++) {
                for (let j = 0; j < 8; j++) {
                    if ((i + j) % 2 == 0) {
                        context.fillStyle = 'white';
                    }
                    else {
                        context.fillStyle = 'pink';
                    }
                    context.fillRect(xOffset, yOffset, canvas.width / 8, canvas.height / 8);
                    xOffset += (canvas.width / 8);
                    
                }

                if (i % 2 == 0) context.fillStyle = '#FFFFFF';
                else context.fillStyle = '#000000';
                yOffset += (canvas.height / 8);
                xOffset = 0; 
                window.removeEventListener('click', resizeCanvas, true);

            }
        }

        canvas.width = 300;
        canvas.height = 400;

        context.fillText("Click to start game!", 20, 20)

        window.addEventListener('click', resizeCanvas, false);
        window.addEventListener('resize', resizeCanvas, true);
        
        
    }, [])

    return (<canvas ref={canvasRef} {...props} />);
}

export default BoardCanvas
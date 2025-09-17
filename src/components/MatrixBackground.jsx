import { useEffect, useRef } from 'react';

const symbols = 'アァカサタナハマヤャラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZⵜⴰⵎⴰⵣⵉⵖⵜⵜⴰⵎⴰⵣⵉⵗⵜ ⵝⴰⵎⴰⵣⵉⵗⵝ';

const MatrixBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();

    const fontSize = 16;
    let columns = Math.floor(canvas.width / fontSize);
    let drops = Array.from({ length: columns }, () => Math.random() * canvas.height);

    const draw = () => {
      if (!context) return;
      context.fillStyle = 'rgba(5, 7, 13, 0.08)';
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.fillStyle = 'rgba(0, 245, 212, 0.8)';
            context.font = fontSize + 'px IBM Plex Mono, monospace';

      for (let i = 0; i < drops.length; i += 1) {
        const text = symbols.charAt(Math.floor(Math.random() * symbols.length));
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        context.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.9;
      }
    };

    let animationFrame;
    const render = () => {
      draw();
      animationFrame = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      resize();
      columns = Math.floor(canvas.width / fontSize);
      drops = Array.from({ length: columns }, () => Math.random() * canvas.height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="matrix-overlay" />;
};

export default MatrixBackground;



(() => {
    const cnv = document.querySelector(`canvas`);
    const ctx = cnv.getContext(`2d`);
  
    
    let centerX = 0;
    let centerY = 0;
    function init() {
      cnv.width  = innerWidth + 200;
      cnv.height = innerHeight + 200;
  
      centerX = cnv.width  / 2;
      centerY = cnv.height / 2;
    }
    init();
  
    const numberOfRings     = 8;
    const ringRadiusOffset  = 30;
    const ringRadius        = 60;
    const waveOffset        = 19;
    const velocity          = 0.5;
    // const colors            = [`#771111`, `#bb1111`, `#ff1111`];
    let startAngle          = 0;
  
    function updateRings() {
      for (let i = 1; i <= numberOfRings; i++) {
        let radius      = i * ringRadiusOffset + ringRadius;
        let offsetAngle = i * waveOffset * Math.PI / 180;
        let alpha       = i / numberOfRings;
        drawRing(radius, alpha, offsetAngle);
      }
  
      startAngle >= 360? startAngle = 0 : startAngle += velocity;
    }
  
    const maxWavesAmplitude = 36;
    const numberOfWaves     = 2;
  
    function drawRing(radius, alpha, offsetAngle) {
      ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
      ctx.lineWidth   = 2;
  
      ctx.beginPath();
      
      for (let j = -180; j < 180; j++) {
        let currentAngle  = (j + startAngle) * Math.PI / 180;
        let displacement  = 0;
        let now = Math.abs(j);
  
        if (now > 30) {
          displacement = (now - 30) / 120;
        }
  
        if (displacement >= 1) {
          displacement = 1;
        }
  
        let waveAmplitude = radius + displacement * Math.sin((currentAngle + offsetAngle) * numberOfWaves) * maxWavesAmplitude;
        let x = centerX + Math.cos(currentAngle) * waveAmplitude;
        let y = centerY + Math.sin(currentAngle) * waveAmplitude;
        j > -180? ctx.lineTo(x, y) : ctx.moveTo(x, y);
  
      }
      ctx.closePath();
      ctx.stroke();
    }
  
    function loop() {
      cnv.width |= 0; // ctx.clearRect(0, 0, cnv.width, cnv.height);
      updateRings();
      requestAnimationFrame(loop);
    }
    loop();
  
    window.addEventListener(`resize`, init);
  
  })();
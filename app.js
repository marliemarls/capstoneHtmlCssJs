const playBtn = document.getElementById('playBtn');


const wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#4F4A85',
    progressColor: '#383351',
    barWidth: 4,
    responsive: true,
    height: 90,
    barRadius: 4,
  })

  wavesurfer.load('./audio/fsdfvs.wav');

  const togglePlayPause = () => {
    wavesurfer.playPause();
    playBtn.src = wavesurfer.isPlaying() 
      ? './img/pause.png'
      : './img/play-button-icon-png-18919.png';
  };
  
  playBtn.addEventListener('click', togglePlayPause);
  
  wavesurfer.on('finish', () => {
    playBtn.src = './img/play-button-icon-png-18919.png';
  });
const playBtn = document.getElementById('playBtn');


const wavesurfer1 = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#4F4A85',
    progressColor: '#383351',
    barWidth: 4,
    responsive: true,
    height: 90,
    barRadius: 4,
  })

  wavesurfer1.load('./audio/jesus_CHRIST.mp3');

  const togglePlayPause = () => {
    wavesurfer1.playPause();
    playBtn.src = wavesurfer1.isPlaying() 
      ? './img/pause.png'
      : './img/play-button-icon-png-18919.png';
  };
  
  playBtn.addEventListener('click', togglePlayPause);
  
  wavesurfer1.on('finish', () => {
    playBtn.src = './img/play-button-icon-png-18919.png';
  });
  
  const wavesurfer2 = WaveSurfer.create({
    container: '#waveform2',
    waveColor: '#4F4A85',
    progressColor: '#383351',
    barWidth: 4,
    responsive: true,
    height: 90,
    barRadius: 4,
});

  // wavesurfer2.load('./audio/fsdfvs.wav');

  // const togglePlayPause2 = () => {
  //   wavesurfer2.playPause();
  //   playBtn.src = wavesurfer2.isPlaying() 
  //     ? './img/pause.png'
  //     : './img/play-button-icon-png-18919.png';
  // };

  // playBtn.addEventListener('click', togglePlayPause2);

  // wavesurfer2.on('finish', () => {
  //   playBtn.src = './img/play-button-icon-png-18919.png';
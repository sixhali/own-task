const player = new MusicPlayer(musicList)
const musicContainer = document.querySelector('.music-container')
const musicimg = document.querySelector("#music-img")
const musicaudio = document.querySelector("#audio")
const musicTitle = document.querySelector(".music-detalis .title")
const musicSinger = document.querySelector(".music-detalis .singer")
const musicPrev = document.querySelector(".controls .fa-solid:nth-child(1)")
const musicPlay = document.querySelector(".controls .fa-solid:nth-child(2)")
const musicNext = document.querySelector(".controls .fa-solid:nth-child(3)")

const progress = document.querySelector('.progress')
const first_Time = document.getElementById('first-time')
const last_Time = document.getElementById('last-time')

const progressBarr = document.getElementById('progress-barr')

const voice_control = document.querySelector('.voice-control')
const voice_Icon = document.querySelector('.volume')
const progress_barr_voice = document.getElementById('progress-barr-voice')

let music = player.getMusic()



window.addEventListener('load',()=>{
    let music = player.getMusic()
    disPlayMusic(music)
})

const disPlayMusic=(music)=>{
    musicTitle.innerText = music.getname()
    musicimg.src = 'assets/img/' + music.img
    audio.src = 'assets/music/' + music.file
    console.log(musicimg);
    
}


musicPlay.addEventListener('click',()=>{
    const isMusicPlay=musicContainer.classList.contains('isPlay')
    isMusicPlay ? pauseMusic() : playMusic()
})

const pauseMusic = ()=>{
    musicContainer.classList.remove('isPlay')
    musicPlay.className='fa-solid fa-play'
    audio.pause()
}

musicPrev.addEventListener('click',()=>{
    player.previousMusic()
    let musicPrevius = player.getMusic()
    disPlayMusic(musicPrevius)
    
})

const playMusic = ()=>{
    musicContainer.classList.add('isPlay')
    musicPlay.className='fa-solid fa-pause'
    audio.play()
}

musicNext.addEventListener('click',()=>{
    player.nextMusic()
    let musicNext = player.getMusic()
    disPlayMusic(musicNext)
    
})


let calculateTime = (totalsecond)=>{
    const minute = Math.floor(totalsecond / 60 )
    const second = Math.floor(totalsecond % 60 )
    const updateSecond = second < 10 ? `0${second}` : `${second}`
    const result = `${minute}:${updateSecond}`
    return result ; 
}

audio.addEventListener('loadedmetadata',()=>{
    last_Time.innerText=calculateTime(audio.duration)
    progressBarr.max=Math.floor(audio.duration)
    
})

audio.addEventListener("timeupdate",()=>{
    progressBarr.value=Math.floor(audio.currentTime);
    first_Time.innerText = calculateTime(progressBarr.value)
})

progressBarr.addEventListener('input',()=>{
    const seekTime = progressBarr.value
    first_Time.textContent=calculateTime(seekTime)
    audio.currentTime=seekTime
})

let voiceSituation = 'voice'

voice_Icon.addEventListener('click',()=>{
    if(voiceSituation === 'voice'){
        audio.muted = true
        voiceSituation = 'silent'
        voice_Icon.className='fa-solid fa-volume-xmark'
        progress_barr_voice.value = 0;
    }else{
        audio.muted=false
        voiceSituation = 'voice'
        voice_Icon.className='fa-solid fa-volume-high'
        progress_barr_voice.value = 100;
    }
    
})


progress_barr_voice.addEventListener('input',(e)=>{
    const value = e.target.value
    audio.volume=value/100

    if(value == 0){
        audio.muted = true
        voiceSituation = 'silent'
        voice_Icon.className='fa-solid fa-volume-xmark'
        
    }else if (value <= 30 ){
        voiceSituation = 'voice'
        audio.muted=false
        voice_Icon.className='fa-solid fa-volume-low'
    }else{
        audio.muted=false
        voiceSituation = 'voice'
        voice_Icon.className='fa-solid fa-volume-high'
        
        
    }
    
})
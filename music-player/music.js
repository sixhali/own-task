class Music {
    constructor(title,singer,img,file){
        this.title = title
        this.singer = singer
        this.img = img
        this.file = file
    }

    getname(){
        return this.title + ' ' + this.singer
    }
    


}


const musicList = [
    new Music("Uncover", "Zara Larson","1.jpeg","1.mp3"),
    new Music("Skyfall", "Adele","2.jpeg","2.mp3"),
    new Music("You're Losing Me","Taylor Swift","3.jpeg","3.mp3"),
    new Music("Daylight", "David Kushner","4.jpeg","4.mp3"),
    new Music("Who I Am", "Alan Walker","5.jpeg","5.mp3"),
    new Music("Halo", "Beyoncé","6.jpeg","6.mp3"),
    new Music("Control ", "Zoe Wees","7.jpeg","7.mp3"),
    new Music("Stargazing  ", "Myles Smith","8.jpeg","8.mp3"),
]
import img1 from "./static/img1.jpg"
import img2 from './static/img2.jpg'
import img3 from './static/img3.jpg'
import img4 from './static/img4.jpg'
import sound1 from './static/sound1.mp3'
import sound2 from './static/sound2.mp3'
import video1 from './static/video1.mp4'

const gallery = [
    {
        res: img1,
        title: "Rocks",
        type: "image"
    },
    {
        res: img2,
        title: "Road",
        type: "image"
    },
    {
        res: img3,
        title: "Waterfall",
        type: "image"
    },
    {
        res: img4,
        title: "Nature",
        type: "image"
    },
    {
        res: sound1,
        title: "Bride-Mumiy Troll",
        type: "sound"
    },
    {
        res: sound2,
        title: "Fantastica-Mumiy Troll",
        type: "sound"
    },
    {
        res: video1,
        title: "Yoga",
        type: "video"
    }
]

for ( let i =0; i < gallery.length; i++) {
    if (gallery[i].type === 'image') {
        const img = new Image()
        img.src = gallery[i].res

        document.querySelector('.cardBox').insertAdjacentHTML('beforeend', '<div class="card"></div>')

        document.querySelectorAll('.card')[i].appendChild(img)
        document.querySelectorAll('.card')[i].insertAdjacentHTML('beforeend', gallery[i].title)

    }
    else if (gallery[i].type === 'sound') {
        const sound = new Audio(gallery[i].res)
        sound.controls = true

        document.querySelector('.cardBox').insertAdjacentHTML('beforeend', '<div class="card"></div>')

        document.querySelectorAll('.card')[i].appendChild(sound)
        document.querySelectorAll('.card')[i].insertAdjacentHTML('beforeend', gallery[i].title)

    }
    else if (gallery[i].type === 'video') {
        // const video = new VideoPlaybackQuality()
        // video.src = gallery[i].res
        // video.controls = true

        document.querySelector('.cardBox').insertAdjacentHTML('beforeend', '<div class="card"></div>')
        document.querySelectorAll('.card')[i].insertAdjacentHTML('beforeend', '<video controls class="video" src="'+ gallery[i].res +'"}></video>')

        // document.querySelectorAll('.card')[i].appendChild(video)
        document.querySelectorAll('.card')[i].insertAdjacentHTML('beforeend', gallery[i].title)

    }
}

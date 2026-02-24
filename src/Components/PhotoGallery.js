import React from 'react'
import './PhotoGallery.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function PhotoGallery() {
    return (
        <div className='photogallery-container'>
            <h1 className='photogallery-title'>Photo Gallery</h1>
            <div className="photogallery-images">
                <img src="https://th.bing.com/th/id/OIP.Ds8VUEcjWxz3xE-ZXThRpQHaL0?w=197&h=315&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt=''/>
                <img src="https://th.bing.com/th/id/OIP.1zsamHmtwTBCc0ifXbjlLwHaJi?w=208&h=268&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt=''/>
                <img src="https://th.bing.com/th/id/OIP.Tmn7zqpAHO3_DngcfpOHpAHaJb?w=208&h=265&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt=''/>
                <img src="https://th.bing.com/th/id/OIP.7zQkhzzQSrGFUzSGKIGZNgDeEs?w=183&h=247&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt=''/>
                <img src="https://th.bing.com/th/id/OIP.QAd9o1DSXlY8GixYc__HYwHaLb?w=201&h=310&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt=''/>
                <img src="https://th.bing.com/th/id/OIP.wQr26C4XWDEx-abvJk-hWwAAAA?w=200&h=311&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt=''/>
                <img src="https://th.bing.com/th/id/OIP.zxcyyIffKOsIhekhHt1OdQHaJl?w=208&h=270&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt=''/>
                <img src="https://th.bing.com/th/id/OIP.Drg_nUjK9rFTQz46Pr4tDQAAAA?w=208&h=277&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt=''/>
                <img src="https://th.bing.com/th/id/OIP.-NSL-9dnl-vQtJyuyrxWJQHaJl?w=208&h=270&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt=''/>
                <img src="https://th.bing.com/th/id/OIP.LNdeRAGF--hpaYT7yUMydAAAAA?w=208&h=297&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt=''/>
            </div>
            <button>VIEW MORE<ArrowForwardIosIcon style={{fontSize:20}}/></button>
        </div>
    )
}

export default PhotoGallery
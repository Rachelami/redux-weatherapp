import styled from 'styled-components'

export const AppWrap = styled.div`
    min-height: 100vh;
    text-align: center;
    padding-bottom: 10px;
    ${props => {
        if (props.dark) {
            return `background-image: url('https://cutewallpaper.org/21/gif-as-a-wallpaper/Full-HD-GIF-Desert-Night-Lights-3566-Wallpapers-and-Free-.gif');
            background-size: cover;`
        } else {
            // return `background-image: url('https://66.media.tumblr.com/6257d9eafda6bc1bdb959f9574ee7100/tumblr_noyklal2ig1t2yugzo1_1280.gifv');`
            return `background-image: url('https://i.pinimg.com/originals/8b/7f/bc/8b7fbc2e623720393ad7ffa7e4896eac.gif');`
        }
    }}
`
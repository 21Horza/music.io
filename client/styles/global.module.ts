import {createGlobalStyle} from 'styled-components'

export const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Audiowide&family=Orbitron:wght@500&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    background-color: #181818;
}

img {
    object-fit: cover;
}

body {
    font-family: 'Audiowide', cursive;
    font-family: 'Orbitron', sans-serif;
}

h1, h2, h3, h4, h5 {
    font-weight: 600;
}

button {
    cursor: pointer;
    border: none;
    font-family: 'Audiowide', cursive;
    font-family: 'Orbitron', sans-serif;
}

input, textarea {
    border: none;
    font-family: 'Audiowide', cursive;
    font-family: 'Orbitron', sans-serif;

}
`
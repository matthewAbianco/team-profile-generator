const CSS = `
html, body {
    max-width: 100% !important;
    overflow-x: hidden !important;
}

body {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.banner-bar {
    background-color: red;
    width: 100%;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
}

h1 {
    font-family:Arial, Helvetica, sans-serif;
    font-size: 10vw;
    font-color: red;
}

p {
    font-family:Arial, Helvetica, sans-serif;
    position: relative;
    left: 12px;
}

h2 {
    font-family:Arial, Helvetica, sans-serif;
    position: relative;
    font-size: 17px;
    left: 12px;
}

.member-card {
    width: 250px;
    height: 34vh;
    margin-bottom: 5vh;
    margin-right: 5vh;
    background-color: rgb(240, 238, 238);
    border-top-left-radius: 10px;
}

.card-container {
    position: absolute;
    top: 26vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 60vw;
}

.card-top {
    background-color: lightskyblue;
    width: 250px;
}

.card-bottom {
    display: flex;
    flex-direction: column;
    align-content: center;
}
`

module.exports = CSS;
import theme from '../../common/theme'

const app = {
    display: 'flex'
}

const leftNavStyle = {
    display: 'flex',
    height: '100vh',
    width: 70,
    flexDirection: 'column',
    backgroundColor: theme.backgroundColor
}

const box = {
    backgroundColor: theme.boxBackgroundColor,
    boxShadow: 'rgba(0, 0, 0, 0.28) 0px 0px 5px'

}


const graph = {
    overflow: 'auto',
    width: '100%',
    height: '100vh',
}


export default {
    app,
    leftNavStyle,
    box,
    graph
}
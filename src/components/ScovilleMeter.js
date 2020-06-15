import React, { Component } from 'react';
import injectSheet from 'react-jss';
import Pepper from '../images/pepper.svg'
import fire from '../images/fire.svg'


const levels = []
for (let i = 1; i <= 11; i++) {
    const image = require(`../images/${i.toString().padStart(2, '0')}.svg`)
    levels.push(image)
}
levels.push(fire)


const styles = {
    meter: {
        background: "red",
        width: '200px',
        height: '200px'
    }
}
class ScovilleMeter extends Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.meter}>
                <img src={Pepper} alt='pepper-outline' />
                {levels.map(level => <img src={level} alt="level" key={level} />)}
            </div>
        )
    }
}
export default injectSheet(styles)(ScovilleMeter)

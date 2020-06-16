import React, { useState, useEffect } from 'react';
import injectSheet from 'react-jss';
import PropsTypes from 'prop-types'





import Pepper from '../images/pepper.svg'
import fire from '../images/fire.svg'


const levels = []
for (let i = 1; i <= 11; i += 1) {
    const image = require(`../images/${i.toString().padStart(2, '0')}.svg`)
    levels.push(image)
}


const styles = {
    container: {
        display: 'inline-flex',
        flexDirection: 'column',
        height: '400px'
    },
    meter: {
        position: 'relative',
        height: '100%'
    },
    level: {
        position: 'absolute',
        height: "100%",
        width: "auto"
    },
    blink_me: {
        animation: 'blinker 1s cubic-bezier(0, 2.25, 0, 2.25) infinite',
    },
    text: {
        color: 'red',
        textAlign: 'center',
        fontSize: '2em'
    }
}
const mins = [0, 2201, 4001, 9001, 30001, 40001, 71001, 135600, 357000, 625001, 1000001]

const getLevels = (scovilles) => {
    const allLevels = levels.filter((level, i) => {
        return scovilles >= mins[i]
    })
    if (scovilles >= 1000001) {
        allLevels.push(fire)
    }
    return allLevels
}





const ScovilleMeter = ({ classes, scovilles, height }) => {
    const allLevels = getLevels(scovilles);
    const [displayedLevels, setDisplayedLevels] = useState([]);
    useEffect(() => {
        if (displayedLevels.length !== allLevels.length) {
            setTimeout(() => {
                const levelsToShow = allLevels.slice(0, displayedLevels.length + 1)
                setDisplayedLevels(levelsToShow)
            }, 300)
        }
    })




    return (
        <div className={classes.container} style={{ height: `${height}px`, width: `${0.58 * height}px` }}>
            <div className={classes.meter}>
                <img src={Pepper} alt='pepper-outline' className={classes.level} />
                {
                    displayedLevels.map((level, i) => (
                        i === 11
                            ? (
                                <img key={level} src={level} alt="level" className={`${classes.level} ${classes.blink_me}`} />
                            )
                            : (
                                <img key={level} src={level} alt="level" className={classes.level} />
                            )
                    ))
                }
            </div>
            <p className={classes.text}>{scovilles}</p>
        </div>
    )
}


ScovilleMeter.PropsTypes = {
    classes: PropsTypes.shape({}).isRequired,
    scovilles: PropsTypes.number.isRequired,
    height: PropsTypes.string.isRequired,
}
export default injectSheet(styles)(ScovilleMeter)

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
    meter: {
        position: 'relative',
        width: '30%'
    },
    level: {
        position: 'absolute',
        width: "100%",
        height: "auto"
    },
    // container: {
    //     width: '100%',
    //     display: 'flex',
    //     justifyContent: 'space-between'
    // }
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





const ScovilleMeter = ({ classes, scovilles }) => {
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
        <div className="classes-container">
            <div className={classes.meter}>
                <img src={Pepper} alt='pepper-outline' className={classes.level} />
                {displayedLevels.map(level => (
                    <img src={level} alt="level" key={level} className={classes.level} />
                ))}
            </div>
        </div>
    )
}


ScovilleMeter.PropsTypes = {
    classes: PropsTypes.shape({}).isRequired,
    scovilles: PropsTypes.number.isRequired
}
export default injectSheet(styles)(ScovilleMeter)

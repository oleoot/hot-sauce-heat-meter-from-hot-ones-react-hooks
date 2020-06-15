import React, { Component } from 'react';
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
    }
}

const ranges = {
    0: {
        min: 0,
        max: 2200
    },
    1: {
        min: 2201,
        max: 4000
    },
    2: {
        min: 4001,
        max: 9000
    },
    3: {
        min: 9001,
        max: 30000
    },
    4: {
        min: 30001,
        max: 40000
    },
    5: {
        min: 40001,
        max: 71000
    },
    6: {
        min: 71001,
        max: 135599
    },
    7: {
        min: 135600,
        max: 356999
    },
    8: {
        min: 357000,
        max: 625000
    },
    9: {
        min: 625001,
        max: 1000000
    },
    10: {
        min: 1000000,
    }

}
const getLevels = (scovilles) => {
    const allLevels = levels.filter((level, i) => {
        return scovilles > ranges[i].max
    })
    if (scovilles >= 1000000) {
        allLevels.push(fire)
    }
    return allLevels
}

const ScovilleMeter = ({ classes, scovilles }) => {
    return (
        <div className={classes.meter}>
            <img src={Pepper} alt='pepper-outline' className={classes.level} />
            {getLevels(scovilles).map(level => (
                <img src={level} alt="level" key={level} className={classes.level} />
            ))}
        </div>
    )
}


ScovilleMeter.PropsTypes = {
    classes: PropsTypes.shape({}).isRequired,
    scovilles: PropsTypes.number.isRequired
}
export default injectSheet(styles)(ScovilleMeter)

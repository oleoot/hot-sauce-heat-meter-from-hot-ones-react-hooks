import React from 'react'
import injectSheet from 'react-jss';
import PropsTypes from 'prop-types'


const seasons = []
for (let i = 1; i <= 9; i += 1) {
    const sauces = require(`../sauces/season_${i}`)
    seasons.push(sauces)
}



const styles = {
    container: {
        width: '250px'
    },
    seasonButton: {
        minWidth: '100px',
        fontSize: '2em',
        margin: '1em',
        padding: '0.5em',
        color: 'yellow',
        outline: '2px solid red',
        textAlign: 'center',
        cursor: 'pointer'
    }
}


const SeasonSelector = ({ classes }) => {
    return (
        <div className={classes.container}>
            {
                seasons.map((_, i) => (
                    <div key={i} className={classes.seasonButton}>Season {i + 1}</div>
                ))
            }
        </div>
    )
}



SeasonSelector.PropsTypes = {
    classes: PropsTypes.shape({}).isRequired,
}



export default injectSheet(styles)(SeasonSelector);

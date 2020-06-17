import React from 'react'
import injectSheet from 'react-jss';
import PropsTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

const seasons = []
for (let i = 1; i <= 9; i += 1) {
    const sauces = require(`../sauces/season_${i}`)
    seasons.push(sauces)
}



const styles = {
    sidebar: {
        minWidth: '300px',
        height: '100%',
        overflowY: 'auto'
    },
    seasonButton: {
        minWidth: '100px',
        fontSize: '2em',
        margin: '1em',
        padding: '0.25em',
        color: 'yellow',
        outline: '2px solid red',
        textAlign: 'center',
        cursor: 'pointer',
        '&:hover': {
            background: 'yellow',
            color: 'black'
        },
        textTransform: 'uppercase'
    }
}


const SeasonSelector = ({ classes, history }) => {
    return (
        <div className={classes.sidebar}>
            {
                seasons.map((_, i) => (
                    <div key={i} className={classes.seasonButton} onClick={() => history.push(`/seasons/${i + 1}`)}>Season {i + 1}</div>
                ))
            }
        </div>
    )
}



SeasonSelector.PropsTypes = {
    classes: PropsTypes.shape({}).isRequired,
}



export default withRouter(injectSheet(styles)(SeasonSelector));

import React, { useState, useEffect } from 'react'
import injectSheet from 'react-jss';
import PropsTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

const styles = {
    container: {
        color: 'yellow'
    }
}



const SeasonViewer = ({ classes, match }) => {
    const { season } = match.params
    const [sauces, setSauces] = useState([]);
    useEffect(() => {
        const sauces = require(`../sauces/season_${season}.json`);
        setSauces(sauces)

    }, [season])
    return (
        <div className={classes.container}>
            <div></div>
            <div>
                {sauces.map((sauce => (
                    <p>{sauce.name}</p>
                )))}
            </div>
        </div>
    )
}



SeasonViewer.PropsTypes = {
    classes: PropsTypes.shape({}).isRequired,
    match: PropsTypes.shape({}).isRequired,
}



export default withRouter(injectSheet(styles)(SeasonViewer));

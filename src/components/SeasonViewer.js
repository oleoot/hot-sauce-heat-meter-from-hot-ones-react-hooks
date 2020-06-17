import React, { useState, useEffect } from 'react'
import injectSheet from 'react-jss';
import PropsTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

const styles = {

}



const SeasonViewer = ({ match }) => {
    const { season } = match.params
    const [sauces, setSauces] = useState([]);
    useEffect(() => {
        console.log(`Getting season .... ${season}`);

    }, [season])
    return (
        <h1>Season Viewer</h1>
    )
}



SeasonViewer.PropsTypes = {
    classes: PropsTypes.shape({}).isRequired,
    match: PropsTypes.shape({}).isRequired,
}



export default withRouter(injectSheet(styles)(SeasonViewer));

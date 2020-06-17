import React, { useState, useEffect } from 'react'
import injectSheet from 'react-jss';
import PropsTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

const styles = {
    container: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        color: 'yellow',
        flexDirection: 'column',
    },
};



const SauceViewer = ({ classes, sauce }) => {
    return (
        <div className={classes.container}>
            {
                sauce ? (
                    <h3>{sauce.name}</h3>
                ) :
                    (
                        <h3>Sauce not found</h3>
                    )
            }

        </div >
    )
}



SauceViewer.PropsTypes = {
    classes: PropsTypes.shape({}).isRequired,
}



export default withRouter(injectSheet(styles)(SauceViewer));

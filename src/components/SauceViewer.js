import React from 'react'
import injectSheet from 'react-jss';
import PropsTypes from 'prop-types'
import ScovilleMeter from './ScovilleMeter'



const styles = {
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        color: 'yellow',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '0.5em',
        textShadow: '0 -1px 4px #FFF, 0 -2px 10px #ff0, 0 -10px 20px #ff8000, 0 -18px 40px #F00',
    },
    bottle: {
        height: '280px',
    },
    containerItem: {
        width: '50%',
        display: 'flex',
        alignItems: 'center',
    },
    containerItemRight: {
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        flexDirection: 'column',
        padding: '2em',
    },
    name: {
        color: 'red',
    },
    info: {
        textAlign: 'right',
        fontSize: '2em',
        marginTop: '40px',
        '& a': {
            textDecoration: 'none',
            color: 'lightblue',
        },
    },
};



const SauceViewer = ({ classes, sauce }) => {
    return (
        <div className={classes.container}>
            {
                sauce ? (
                    <>
                        <div className={classes.containerItemRight}>
                            <img src={sauce.img_url} alt={sauce.name} className={classes.bottle} />
                            <div className={classes.info}>
                                <span className={classes.name}>{sauce.name}</span>
                                <br />
                                <small>By: <a href={sauce.website} target="_blank">{sauce.maker}</a></small>
                            </div>
                        </div>
                        <div className={classes.containerItem}>
                            <ScovilleMeter height={400} scovilles={sauce.scovilles} />
                        </div>
                    </>
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
    sauce: PropsTypes.shape({}).isRequired,
}



export default injectSheet(styles)(SauceViewer);

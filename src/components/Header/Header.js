import React from 'react'
import classes from './Header.module.css'

function Header() {
    return (
        <div className={classes['rmdb-header']}>
            <div className={classes['rmdb-header-content']}>
                <img src='/images/reactMovie_logo.png' className={classes['rmdb-logo']} alt='rmdb-logo' />
                <img src='/images/tmdb_logo.png' className={classes['rmdb-tmdb-logo']} alt='tmdb-logo' />
            </div>
        </div>
    )
}

export default Header
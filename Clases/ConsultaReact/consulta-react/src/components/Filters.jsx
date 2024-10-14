import React from 'react'
import styles from './Filters.module.css'
import Switch from 'react-switch';

function Filters( {filters, onFilterChange}){
    return(
        <div className={styles.filters}>
            <h2>Filters</h2>
            <label class  = {styles.filterLabel} >
                Show All
                <Switch
                onChange={(checked)=> onFilterChange ('showAll', checked)}
                checked = {filters.showAll}
                onColor="#86d3ff"
                onHandleColor="#2693e6"
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                height={20}
                width={48}
                />
            </label>
            <label class  = {styles.filterLabel} >
                Show Cats
                <Switch
                onChange={(checked)=> onFilterChange ('showCats', checked)}
                checked = {filters.showCats}
                onColor="#86d3ff"
                onHandleColor="#2693e6"
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                height={20}
                width={48}
                />
            </label>
            <label class  = {styles.filterLabel} >
                Show Ducks
                <Switch
                onChange={(checked)=> onFilterChange ('showDucks', checked)}
                checked = {filters.showDucks}
                onColor="#86d3ff"
                onHandleColor="#2693e6"
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                height={20}
                width={48}
                />
            </label>
        </div>
    )
}

export default Filters
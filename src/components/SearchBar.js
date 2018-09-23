import React from 'react'

const SearchBar = props => {
    return(
        <div style = {style.contentSearch}>
            <input 
            style = {style.inputSearch}
            placeholder="Search anything..."
            type="text" 
            value = {props.search}
            onChange = {props.onChangeSearch}
            />
        </div>
    )
}

const style = {
    inputSearch:{
        width: 500,
        height: 30,
    },

    contentSearch:{
        backgroundColor: "#a3a7e4",
       
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        display: "flex"
    }
}

export default SearchBar;
import React, { ChangeEvent, useState } from 'react'
import './style.css'
type SearchPanelProps = {
    onSelectCountry:(values: string) => void,
    filterOptions: FilterOptions[],
    selecteCountry: string,  
};

export const SearchPanel = ({
    onSelectCountry,
    filterOptions,
    selecteCountry,
}:SearchPanelProps) => {
    const handleSetOption = (option:ChangeEvent<HTMLSelectElement>) => {
        onSelectCountry(option.target.value)
    }
    
    const renderOptions = () => {
        return ( 
            <>  
                <option value="none">-</option>
                {filterOptions.map(({value, name}) => {
                    return <option value={value}>{name}</option>
                })}
            </>
        )
    }   

  return (
    <div className="search-box">
        <h6>SearchPanel</h6>
        <select onChange={handleSetOption} value={selecteCountry}>
            {renderOptions()}
        </select>
        <input type="button" onClick={() => onSelectCountry(selecteCountry)} value="Send" />
    </div>
  )
}

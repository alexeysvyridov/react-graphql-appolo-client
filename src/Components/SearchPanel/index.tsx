import React, { ChangeEvent, useState } from 'react'
import './style.css'
type SearchPanelProps = {
    onSelectUser: (values: number) => void,
    filterOptions: FilterOptions[],
    selectedUserId: number,
};

export const SearchPanel = ({
    onSelectUser,
    filterOptions,
    selectedUserId,
}: SearchPanelProps) => {
    const handleSetOption = (option: ChangeEvent<HTMLSelectElement>) => {
        onSelectUser(+option.target.value)
    }

    const renderOptions = () => {
        return (
            <>
                <option value="none">-</option>
                {filterOptions.map(({ value, name }) => {
                    return <option value={value} key={name + value}>{name}</option>
                })}
            </>
        )
    }

    return (
        <div className="search-box">
            <h6>SearchPanel</h6>
            <select onChange={handleSetOption} value={selectedUserId}>
                {renderOptions()}
            </select>
            <input type="button" onClick={() => onSelectUser(selectedUserId)} value="Send" />
        </div>
    )
}

import React, { useState, useEffect } from 'react';

import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

/**
 * Our own selectAutoComplete create with material ui
* @param {label, selectItemList, <onSelectChange>} props 
 */
const SelectAutoComplete = (props) => {
    const [value, setValue] = useState(null);

    useEffect(() => {
        if(props.defaultValueSelected) {
            setValue(props.defaultValueSelected)
        }
    }, [props.defaultValueSelected])

    const defaultProps = {
        options: props.itemToSelect,
        getOptionLabel: option => option.label,
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
        if(props.onSelectChange) props.onSelectChange(newValue);
    };

    return (
        <Autocomplete
            {...defaultProps}
            value={value}
            style={{ minWidth: 200, maxWidth: 300, width: '30wv' }}
            onChange={handleChange}
            renderInput={params => <TextField {...params} label={props.label} margin="normal" variant="outlined" />}
            disabled={props.disabled}
        />
  );
}

export default SelectAutoComplete;
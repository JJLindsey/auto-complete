import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from '@material-ui/lab/Autocomplete';
import { nbaTeams } from "./NbaTeams";

const NbaAutocomplete = () => {
    return (
        <Autocomplete
            id="nba teams"
            options={nbaTeams}
            renderInput={params => (
                <TextField {...params}
                    label="NBA Team"
                    variant="outlined"
                />
            )}
            getOptionLabel={option => option.name}
            style={{ width: 270 }}
            
        />
    )
};

export default NbaAutocomplete;

import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from '@material-ui/lab/Autocomplete';
import { nbaTeams } from "./NbaTeams";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
    },
    media: {
        height: 140,
        paddingTop: '56.25%', // 16:9
    }
});

const NbaAutocomplete = () => {
    const [selectedTeam, setSelectedTeam] = useState(null);
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image="./assets/logan-weaver-lgnwvr-xtPs2_MlPYc-unsplash.jpg" title="basketball game"/>
            <CardContent>
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
                    value={selectedTeam}
                    onChange={(_event, newTeam) => {
                        setSelectedTeam(newTeam);
                    }}
                />
            </CardContent>
        </Card>
    )
};

export default NbaAutocomplete;

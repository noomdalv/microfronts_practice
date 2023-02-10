import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";

const generateClassName = createGenerateClassName({
    productionPrefix: 'au'
})

export default ({ history }) => {
    return <div>
        <Router history={history}>
            <StylesProvider generateClassName={generateClassName}>
                <Switch>
                </Switch>
            </StylesProvider>
        </Router>
    </div>
}
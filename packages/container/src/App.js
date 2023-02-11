import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import Header from './components/Header'
import MarketingApp from './components/MarketingApp'
import AuthApp from './components/AuthApp'

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})

export default () => {
    return <>
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <>
                    <Header />
                    <Switch>
                        <Route exact path='/' component={MarketingApp} />
                        <Route path='/auth' component={AuthApp} />
                    </Switch>
                </>
            </StylesProvider>
        </BrowserRouter>
    </>
}
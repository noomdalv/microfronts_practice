import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import Header from './components/Header'
import Progress from './components/Progress'

const MarketingAppLazy = lazy(() => import('./components/MarketingApp'));
const AuthAppLazy = lazy(() => import('./components/AuthApp'));

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})

export default () => {
    return <>
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <>
                    <Header />
                    <Suspense fallback={<Progress />}>
                        <Switch>
                            <Route exact path='/' component={MarketingAppLazy} />
                            <Route path='/auth' component={AuthAppLazy} />
                        </Switch>
                    </Suspense>
                </>
            </StylesProvider>
        </BrowserRouter>
    </>
}
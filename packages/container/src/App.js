import React, { lazy, Suspense, useState } from 'react'
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
    const [isSignedIn, setIsSignedIn] = useState(false);

    return <>
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <>
                    <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
                    <Suspense fallback={<Progress />}>
                        <Switch>
                            <Route path='/auth'>
                                <AuthAppLazy onSignIn={() => setIsSignedIn(true)} />
                            </Route>
                            <Route path='/'>
                                <MarketingAppLazy onSignIn={() => setIsSignedIn(true)} />
                            </Route>
                        </Switch>
                    </Suspense>
                </>
            </StylesProvider>
        </BrowserRouter>
    </>
}
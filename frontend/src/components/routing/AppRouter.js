import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../../views/Home";
import StravaRedirect from "../../views/StravaRedirect";
import Dashboard from "../../views/Dashboard";

class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="main">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/redirect" component={StravaRedirect} />
                        <Route path="/dashboard" component={Dashboard} />
                    </Switch>
                </div>
            </BrowserRouter>
        )

    }
}

export default AppRouter;

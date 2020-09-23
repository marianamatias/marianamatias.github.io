import React from 'react';
import Wisteria from './Wisteria';
const { Route } = require("react-router-dom");

const routes = (
    <Route exact path="/wisteria" component={Wisteria} />
)

export default routes;
import React from 'react';
import Page from '../Pages/ProjectPage';
const { Route } = require("react-router-dom");

const routes = (
    <Route path={"/projects/:projectId"} component={Page}/>
)

export default routes;
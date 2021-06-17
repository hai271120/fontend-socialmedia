import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Route, useHistory, useParams
} from "react-router-dom";
import Home from "./Home.js"
export default function Navigation() {
    return (
       <Router>

<Route path="/" component={Home} />
       </Router>
    )
}

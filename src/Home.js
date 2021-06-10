import React from 'react'
import { useHistory, Link,BrowserRouter as Router } from 'react-router-dom';
import Header from './component/headers/Header';
import MainPages from "./component/mainpages/Pages"
import {DataProvider} from "./GobalState"
import Footer from "./component/footer/Footer"
export default function Home() {
    return (
        <DataProvider>
           <Router>
        <div className ='Home'>
            <Header/>
          <MainPages/>
          <Footer/>
        </div>
        </Router>
        </DataProvider>
    )
}

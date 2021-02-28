import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Navbar} from "./components/Navbar";
import {Profile} from "./components/Profile";
import {Dialogs} from './components/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from './components/News';
import {Music} from './components/Music';
import {Settings} from './components/Settings';
import {Indicator} from './components/Indicator';
import {RootStateType} from "./redux/state";


export type appStateType = {
    state: RootStateType
}

function App(props: appStateType) {

    return (
        <BrowserRouter>
            <div className="appWrapper">
                <Header/>
                <Navbar/>
                <Route path={"/profile"} render={() => <Profile posts={props.state.posts} /> }/>
                <Route path={"/dialogs"} render={() => <Dialogs dialogsData={props.state.dialogsData} messagesData={props.state.messagesData}/> }/>
                <Route path={"/news"} render={() => <News />}/>
                <Route path={"/music"} render={() => <Music/>}/>
                <Route path={"/settings"} render={() => <Settings/>}/>
                <Route path={"/indicator"} render={() => <Indicator/>}/>

                {/*<Indicator />*/}
                {/*<Indicator />*/}

                {/*<Profile />*/}
                {/*<Dialogs/>*/}
            </div>
        </BrowserRouter>
    );
}

export default App;

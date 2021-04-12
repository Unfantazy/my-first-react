import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Navbar} from "./components/Navbar";
import {Profile} from "./components/Profile";
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from './components/News';
import {Music} from './components/Music';
import {Settings} from './components/Settings';
import {Indicator} from './components/Indicator';
import {DialogsContainer} from "./components/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";

export type stateType = {
     //state: RootStateType
    // // addPost: () => void
    // // addMessage: (dialogMessage: string) => void
     //newPostText: string
    // // updateNewPostText: (newText: string) => void
     //dispatch: (action: any) => void
    // store: any
}


function App(props: stateType) {

    return (
        <BrowserRouter>
            <div className="appWrapper">
                <Header/>
                <Navbar/>
                <Route path={"/profile"} render={() => <Profile />}/>
                <Route path={"/dialogs"} render={() => <DialogsContainer />}/>
                <Route path={"/users"} render={() => <UsersContainer />}/>


                <Route path={"/news"} render={() => <News/>}/>
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

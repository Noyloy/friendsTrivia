import React from 'react';
import SignIn from './components/signin/SignIn';
import { BrowserRouter, Route } from 'react-router-dom';
import 'fontsource-roboto';
import { ProtectedRoute } from './core/utils/ProtectedRoute';
import Questions from './components/questions/Questions';
import {useAuth} from './core/auth/useAuth';
import NavBar from './ui/NavBar';

function App() {
  const {isLoading, user} = useAuth();
  return (
    <BrowserRouter>
      <div>
        <NavBar isAuthed={!!user} userInfo={user}/>
        <Route path="/sign-in" exact>
          <SignIn isAuthed={!!user}/>
        </Route>
        <ProtectedRoute isAuthed={!!user} isLoading={isLoading} path="/" component={Questions}/>
      </div>
    </BrowserRouter>
  );
}

export default App;

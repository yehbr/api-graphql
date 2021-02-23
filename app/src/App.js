import React from 'react'
import GlobalStyles from './styles/GlobalStyles'
import Header from './components/Header'
import Grid from '@material-ui/core/Grid'
import MainPage from './pages/MainPage'
import BooksPage from './pages/BooksPage'
import AuthorsPage from './pages/AuthorsPage'
import AboutPage from './pages/AboutPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Header authError={false} authErrorName="Incorrect password" />
      <Grid container spacing={0} style={{ marginTop: 64 }}>
        <Grid item xs={12} style={{ padding: '20px 58px' }}>
          <Switch>
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route path="/books">
              <BooksPage />
            </Route>
            <Route path="/authors">
              <AuthorsPage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
          </Switch>
        </Grid>
      </Grid>
    </Router>
  )
}

export default App

import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

const Header = (props) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <header>
      <AppBar style={{ background: '#00796b' }}>
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex' }}>
            <Logo to="/">My Library</Logo>
            <Navbar>
              <ul>
                <li>
                  <NavLink to="/books">My Books</NavLink>
                </li>
                <li>
                  <NavLink to="/authors">Authors</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
              </ul>
            </Navbar>
          </div>
          {props.isAuth ? (
            <IconButton color="inherit">
              <ExitToAppOutlinedIcon />
            </IconButton>
          ) : (
            <IconButton color="inherit" onClick={handleOpen}>
              <LockOutlinedIcon />
            </IconButton>
          )}
          <Modal
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-labelledby="transition-modal-title"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <ModalStyled>
                <h2 id="transition-modal-title">Auth</h2>
                <form noValidate autoComplete="off">
                  <TextField
                    error={props.authError}
                    helperText={props.authError ? props.authErrorName : null}
                    id="outlined-basic"
                    type="password"
                    label="Password"
                    variant="outlined"
                  />
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginTop: '20px',
                    }}
                  >
                    <ButtonStyled variant="contained" size="large">
                      Sign In
                    </ButtonStyled>
                    {props.isFetching ? <CircularProgress size={18} /> : null}
                  </div>
                </form>
              </ModalStyled>
            </Fade>
          </Modal>
        </Toolbar>
      </AppBar>
    </header>
  )
}

export default Header

const Logo = styled(NavLink)`
  font-family: 'Raleway', sans-serif;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  margin-right: 80px;
  align-items: center;
  color: white;
  border-bottom: none;
  text-decoration: none;
  &:hover {
    color: white;
    background-color: transparent;
    border-bottom: none;
  }
`

const ModalStyled = styled.div`
  background: white;
  outline: none;
  padding: 30px 50px;
  width: 360px;
  border-radius: 5px;
  h2 {
    margin-top: 0;
    font-weight: 600;
  }
`

const ButtonStyled = styled(Button)`
  background-color: #00796b;
  color: white;
  box-shadow: none;
  margin-right: 20px;
  &:hover {
    box-shadow: none;
    background-color: rgba(0, 121, 107, 0.9);
  }
`

const Navbar = styled.nav`
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding-left: 0;
  }
  li {
    display: flex;
    align-items: flex-start;
  }
  a {
    color: white;
    text-decoration: none;
    height: 64px;
    padding: 0 30px;
    border-bottom: 3px solid transparent;
    border-top: 3px solid transparent;
    display: flex;
    align-items: center;
    transition: ease-in-out 250ms;
    &:hover {
      color: white;
      border-bottom: 3px solid transparent;
      background: rgba(0, 0, 0, 0.05);
    }
  }
  .active {
    border-bottom: 3px solid rgba(0, 0, 0, 0.4);
    &:hover {
      border-bottom: 3px solid rgba(0, 0, 0, 0.4);
    }
  }
`

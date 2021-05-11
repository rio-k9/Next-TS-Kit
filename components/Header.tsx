import { AppBar, List, Toolbar } from '@material-ui/core'
import Link from 'next/link'
import React, { FC, Fragment } from 'react'

interface Props {

}

const Header: FC = ({ }: Props) => {

  const navLinks = [
    {
      title: 'Home',
      path: '/#home'
    },
    {
      title: 'About',
      path: '/#about'
    },
    {
      title: 'Releases',
      path: '/#releases'
    }
  ]

  return (
    <Fragment>
      <AppBar position="fixed">
        <Toolbar>
          <List component="nav" aria-labelledby="main navigation">
            {navLinks.map(({ title, path }) => (
              <Link key={path} href={path}>
                {title}
              </Link>
            ))}

          </List>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Fragment>

  )
}

export default Header

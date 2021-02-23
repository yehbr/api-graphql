import React from 'react'
import OpenInNewOutlinedIcon from '@material-ui/icons/OpenInNewOutlined'

const ExternalLink = (props) => {
  return (
    <>
      <a href={props.href} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
      <OpenInNewOutlinedIcon style={{ fontSize: 14, marginLeft: 4, opacity: .2 }} />
    </>
  )
}

export default ExternalLink

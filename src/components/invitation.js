import {Fragment} from 'react'
import './invitation.css'

export function MyComponent(props) {
    return (
      <Fragment>
        <p>Subject:<span className='redtxt'>{props.subject}</span></p>
        <p>To:<span className='redtxt'>{props.email}</span></p><br/>
        <p>Hi,<span className='redtxt'>{props.name}</span></p><br/>
        <p>I am having a <span className='redtxt'>{props.main}</span> next Friday at my Home.Would you like to come ? It will be fun. Lots of people from my school are coming.you know some of them - <span className='redtxt'>{props.guestLists}.</span></p><br/>
        <p>My house is behind our school , near <span className='redtxt'>{props.address}.</span></p><br/>
        <p>I hope you will come and see you soon.</p><br/>
        <p>from,</p>
        <span className='redtxt'>{props.name}</span>
      </Fragment>
    );
  }
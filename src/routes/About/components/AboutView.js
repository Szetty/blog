import React from 'react'
import './AboutView.scss'
import JSONPretty from 'react-json-pretty'
import 'react-json-pretty/JSONPretty.adventure_time.styl'
import AboutMeJson from '../assets/aboutMe.json'

export const AboutView = () => (
  <div>
    <JSONPretty id='json-pretty' className='json-pretty' style={jsonPrettyStyle} json={AboutMeJson} />
  </div>
)

const jsonPrettyStyle = {
  textAlign: 'left',
  margin: 'auto'
}

export default AboutView

import React, { Component } from 'react'
import TabDetail from './TabDetail'

class HomeTabs extends Component {
  render() {

    return (
      <div className='HomeTabs'>
        <section className="HomeTabs--Stream">
          <TabDetail head={"Stream"}/>
        </section>
        <section className="HomeTabs--Courses">
          <TabDetail head={"Courses"}/>
        </section>
        <section className="HomeTabs--Contact">
          <TabDetail head={"Contact"}/>
        </section>
        <section className="HomeTabs--About">
          <TabDetail head={"About"}/>
        </section>
      </div>
    )
  }
}

export default HomeTabs
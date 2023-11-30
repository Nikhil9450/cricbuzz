import React from 'react'
// import { useState } from 'react';
import classes from './Match.module.css'
const Match = (props) => {
    console.log ("match props-------->",props)
    // const [details, setDetails]=useState(false);

    // const modalHandler=()=>{
    //   setDetails(true);
    // }
    // const toggleHandller=()=>{
    //   setDetails(false);
    // }
    return (
    <div>
        <div className={classes.header}>
            <h3>{props.teamHeading}</h3>
        </div>
       {/* {details && (
        <MissionModal 
        mission_name={props.mission_name}
        image={props.image} 
        launch_year={props.launch_year} 
        landing={props.successful_land} 
        details={props.details} 
        mission_id={props.mission_id}
        successful_launch={props.successful_launch}
        onConfirm={toggleHandller}/>
      )} */}
    <div className={classes.container}>

    <div className='content'>
    
       {/* <h4> <span className={classes.data}>{props.teamHeading}</span></h4> */}
       <h4> <span className={classes.data}>{props.matchNumberVenue}</span></h4>
       <p>Batting team : <span className={classes.para_data}>{props.battingTeam}</span></p>
       <p>Batting team score : <span className={classes.para_data}>{props.battingTeamScore}</span></p>
       <p>Bowling team : <span className={classes.para_data}>{props.bowlTeam}</span></p>
       <p>Bowling team score : <span className={classes.para_data}>{props.bowlTeamScore}</span></p>
       <p>Status : <span className={classes.para_data}>{props.status}</span></p>
       <p>date : <span className={classes.para_data}>{props.date}</span></p>
       {/* <button  classname={classes.but} >More details</button> */}
    </div>
      </div>
    </div>
    );
}

export default Match
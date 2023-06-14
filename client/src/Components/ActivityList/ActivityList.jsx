import React from 'react';
import { useDispatch } from "react-redux";
import Activity from '../Activity/Activity';
// import { getActivities } from '../redux/actions';
import { useEffect } from 'react';
import "./ActivityList.css";

const ActivityList = ({activities}) => {
    const dispatch = useDispatch();
 //   const activityList = useSelector(state => state.activities)
    
    useEffect(() => {
        console.log("accion 1")
   //     dispatch(getActivities())
    }, [dispatch]);
 
    return (
          <div className='formActivitiList'>
           {activities?.map( activity => {
                    return (
                    <Activity
                        countryId={activity.countryId}
                        name={activity.name}
                        duration={activity.duration}
                        season={activity.season}
                        difficulty={activity.difficulty}
                        />
                    )
                })
            }
        </div>
    );
};

export default ActivityList;
import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import Activity from '../Activity/Activity';
import { getActivities } from '../redux/actions';
import { useEffect } from 'react';
import "./ActivityList.css";
import { useHistory} from 'react-router-dom';

const ActivityList = () => {
    const dispatch = useDispatch();
    const activityList = useSelector(state => state.activities)
    const history = useHistory();
    
    
    useEffect(() => {
        console.log("accion 1")
        dispatch(getActivities())
    }, [dispatch]);
 
    return (
          <div className='formActivitiList'>
          <h1>LISTADO DE ACTIVIDADES</h1>
          <button onClick={() => history.goBack()}>Regresar</button>
           {activityList?.map( activity => {
                    return (
                    <Activity
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
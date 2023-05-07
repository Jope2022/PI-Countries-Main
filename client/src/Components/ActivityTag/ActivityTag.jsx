

const ActivityTag = ({activities, Quitar})  => {
 return (
     <div>
        {activities.map(activity => {return(<div>{activity} 
        <button onClick={Quitar(activity)}>X</button></div>) })}
         
 </div> )
}

export default ActivityTag
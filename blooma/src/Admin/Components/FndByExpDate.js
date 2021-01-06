import React ,{ useState } from 'react';
import axios from 'axios'
import { useDispatch , useSelector } from 'react-redux';
import {Expdate} from './../../Redux/index'

const FndByExpDate = () => {
    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial",
        border : "2px solid red"
      };

    const admin = useSelector(state => state.Admin.userdb);
    const Data = useSelector(state => state.Admin.Expdate);
    const dispatch = useDispatch();
    const [date , setDate] = useState();

    const HandleSubmitDate = (e) =>{
        e.preventDefault();
        axios.post(`/fndexpiredplans`,{"date" : date},{
            headers:{
                'Content-Type' : 'application/json',
                'x-auth-token': admin.token
            } 
        })
        .then(res=>{
           
            dispatch(Expdate(res.data))
        })
        .catch(err=>{
            
        })
    }



    return (
        <div>
            <h2>Find Consumer by Expiry Date</h2>
            <form onSubmit={HandleSubmitDate}>
                <input type="text" required onChange={e=>setDate(e.target.value)}/>
                <input type="submit" value="Get Data"/>
            </form>

            { Data.length >0 ?
                Data.map((data)=>(
                
                <div style={mystyle} key={data._id}>
                    <span>Name : {data.name}</span><br />
                    <span>Number : {data.number}</span><br />
                    <span>Address : {data.flat_or_house_number} &nbsp;
                    {data.appartment_or_building_name} &nbsp;
                    {data.landmark}  &nbsp;
                    {data.road_name_or_number}  &nbsp;
                    {data.area}  &nbsp;
                    {data.colony}  &nbsp;
                    {data.city}  &nbsp;
                    {data.state}  &nbsp;
                    {data.district}  &nbsp;
                    {data.pincode}  &nbsp;
                    </span> <br />
                    <span>Plan : {data.planType}</span><br />
                    <span>Price : {data.planPrice}</span><br />
                    <span>isActivated : {data.isActivated?"Activated" : "Not Activated"}</span><br />
                    <span>Subscribe Date : {data.subscribedAt}</span><br />
                    {data.isActivated ?
                        <>
                        <span>Action Date : {data.number}</span><br />
                        <span>Expiry Date : {data.validityDate}</span><br />
                        </>: null}
                    
                </div>
                
            ))
            :
                <span>No Subscription on this date</span>
                    }
        </div>
    )
}

export default FndByExpDate

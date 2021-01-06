import React , {useState , useEffect} from 'react'
import axios from 'axios'
import { useDispatch , useSelector } from 'react-redux';
import {ByDate , ClearData} from './../../Redux/index';


const PlanActivation = () => {
    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial",
        border : "2px solid red"
      };

    const admin = useSelector(state => state.Admin.userdb);
    const Data = useSelector(state => state.Admin.Data);
    const dispatch = useDispatch();
    const [number , setNumber] = useState();
    const [days, setDays] = useState();

    const HandleSubmitDate = (e) =>{
        e.preventDefault();
        axios.post(`/planactivation`,{"number" : number , "days" : days },{
            headers:{
                'Content-Type' : 'application/json',
                'x-auth-token': admin.token
            } 
        })
        .then(res=>{
           
            dispatch(ByDate(res.data))
        })
        .catch(err=>{
           
        })
    }

    useEffect(()=>{
        return ()=>{
            dispatch(ClearData())
        }
    },[dispatch])
    return (
        <div>
            <h2>Activate Plan</h2>
            <form onSubmit={HandleSubmitDate}>
                <input type="number" required onChange={e=>setNumber(e.target.value)} placeholder="Enter Number"/>
                <input type="number" required onChange={e=>setDays(e.target.value)} placeholder="Enter Days"/>
                <input type="submit" value="Get Data"/>
            </form>
            
                { Data  ?
                <div style={mystyle}>
                    <span>Name : { Data.name }</span><br />
                    <span>Number : {Data.number}</span><br />
                    <span>Address : {Data.flat_or_house_number} &nbsp;
                    {Data.appartment_or_building_name} &nbsp;
                    {Data.landmark}  &nbsp;
                    {Data.road_name_or_number}  &nbsp;
                    {Data.area}  &nbsp;
                    {Data.colony}  &nbsp;
                    {Data.city}  &nbsp;
                    {Data.state}  &nbsp;
                    {Data.district}  &nbsp;
                    {Data.pincode}  &nbsp;
                    </span> <br />
                    <span>Plan : {Data.planType}</span><br />
                    <span>Price : {Data.planPrice}</span><br />
                    <span>isActivated : {Data.isActivated ? "Activated" : "Not Activated"}</span><br />
                    <span>Subscribe Date : {Data.subscribedAt}</span><br />
                    {Data.isActivated ?
                        <>
                        <span>Activation Date : {Data.activationDate}</span><br />
                        <span>Expiry Date : {Data.validityDate}</span><br />
                        </>: null}
                    
                </div>
                
            :
                <span>No Subscription on this Number</span>
                    }       
        </div>
    )
}

export default PlanActivation

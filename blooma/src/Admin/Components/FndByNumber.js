import React , {useState , useEffect} from 'react'
import axios from 'axios'
import { useDispatch , useSelector } from 'react-redux';
import {ByDate , ClearData} from './../../Redux/index';

const FndByNumber = () => {
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
    const [number , setNumber] = useState()
    const HandleSubmitDate = (e) =>{
        e.preventDefault();
        axios.post(`/fndconsumerbynumber`,{"number" : number},{
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
            <h2>Find Consumer By Number</h2>
            <form onSubmit={HandleSubmitDate}>
                <input type="number" required onChange={e=>setNumber(e.target.value)} placeholder="Enter Number"/>
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
                    <span>Feature : {data.planFeature}</span><br />
                    <span>IsSubscribed : {data.isSubscribed?"Subscribed" : "Not Subscribed"}</span><br />
                    <span>IsActivated : {data.isActivated?"Activated" : "Not Activated"}</span><br />
                    <span>Subscribe Date : {data.subscribedAt}</span><br />
                    {data.isActivated ?
                        <>
                        <span>Activation Date : {data.activationDate}</span><br />
                        <span>Expiry Date : {data.validityDate}</span><br />
                        </>: null}
                    {data.paymentsId.map((data)=>(
                        <>
                        <span>PaymentID  :{data} </span> <br />
                        </>
                    ))}
                
                </div>
                
            ))
            :
                <span>No Subscription on this date</span>
                    }
        
        </div>
    )
}

export default FndByNumber

import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Api from '../Services/Api'

const Services = () => {
    
    const state = useState();
    const navigate = useNavigate();
    const params = useParams();
    const effect = useEffect();

    return(
     state, navigate, params, effect
 )
}
 
export default Services;
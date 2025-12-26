import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Protected(props) {

  const navigate = useNavigate();
  const{component}= props;

  const check = async(req,res)=>{
    const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
    if(!token){
        navigate('Login')
    }
  }
  useEffect(()=>{
    check()

  })

  
  
     


  return (
    <div>
        <component/>
    </div>
  );
}

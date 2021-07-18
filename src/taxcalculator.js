import React, { useState } from 'react';

var v,v1;
export default function App(){
    const [tax,setTax]=useState()
    const [income,setIncome]=useState()
    function calculate(){
        if(v===undefined||v.value==='') return
        if(v.value<=400000) {
            setTax('tax payable is 0')
            return}
        let temp=v.value;
            temp-=300000
            let t=3750
            if(temp>=500000){
                t+=50000
                temp-=500000
               }
           else{
               t+=temp*0.10
               setTax(`tax payable is ${t}`)
               return
           }
           if(temp===0) {
               setTax(`tax payable is ${t}`)
               return}
               if(temp>=9200000){
                t+=2300000
                temp-=9200000
               }
           else{
               t+=temp*0.25
               setTax(`tax payable is ${t}`)
               return
           }
           if(temp===0) {
               setTax(`tax payable is ${t}`)
               return}
               t+=temp*0.30
               setTax(`tax payable is ${t}`)

    }
    function reset(){
        if(v===undefined) return
        v.value=''
        setTax()
    }
    function calculate1(){
        if(v1===undefined||v1.value==='') return
        if(v1.value>800000){
            setIncome('excess net income')
            return
        }
        if(v1.value<=400000){
            setIncome(`gross income is ${v1.value}`)
            return
        }
        let temp=v1.value;
        temp-=296250
        let income=300000
        income+=temp/0.9
        setIncome(`gross income is ${Math.trunc(income)}`)
    }
    function reset1(){
        if(v1===undefined) return
        v1.value=''
        setIncome()
    }
    return(
        <>
        <h2>Tax calculator</h2>
        gross income:<input type='number' onChange={(e)=>(v=e.target)}/>
        <button onClick={calculate}>calculate</button>
        <button onClick={reset}>reset</button>
        <h3>{tax}</h3>
        <h2>gross income calculator</h2>
        net income:<input type='number' onChange={(e)=>(v1=e.target)}/>
        <button onClick={calculate1}>calculate</button>
        <button onClick={reset1}>reset</button>
        <h3>{income}</h3>
        </>
    )
}
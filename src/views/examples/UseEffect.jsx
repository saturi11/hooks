import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'


function calcFatorial(n){
     
    if(n<0)return -1
    if (n===0) return 1
    return calcFatorial(n-1)*n
}
function calcStatus(num1){
     
    if(num1% 2 === 0) return "par"
    return "impar"
}


const UseEffect = (props) => {
    const[num,setNum] = useState(1)
    const[fatorial,setFatorial] = useState(1)
    useEffect(function(){
        setFatorial(calcFatorial(num))
    },[num])
    
    const[num1,setNum1] = useState(1)
    const[parImpar,setparImpar] = useState(1)
    useEffect(function(){
        setparImpar(calcStatus(num1))
    },[num1])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="ex 01"/>
            <div className="center">
                <span className="text">Fatorial::</span>
                <span className="text red">{fatorial} </span>
                <input type="number" className="input" value ={num} onChange={e =>setNum(e.target.value)} />
            </div>
            <SectionTitle title="ex 02"/>
            <div className="center">
            <span className="text">STATUS::</span>
                <span className="text red">{parImpar} </span>
                <input type="number" className="input" value ={num1} onChange={e =>setNum1(e.target.value)} />
            </div>
        </div>
    )
}

export default UseEffect

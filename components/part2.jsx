import {useEffect, useRef, useState} from 'react'
import '../App.css'
import {useOnClickOutside} from "../hooks.js";
const PartTwo = () => {
        const ref = useRef();
        const handleSubmit = (e) => {
            e.preventDefault();
            alert(ref.current.value);
        };

        return (
            <div style={{width:'400px', display:"flex", flexDirection:'column', marginLeft:"20px"}}>
                <h3>Prosty Formularz</h3>
                <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:'column', justifyContent:"center"}}>
                    <label>
                        Imię: <input type={'text'} ref={ref}/>
                    </label>
                    <input type={'submit'} style={{width:'30%'}}/>
                </form>
            </div>
        )
    }

    export default PartTwo

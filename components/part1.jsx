import {useEffect, useRef, useState} from 'react'
import '../App.css'
import {useOnClickOutside} from "../hooks.js";
const PartOne = () => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState("Wartość 1")
    const [lastName, setlastName] = useState("Wartość 2")
    const [dropdown, setDropdown] = useState(false);
    const handleCount = () => {
        setCount(count + 1)
    }
    const handleName = () => {
        setName("Maciek")
    }
    const handleLastName = () => {
        setlastName("Makowski")
    }

    useEffect(() => {
        document.title = `Aktualny stan to: ${dropdown}`
    },[dropdown])

    const ref = useRef()

    useEffect(() => {
        const handler = (event) => {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.addEventListener("mousedown", handler);
        }
    }, [dropdown]);
    const handleDropdown = () => {
        setDropdown((prevState) => !prevState)
    }
    //
    //
    // useOnClickOutside(ref, dropdown, handleDropdown)

        return (
            <div style={{width:'400px', display:"flex", flexDirection:'column'}}>
                <div>
                    <h2>{name} {lastName}</h2>
                    <button onClick={handleName}>Pokaż imię</button>
                    <button onClick={handleLastName}>Dodaj Nazwisko</button>
                    <h2>{count}</h2>
                    <button onClick={handleCount}>Powieksz o 1</button>
                </div>
                <div>
                    <nav style={{height:'100%', display:"flex", marginTop:'15%'}}>
                        <ul style={{
                            display: "flex",
                            flexDirection: 'row',
                            width: '400px',
                            justifyContent: 'space-between'
                        }}>
                            <li>Home</li>
                            <li>About</li>
                            <li ref={ref}>
                                <button onClick={handleDropdown}>
                                    Services <span>&#8595;</span>
                                </button>
                                {dropdown &&
                                    <ul>
                                        <li>Design</li>
                                        <li>Development</li>
                                    </ul>
                                }
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }

    export default PartOne

import {useEffect, useRef, useState} from 'react'
import '../App.css'
import {useOnClickOutside} from "../hooks.js";
const PartThree = () => {
    const [data, setData] = useState({
        fname:"",
        lname:"",
        message:"",
        carBrand:"",
        isChecked:false,
        gender:"",
        price:"0"
    })
    const carBrands = ["Mercedes", "BMW", "Maserati", "Infinity", "Audi"];
    const carBrandOptions = carBrands.map((carBrand, key) => (
        <option value={carBrand} key={key}>
            {carBrand}
        </option>
    ));
    // const handleChange = (e) => {
    //     setName(e.target.value);
    // };
    const handleChange = (e) => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setData((data) => ({
            ...data,
            [e.target.name]: value
        })
        );
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    };
    return (

        <div>
            <h3>Interaktywny Formularz</h3>
            <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column"}}>
                <label>
                    Imię: <input type="text" value={data.fname} name={"fname"} onChange={handleChange} />
                </label>
                <label>
                    Nazwisko: <input type="text" value={data.lname} name={"lname"} onChange={handleChange} />
                </label>
                <label>
                    Wiadomość: <textarea value={data.message} name={"message"} onChange={handleChange} />
                </label>
                <label>
                    Marka auta: <select value={data.carBrand} name={"carBrand"} onChange={handleChange} >
                    Wybierz markę auta:
                    <option value={""} disabled>
                        Wybierz markę
                    </option>
                    {carBrandOptions}
                </select>
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="isChecked"
                        checked={data.isChecked}
                        onChange={handleChange}
                    />
                    Czy zaznaczono?
                </label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="mężczyzna"
                        checked={data.gender === "mężczyzna"}
                        onChange={handleChange}
                    />{" "}
                    mężczyzna
                </label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="kobieta"
                        checked={data.gender === "kobieta"}
                        onChange={handleChange}
                    />{" "}
                    kobieta
                </label>
                <label>
                    Cena (od 0 do 50):
                    <input
                        type="range"
                        name="price"
                        min="0"
                        max="50"
                        value={data.price}
                        onChange={handleChange}
                    />
                </label>
                <button>Submit</button>
            </form>
            <h5>Name: {data.fname} {data.lname}</h5>
            <h5>Wiadomość: {data.message}</h5>
            <h5>Ulubiona Marka: {data.carBrand}</h5>
            <h5>Czy zaznaczono? : {data.isChecked ? "Tak" : "Nie"}</h5>
            <h5>Płeć : {data.gender}</h5>
            <h5>Cena : {data.price}</h5>
        </div>
    );
};
export default PartThree

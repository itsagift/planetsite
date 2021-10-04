import React, {useState} from 'react';

function MainImage({detail, planet}){
    if (detail == 'overview') {
        console.log(planet)        
        return <img className="planet__spec" src={planet.images.planet} alt="planet overview"/>;   
          
    }
    else if (detail == 'structure'){
        return <img className="planet__spec" src={planet.images.internal} alt="planet structure"/>;
    }
    else {
        return (
        <div className="image__spec">
            <img className="planet__spec" src={planet.images.planet} alt="planet overview"/>
            <img className="image__tooltip" src={planet.images.geology} alt="planet zoom-in"/>
        </div>
        )
    }
}
export default function Planet({planet, open}){
    const [detail, setDetail] = useState('overview');
    const handleChange=(e)=>{
        setDetail( e.target.value);
     }
 
    return(
        <div className={open ? "main active" : "main"} role="main">
            <div className="main__image">
                <MainImage detail={detail} planet={planet}/>
            </div>
            <div className="main__details">
                <div className="details__text">
                <h2 className="text__title">{planet.name}</h2>
                <div className="text__desc">{planet[detail].content}</div>
                <div className="text__source">
                    <div className="source__title">Source:</div> <a href={planet[detail].source} className="source__link"> Wikipedia</a>
                    <img src= {require("assets/icon-source.svg")} className="source__img" alt="source icon"/>
                </div>
                </div>
                <div className="details__input">
                    <div className="detail">
                    <input className="detail--input" type="radio" id="overview"
                    name="detail" value="overview" checked={detail=== 'overview'} onChange={handleChange}/>
                    <label className={`input__label ${planet.name}`} htmlFor="overview">
                        <div className="label__no">01</div>
                        <div className="label__title">Overview</div>
                    </label>
                    </div>
                    <div className="detail">
                    <input className="detail--input" type="radio" id="structure"
                    name="detail" value="structure" checked={detail=== 'structure'} onChange={handleChange} />
                    <label className={`input__label ${planet.name}`} htmlFor="structure">
                        <div className="label__no">02</div>
                        <div className="label__title">Structure</div>
                    </label>
                    </div>
                    <div className="detail">
                    <input className="detail--input" type="radio" id="geology"
                    name="detail" value="geology" checked={detail=== 'geology'} onChange={handleChange}/>
                    <label className={`input__label ${planet.name}`} htmlFor="geology">
                        <div className="label__no">03</div>
                        <div className="label__title">Surface</div>
                    </label>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}
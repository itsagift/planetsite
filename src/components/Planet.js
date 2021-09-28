import React, {useState} from 'react';

function MainImage({detail, planet}){
    if (detail == 'overview') {
        console.log(planet)        
        return <img src={planet.images.planet}/>;   
          
    }
    else if (detail == 'structure'){
        return <img src={planet.images.internal}/>;
    }
    else {
        return (
        <div className="image__spec">
            <img src={planet.images.planet}/>
            <img className="image__tooltip" src={planet.images.geology}/>
        </div>
        )
    }
}
export default function Planet({planet}){
    const [detail, setDetail] = useState('overview');
    const handleChange=(e)=>{
        setDetail( e.target.value);
     }
 
    return(
        <div className="main">
            <div className="main__image">
                <MainImage detail={detail} planet={planet}/>
            </div>
            <div className="main__details">
                <h2 className="detail__title">{planet.name}</h2>
                <div className="detail__desc">{planet[detail].content}</div>
                <div className="details__input">
                    <label className="input__label" htmlFor="overview">
                        <div className="label__no">01</div>
                        <div className="label__title">Overview</div>
                    </label>
                    <input type="radio" id="overview"
                    name="detail" value="overview" checked={detail=== 'overview'} onChange={handleChange}/>

                    <label className="input__label" htmlFor="structure">
                        <div className="label__no">02</div>
                        <div className="label__title">Structure</div>
                    </label>
                    <input type="radio" id="structure"
                    name="detail" value="structure" checked={detail=== 'structure'} onChange={handleChange} />

                    <label className="input__label" htmlFor="geology">
                        <div className="label__no">03</div>
                        <div className="label__title">Surface</div>
                    </label>
                    <input type="radio" id="geology"
                    name="detail" value="geology" checked={detail=== 'geology'} onChange={handleChange}/>
                    
                </div>
            </div>
            
            
        </div>
    )
}
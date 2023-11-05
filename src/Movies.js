
import React, {Component} from "react"
const api1 ='https://65467038fe036a2fa955b0c7.mockapi.io/api/1/Movies';
export default class nav extends Component{
    render(){
    return(
        <nav className='reviewForm'>
            <div>
            <label> Rate the Movie </label>
            <input type='text' id='rating'></input>
            </div>
            <div>
                <label> Review the Movie </label>
            <input type='text' id='reveiw'></input>
            </div>
            <button type='submit'> Submit </button>
        </nav>
    )
}
}
// const postReview = async(x)=>{
//     const response = await fetch(api1, {
//         method:"POST"
//         // headers: {"content-Type": "application/josn"},
//         // body: JSON.stringify(x)
//     })

//     const data =await response.json()
//     return data
// }



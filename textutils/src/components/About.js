import React, {useState} from 'react'


export default function About(props) {

    // const [myStyle, setMyStyle]= useState({
        // color:"black",
        // backgroundColor:"white"
    // })

    // const[btntext, setBtnText]=useState("Enable Dark Mode")

    // const toggleStyle=()=>{
        // if(myStyle.color==='black'){
            // setMyStyle({
                // color:'white',
                // backgroundColor:'black',
                // border:'1px solid white'
            // })
            // setBtnText("Enable Light Mode")
        // }
        // else{
            // setMyStyle({
                // color:'black',
                // backgroundColor:'white'
            // })
            // setBtnText("Enable Dark Mode");
        // }
    // }

    // let myStyle={
        // color:props.mode==='dark'?'white':'gray',
        // backgroundColor:props.mode==='dark'?'gray':'white',
    // }
        return (
        <div className="container" style={{color:props.mode==='dark'?'white':'gray'}}>
            <h1>About us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nihil dolores fugiat porro illo quam eveniet, 
            neque sed voluptates nemo dolorem quos similique quibusdam ullam delectus, magni officiis possimus in velit Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, alias dolore ea expedita unde cupiditate at porro quia perspiciatis provident nulla quis ducimus aperiam id labore aliquid deleniti, libero consequuntur, commodi temporibus sequi error aliquam sunt nesciunt! Culpa eum quasi quod, rerum deserunt a. Illo consequatur velit voluptatem error quos. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat vel dignissimos accusantium distinctio, impedit sequi sapiente debitis praesentium iure est error nisi magni ducimus suscipit? Temporibus fugit labore animi sed! Laborum itaque totam aliquid vero recusandae nam eaque. Consectetur voluptatibus odit ad labore obcaecati cum consequatur pariatur quam id aperiam.</p>
            <div className="container my-3">
                {/* <button onClick={toggleStyle} type='button' className="btn btn-primary">{btntext}</button> */}
            </div>
        </div>
    )
}

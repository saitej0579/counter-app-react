import './Reset.css'
function Reset(props){
    const reset = ()=>{
        props.reset();
    }
    return(
        <div>
            <button id='reset' onClick={reset}>Reset</button>
        </div>
    );
}
export default Reset;
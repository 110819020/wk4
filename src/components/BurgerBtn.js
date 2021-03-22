export default function BurgerBtn({isOnTouch,setIsOnTouch}){
    let handleClick=()=>{
        setIsOnTouch(!isOnTouch)
    }

    return (
        <div>
            <button onClick={handleClick} className={`burger ${isOnTouch ? "is-change" : ""}`}>
                <span className="burger-manu"></span>
            </button>
        </div>
    );
}
function Child({ isLoggedIn, setIsLoggedIn}) {
    const handleClick = () => {
        setIsLoggedIn(!isLoggedIn);// always negates previous state 

    };

    return ( 
        <div>
            

            <p>
                {isLoggedIn ? "Welcome!" : "Please sign in."}
            </p>

            <button onClick={handleClick}>
                {isLoggedIn ? "Log Out" : "Log in"}
            </button>
        </div>
    );
}
export default Child;
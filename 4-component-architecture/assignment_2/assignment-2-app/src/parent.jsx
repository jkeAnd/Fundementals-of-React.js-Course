import Child from './child';


function  Parent({isLoggedIn, setIsLoggedIn}) {
   
    return (
        <div>
            <Child 
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn} />
        </div>
    );
}

export default Parent;
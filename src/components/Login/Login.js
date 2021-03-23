import './style.css';
function Login({children,id}){
    return (
        <div id={id} className="flex items-center w-full h-screen overflow-hidden lg:w-1/2 -mt-16 md:-mt-12">
           <div className="container mx-auto">
                <div className="max-w-md mx-auto">
                    {children}
                </div>
            </div>
        </div>
    );
}
export default Login;
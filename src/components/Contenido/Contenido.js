function Contenido({ children }){
    return (
        <div className="flex flex-wrap overflow-hidden lg:flex-row-reverse lg:divide-y lg:divide-y-reverse mt-32 md:mt-20">
            {children}
        </div>
    );
}
export default Contenido;

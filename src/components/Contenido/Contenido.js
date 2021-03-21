function Contenido({ children }){
    return (
        <div className="flex flex-wrap overflow-hidden lg:flex-row-reverse lg:divide-y lg:divide-y-reverse">
            {children}
        </div>
    );
}
export default Contenido;

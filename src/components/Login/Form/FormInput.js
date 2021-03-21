function FormInput({type,name,id,placeholder}){
    return (
        <input type={type} name={name} id={id} placeholder={placeholder}
        class="w-full px-3 py-2 mb-5 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300"/>
    );
}
export default FormInput;
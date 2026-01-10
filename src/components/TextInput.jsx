export default function TextInput ({label, value, onChange, placeholder}){
    return (
        <span className="addMovieItems">
            <label className="label">{label}</label>
            <input 
            className="input" 
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder} 
            />
        </span>
    )
}
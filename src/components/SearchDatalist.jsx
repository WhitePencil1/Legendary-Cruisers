/* eslint-disable react/prop-types */
export default function SearchDatalist({id, values}) {
    return(
        <datalist id={id}>
            {values && values.map(value => (
                <option key={value} value={value}>{value}</option>
            ))}
        </datalist>
    )
}
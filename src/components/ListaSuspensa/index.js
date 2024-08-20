import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div>
            <labe>{props.label}</labe>
            <select>
                {props.itens.map(item => {
                    return <option kay={item}>{item}</option>}
                )}
            </select>
        </div>
    )

}

export default ListaSuspensa;
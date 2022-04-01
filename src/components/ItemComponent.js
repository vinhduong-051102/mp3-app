function ItemComponent({ props }) {
    const { name, singer, description, timeRemain } = props
    return (
        <div className="row">
            <div className="information-music">
                <h3>{name}</h3>
                <p>{singer}</p>
            </div>
            <p>{description}</p>
        </div>
    )
}

export default ItemComponent
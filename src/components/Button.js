const Button = ({ url }) => {
    return (
        <button className="button">
            <a href={url}>Make API Call Again</a>
        </button>
    )
}

export default Button;
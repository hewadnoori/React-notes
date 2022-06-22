import { StyledButton } from './Styles/Button.style' //use curly brackets when importing a variable

function StBtn({ type, text }) {
    return (
        <StyledButton className={type}>{text}</StyledButton>
    )
}

export default StBtn
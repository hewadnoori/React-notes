import styled from 'styled-components'//after installing npm i --save styled-components into the terminal, we can import styles
//export styled buttons allows us to style buttons with regular css.
export const StyledButton = styled.button`
    background-color: red;
    cursor: pointer;
    display: inline-block;
    font-weight: 600;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, .3);

    &.orange{          
        background-color: #fd7e14;
        color: #000;
    }
    &.indigo{          
        background-color: #6610f2;
        color: #fff;
    }
    &.brown{          
        background-color: rgb(128, 98, 98);
        color: #fff;
    }
    &:hover {
        opacity: 0.9;
    }
      
    &:active {
        transform: scale(.98);
        box-shadow: none;
    }
      
    &.pill {
        border-radius: 15px;
    }
      
    &.lg {
        padding: .5rem 1.2rem;
    }
`;
//&.orange == button.orange which targets a button with the orange class!




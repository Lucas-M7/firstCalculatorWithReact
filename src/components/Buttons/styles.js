import { styled } from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 20px;
    border: 1px solid #CDCDCD;
    background-color: #EEEEEE;
    cursor: pointer;
    font-size: 24px;
    font-weight: 700px;
    flex: 1;
    color: #444444;
    margin: 3px;

    &:hover {
        background-color: #4444;
        transition: .3s all ease-out;
        opacity: 0.6
    }
`
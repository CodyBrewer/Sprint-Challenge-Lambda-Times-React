import React from 'react';
import styled from 'styled-components';

export const TabStyle = styled.div`
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    color: #fff;
    background-color: #333;
    margin: 0 5px;
    padding: 2px 10px;
    font-size: 12px;
    letter-spacing: 2px;
    cursor: pointer;
    font-weight: bold;
    &:hover{
        text-decoration: underline;
    }
`
export const ActiveTab = styled(TabStyle)`
    background-color: #fff;
    color: #333;
    border: 2px solid #333;
`
import styled from 'styled-components';
import { IoWarningOutline } from "react-icons/io5";
import { MdOutlineMarkEmailRead, MdFileDownload } from "react-icons/md";
import { FcOk } from "react-icons/fc";
import { IoClose } from "react-icons/io5";
import { rightIn } from '../../utils/animations';

export const Container = styled.div `
    display: flex;
    max-width: 24rem;
    margin: 0 auto;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    animation: ${rightIn} .2s;
    position: absolute;
    right: 20px;
    bottom: 30px;
    z-index: 9;
`;

export const NotificationHeader = styled.div `
    flex-shrink: 0;

    > button {
        background: unset;
    }
`;

export const WarningIcon = styled(IoWarningOutline) `
    width: 5rem;
    height: 5rem;
    margin-top: 0.75rem;
    color: #e44c4e;
`;


export const EmailIcon = styled(MdOutlineMarkEmailRead) `
    width: 5rem;
    height: 5rem;
    margin-top: 0.75rem;
`;


export const UpdateIcon = styled(MdFileDownload) `
    width: 5rem;
    height: 5rem;
`;

export const SuccessIcon = styled(FcOk) `
    width: 5rem;
    height: 5rem;
`;


export const CloseIcon = styled(IoClose) `
    width: 1.25rem;
    height: 1.25rem;
    position: absolute;
    top: 12px;
    right: 12px;
    color: #bfbfbf;
    
    &:hover {
        cursor: pointer;
    }
`;

export const Content = styled.div `
    margin-left: 1.5rem;
    padding-top: 0.25rem;

    > h4 {
        color: #1a202c;
        font-size: 1.25rem;
        line-height: 1.25; 
    }

    > p {
        color: #718096;
        font-size: 1rem;
        line-height: 1.5; 
    }
`;
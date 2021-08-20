import React , {useContext} from 'react';
import { AuthContext } from '../context/auth-context';
import If from './IF.js';

const Acl = function (props){
    const context = useContext (AuthContext);
        let okToRender = false;
        try {
            okToRender = context.loggedIn 
                && props.capability
                ? context.user.capabilities.includes(props.capability)
                : false;
        } catch (error) {
            console.log('Not Authorized', error.message);
        }

        return (
            <If condition={okToRender}>
                {props.children}
            </If>
        )
    
}
export default Acl;
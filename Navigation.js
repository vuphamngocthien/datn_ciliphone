import React,{useContext} from 'react';

import { NavigationContainer } from '@react-navigation/native';

import ProductNavigation from './screens/navigation/ProductNavigation';



export default function Navigation  (props)  {
 
    return (
        <NavigationContainer>
            {
          
                <ProductNavigation /> 
             
            }
        </NavigationContainer>


    )
}

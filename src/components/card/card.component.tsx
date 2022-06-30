import React from "react";
import {View,Text,Image} from 'react-native'
import {CardStyles} from './card.component.style';

interface IProps {
    imageURL:string,
    nameProduct:string,
    valueProduct:string,
    numItem:string
}

export const CardComponent:React.FC<IProps> = ({imageURL,nameProduct,valueProduct,numItem}) => {
    return (
        <View style={CardStyles.containerMain}>
            <View style={CardStyles.containerImage}>
                <Image 
                style={CardStyles.image}
                source={{uri:imageURL}}
                resizeMode={'contain'}
            />
            </View>
            <View style={CardStyles.containerInfos}>
                <Text style={CardStyles.title}>{nameProduct}</Text>
                <View style={CardStyles.rowInfos}>
                    <Text>Numero:#{numItem}</Text>
                    <Text style={CardStyles.titlePrice}>R$ {valueProduct}</Text>
                </View>
            </View>
        </View>
    )
}
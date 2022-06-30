import React from "react";
import {CardComponent} from '../components/card/card.component'
import {mainStyles} from './main.page.style'
import Data from '../data.json'
import { Text, View,FlatList, Button } from "react-native";


export const MainPage = () => {
    const [renderList, setRenderList] =  React.useState(false);
    
    function hundleList(){ 
       return setRenderList(!renderList)
    }

    function renderListItem({item}: {
        item:{
            id: number;
            nameProduct: string;
            valueProduct: string;
            imageURL: string
        }
    }){
        return (
            <CardComponent  
                key={item.id}
                imageURL={item.imageURL}
                nameProduct={item.nameProduct}
                valueProduct={item.valueProduct}
                numItem={item.id.toString()}
            />
        )
    }

    return (
        <>
            <View style={mainStyles.mainComponent}>
                <Text style={mainStyles.title}>Testing List With {Data.length} items</Text>
                <Button title={renderList ? 'Apagar Lista' : 'Gerar Lista'} onPress={hundleList}/>
            </View>

            <FlatList 
                data={renderList ? Data : null}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderListItem}
            />
        </>
    )
}
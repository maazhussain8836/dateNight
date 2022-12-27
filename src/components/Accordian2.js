import React, { useState } from 'react';
import {ExpandableListView} from 'react-native-expandable-listview';
import {View,Text, Image, Animated} from 'react-native';
const CONTENT = [
    {
      id: '42',
      categoryName: 'Item 1',
      customItem: (
        <View style={{flexDirection: 'column'}}>
          <Animated.Text>Custom Item</Animated.Text>
          <Animated.Text>Custom Item</Animated.Text>
          <Animated.Text>Custom Item</Animated.Text>
          <Animated.Text>Custom Item</Animated.Text>
        </View>
      ),
      subCategory: [
        {
          customInnerItem: (
            <View style={{flexDirection: 'column', marginLeft: 15}}>
              <Animated.Text>Custom Item</Animated.Text>
              <Animated.Text>Custom Item</Animated.Text>
            </View>
          ),
          id: '1',
          name: '',
        },
        {id: '2', name: 'Sub Item 2'},
      ],
    },
    {
      id: '96',
      categoryName: 'Item 2',
      subCategory: [{id: '1', name: 'Sub Item 1'}],
    },
    {
      id: '12',
      categoryName: 'Item 3',
      subCategory: [
        {id: '1', name: 'Category 1'},
        {id: '2', name: 'Category 2'},
        {id: '3', name: 'Category 3'},
      ],
    },
  ];
  

 const Accordian2=()=> {
    
  const handleItemClick=({index})=> {
    console.log(index);
  };

  const handleInnerItemClick=({innerIndex, item, itemIndex})=> {
    console.log(innerIndex);
  };

 return (
    <ExpandableListView
    // ExpandableListViewStyles={{borderTopWidth:1}} // styles to expandable listview
    // renderInnerItemSeparator={false} // true or false, render separator between inner items
    // renderItemSeparator={false} // true or false, render separator between Items
    // itemContainerStyle={{}} // add your styles to all item container of your list
    // itemLabelStyle={{}} // add your styles to all item text of your list
    // customChevron={{}} // your custom image to the indicator
    // chevronColor="white" // color of the default indicator
    // innerItemContainerStyle={{}} // add your styles to all inner item containers of your list
    // itemLabelStyle={{}} // add your styles to all inner item text of your list
    // itemImageIndicatorStyle={{}} // add your styles to the image indicator of your list
    animated={true} // sets all animations on/off, default on
    // defaultLoaderStyles?: ViewStyle; // Set your styles to default loader (only for animated={true})
    // customLoader?: JSX.Element; Pass your custom loader, while your content is measured and rendered (only for animated={true})
    data={CONTENT}
    onInnerItemClick={handleInnerItemClick}
    onItemClick={handleItemClick}
  />
    );
  }
  export default Accordian2;
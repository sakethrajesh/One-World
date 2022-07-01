import { View, Text } from 'react-native'
import React from 'react'
import { ZoomableGroup, ComposableMap, Geographies, Geography } from 'react-native-simple-maps'

const Explore = () => {
  const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"
  return (
    <View>
      <ComposableMap>
            <Geographies geography={geoUrl}>
              {(geographies) =>
                geographies.map(geography => (
                  <Geography key={geography.id} geography={geography} />
                ))
              }
            </Geographies>
        </ComposableMap>
    </View>
  )
}

export default Explore
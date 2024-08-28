import {
    YMap,
    YMapDefaultSchemeLayer,
    YMapDefaultFeaturesLayer,
    YMapComponentsProvider,
    YMapDefaultMarker,
    // ...other components
} from "ymap3-components";

function Map() {
    return (
        <YMapComponentsProvider apiKey="5949372d-04c6-4c82-8d2b-f7ae4ac61d58">
            <YMap location={{ center: [25.229762, 55.289311], zoom: 9 }}>
                <YMapDefaultSchemeLayer />
                <YMapDefaultFeaturesLayer />
                <YMapDefaultMarker coordinates={[55.74653905676048, 37.59085062939455]} />
            </YMap>
        </YMapComponentsProvider>
    );
}

export default Map;

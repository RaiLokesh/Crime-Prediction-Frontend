import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MyMap = ({lat, lon, setLat, setLon}) => {
    const changeLngLat = (lngLat) =>{
        setLat(lngLat.lat)
        setLon(lngLat.lng)
    }
    return (
        <Map
            mapboxAccessToken={process.env.REACT_APP_MAP_BOX_ACCESS_TOKEN}
            initialViewState={{
                latitude: lat,
                longitude: lon,
                zoom: 12
            }}
            style={{ width: "100%", height: "100vh" }}
            mapStyle="mapbox://styles/lokeshrai/cldh5wq2v002s01lfvnp8zzet"
        >
            <Marker onDragEnd={(e)=>changeLngLat(e.lngLat)} longitude={lon} draggable={true} latitude={lat} color="red" />
        </Map>
    );
}
export default MyMap;
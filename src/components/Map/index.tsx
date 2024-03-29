import { MapContainer, TileLayer, Marker, MapConsumer } from 'react-leaflet'
import { useRouter } from 'next/dist/client/router'
import * as S from './styles'
import { useRecoilState, useRecoilValue } from 'recoil'
import { boundAtom } from 'atoms/boundAtom'

type Place = {
  id: string
  name: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
}

export type MapProps = {
  places?: Place[]
  setMapRef?: (map: any) => void
  mapRef?: any
}

const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY
const MAPBOX_USERID = process.env.NEXT_PUBLIC_MAPBOX_USERID
const MAPBOX_STYLEID = process.env.NEXT_PUBLIC_MAPBOX_STYLEID




const CustomTileLayer = () => {
  return MAPBOX_API_KEY ? (
    <TileLayer
      attribution='© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      url={`https://api.mapbox.com/styles/v1/${MAPBOX_USERID}/${MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_API_KEY}`}
    />
  ) : (
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  )
}


const Map = ({ places, setMapRef, mapRef }: MapProps) => {
  const router = useRouter()
  const [bound, setBound] = useRecoilState(boundAtom)
  const boundState = useRecoilValue(boundAtom)
  
  function handleClick(slug: string) {
    console.log(bound, boundState)
    setBound({LatLng: mapRef.getCenter(), zoom: mapRef.getBoundsZoom(mapRef.getBounds())})
    router.push(`/place/${slug}`)
  }
  
  return (
    <S.MapWrapper>
      <MapContainer
        whenCreated={setMapRef}
        center={[bound.LatLng.lat, bound.LatLng.lng]}
        zoom={bound.zoom}
        minZoom={3}
        maxBounds={[
          [-180, 180],
          [180, -180]
        ]}
        style={{ height: '100%', width: '100%' }}
      >
      
        <MapConsumer>
          {(map) => {
            const width =
              window.innerWidth ||
              document.documentElement.clientWidth ||
              document.body.clientWidth

            if (width < 768) {
              map.setMinZoom(2)
            }

            console.log('map center:', map.getCenter())
            return null
          }}
        </MapConsumer>
        <CustomTileLayer />

        {places?.map(({ id, name, location, slug }) => {
          const { latitude, longitude } = location

          return (
            <Marker
              key={`place-${id}`}
              position={[latitude, longitude]}
              title={name}
              eventHandlers={{
                click: () => handleClick(slug)
              }}
            />
          )
        })}
      </MapContainer>
    </S.MapWrapper>
  )
}

export default Map

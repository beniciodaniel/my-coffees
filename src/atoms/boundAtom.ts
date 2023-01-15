import { atom } from 'recoil'

export const boundAtom = atom({
  key: 'boundAtom', // unique ID (with respect to other atoms/selectors)
  default: { LatLng: {lat: 0, lng: 0}, zoom: 0 } // default value (aka initial value)
})

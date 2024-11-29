import { useEffect } from 'react'

import { useAppDispatch } from '@/store/hooks'
import { setCoords } from '@/store/weather-slice'

const options = {
   enableHighAccuracy: true,
   timeout: 5000,
   maximumAge: 0,
}
const useCoords = function () {
   const dispatch = useAppDispatch()

   useEffect(() => {
      navigator.geolocation.getCurrentPosition(
         function (e) {
            const { latitude: lat, longitude: lng } = e.coords

            const coordsObj = { lat: +lat.toFixed(3), lng: +lng.toFixed(3) }

            dispatch(setCoords(coordsObj))
         },
         function (err) {
            alert(`${err}`)
         },
         options,
      )
   }, [dispatch])
}

export default useCoords

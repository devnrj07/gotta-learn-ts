export interface MapLike {
    location: { latitude: number, longitude: number }
    title(): string
}

export class CustomMap {
    mymap: any;
    marker: any;
    popup: any;

    constructor(divId = 'mapid') {
        //call map library and create MapObject
        this.mymap = L.map(divId)

        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94LXVzZXItMjUwMyIsImEiOiJja21ud2k3aDcwNXluMm9sZmVkMGgxamZrIn0.KV_2K43OEuWGwrv__W1Tgg', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1IjoibWFwYm94LXVzZXItMjUwMyIsImEiOiJja21ud2k3aDcwNXluMm9sZmVkMGgxamZrIn0.KV_2K43OEuWGwrv__W1Tgg'
        }).addTo(this.mymap);
        this.mymap.on('click', this.handleOnMapClick.bind(this))


    }

    setView([lat, long]: [number, number] = [51.505, -0.09], zoom = 14) {
        this.mymap.setView([lat, long], zoom);
        return this;
    }

    addMarker(map: MapLike) {
        const { location: { latitude, longitude } } = map;
        this.marker = L.marker([latitude, longitude]).addTo(this.mymap)
        this.marker.bindPopup(map.title()).openPopup();
        return
    }

    handleOnMapClick(event) {
        console.log({ event })
        const { latlng: { lat, lng } } = event;
        console.log({ lat, lng })
        const popup = L.popup()
        popup.setLatLng(event.latlng)
            .setContent("You clicked the map at " + event.latlng.toString())
            .openOn(this.mymap)
        // const marker = L.marker([70.5059, -12.6642]).addTo(this.mymap)

    }
}
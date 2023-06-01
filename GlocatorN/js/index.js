let mapView;
let searchView;
let loadingIcon;
var citiesDeopdown;
var appSettings;
var appData;

document.addEventListener("DOMContentLoaded", async function (event) {

    appData = {
    "proxy": {
        "proxyURL": "https://gisapps.momra.gov.sa/LandFence/proxy/proxy.ashx",
        "urlPrefix": [
            "https://landsFence.momra.gov.sa",
            "https://landsFenceLayer.momra.gov.sa"
        ]
    },
    "gisLayerUrl": {
        "baseMap": "https://landsFence.momra.gov.sa/hosted/rest/services/Hosted/BaseMap_FinalCart_Projected/VectorTileServer",
        "VacantLandsFenceMapServer": "https://landsFenceLayer.momra.gov.sa/server/rest/services/GISProjects/VacantLandsFence/MapServer",
        "BasicMap": "https://landsFenceLayer.momra.gov.sa/server/rest/services/BaseMap/BasicMap/MapServer",
        "Cities": "https://landsFenceLayer.momra.gov.sa/server/rest/services/Bundaries/Cities/MapServer"
    },
    "gisLayerIndex": {
        "VacantLandsFenceMapServer": {
            "WhiteParcelS": 0
        },
        "BasicMap": {
            "Districts": 3,
            "StreetCenterlines": 0
        },
        "Cities": 0
    },
    "esriWorldGeocoder": {
        "apiKey": "AAPK239a78fde67246debda63be0fe7f3719Pp7RasSdnbj4zaywKXMH69wWSZ290MK0ouhqtyiVBInzKaAC4nyTMubbaxb_ANhw",
        "geocodeServerUrl": "https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer"
    },
    "api": {},
    "Intgration": {},
    "appschema": {},
    "isProduction": true
	};//await getConfig('./config.json');
    //	appData = await appSettings.json();
    appData.isProduction == false ? console.log(appData) : undefined;

    toggle = document.querySelector('.toggle');
    toggleList = document.querySelector('.toggleList');
    toggleListIcon = document.querySelector('.toggleListIcon');

    dropDownList = document.querySelector('.list-item');
    dropDownListDetail = document.querySelector('.list-item-detail');

    let dropdownHeaderTitle = document.querySelector('.list-item-header');

    toggle.addEventListener('click', function () {
        dropDownList.classList.toggle('open');
    })

    toggleList.addEventListener('click', function () {
        dropDownListDetail.classList.toggle('open');
        dropdownHeaderTitle.classList.toggle('open');
    })

    const ulSearchSuggestionDOM = document.querySelector("#searchSuggestionUl");
    const SearchInputEl = document.querySelector("#searchName");
    loadingIcon = document.querySelector("#bxLoading");


    SearchInputEl.addEventListener('keyup', function (e) {
        if (e.defaultPrevented) {
            return;
        }
        var key = e.key || e.keyCode;
        if (key === 'Enter' || key === 13) {
            goToSearchResults(SearchInputEl.value, ulSearchSuggestionDOM);
        }
    });
    document.querySelector('#searchBtn').addEventListener('click', function (e) {
        if (IsEnterKeyClicked(e)) {
            goToSearchResults(SearchInputEl.value, ulSearchSuggestionDOM);
        }
    })
    SearchInputEl.addEventListener('keyup', async function (event) {
        let searchText = event.target.value;
        if (IsEnterKeyClicked(event)) {
            goToSearchResults(SearchInputEl.value, ulSearchSuggestionDOM);
            return;
        }
        appData.isProduction == false ? console.log(searchText.length) : undefined;
        if (searchText.length < 2) return;
        ToggleSearchLoadIcon();
        searchView.suggest(searchText).then(results => {
            if (loadingIcon.classList.contains("bx-loader-alt")) {
                ToggleSearchLoadIcon();
            }
            while (ulSearchSuggestionDOM.firstChild) {
                ulSearchSuggestionDOM.removeChild(ulSearchSuggestionDOM.firstChild);
            }
            results.results[0].results.map(x => {
                let li = document.createElement('li')
                li.setAttribute('data-key', x.key)
                li.setAttribute('data-sourceIndex', x.sourceIndex)
                li.setAttribute('data-text', x.text)
                li.setAttribute('onclick', 'goToSuggestedSearchResults(this)')
                li.innerText = x.text;
                ulSearchSuggestionDOM.append(li)
            })
            appData.isProduction == false ? console.log(results) : undefined;
        })

    })
    let config = {
        // enableProxy: true,
        proxyURL: appData.proxy.proxyURL,
        urlPrefix: appData.proxy.urlPrefix,
        vectorTileURL: appData.gisLayerUrl.baseMap,
        title: 'VectorTilebasemap',
        id: 'VectorTilebasemap',
        divContainer: 'aboulmagd',
        attributionControl: false,
        zoomControl: 'top-left',
        thumbnailUrl: './assets/vtbasemap.png'
    }
   

});

/* start dropdown */


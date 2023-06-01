var mapView;
var map;
var selecteddistrict = false;
var selecteddistrictCode;
var Modal;
var isclicked = false;
var activtysubids;
var dataObj = {}
var parcelObj;
var params;
var RegionIndex;
var DistrictIndex;
var buttonElem; var imageprocessing = false;
$(document).ready(function () {
    var javacriptVariable = $("#HFT").val();
    //alert(javacriptVariable);
    Jsonquery = QueryStringToJSON()
    $("#Region").select2();
    $("#City").select2();
    $("#streets").select2();
    $("#districts").select2();
    let versionNumber = Math.random();
    $.getJSON("config/settings.json?v=" + versionNumber, function (data) {
        if (data && data.services) {
            services = data.services;
        }
    })
        .fail(function () {

            //console.log("file not found");
        })
        .always(function () {
            loadmap();
        });

});
function QueryStringToJSON() {

    const queryString = window.location.search;
    var pairs = location.search.slice(1).split('&');
    var result = {};
    pairs.forEach(function (pair) {
        pair = pair.split('=');
        result[pair[0]] = decodeURIComponent(pair[1] || '');
    });
    return result;
}
let S4 = () => {
    return (((1 + Math.random()) * 0x10000) | 0).toString(20).substring(1);
};

let generateGuid = () => {
    return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0, 3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase()
}
async function loadmap() {

    require([
        "esri/widgets/Print",
        "esri/Map",
        "esri/views/MapView",
        "esri/widgets/ScaleBar",
        "esri/layers/FeatureLayer",
        "esri/Basemap",
        "esri/layers/MapImageLayer",
        "esri/layers/VectorTileLayer",
        "esri/geometry/geometryEngine",
        "esri/layers/GraphicsLayer",
        "esri/widgets/Expand",
        "esri/core/watchUtils",
        "esri/request",
        "esri/layers/support/Field",
        "esri/geometry/support/webMercatorUtils",
        "esri/views/draw/Draw",
        "esri/rest/print",
        "esri/rest/support/PrintParameters",
        "esri/rest/support/PrintTemplate",
        "esri/config",
        "esri/core/urlUtils",
        "esri/geometry/Polyline",
        "esri/geometry/geometryEngineAsync",
        "esri/geometry/Point",
        "esri/Graphic",
        "esri/renderers/UniqueValueRenderer",
        "esri/geometry/SpatialReference",
        "esri/geometry/Extent",
        "esri/widgets/Legend",
        "esri/widgets/Measurement",
        "esri/geometry/support/geodesicUtils",
        "esri/rest/identify",
        "esri/rest/support/IdentifyParameters"

    ], (
        PrintWidget,
        Map,
        MapView,
        ScaleBar,
        FeatureLayer,
        Basemap,
        MapImageLayer,
        VectorTileLayer,
        geometryEngine,
        GraphicsLayer,
        Expand,
        watchUtils,
        request,
        Field,
        webMercatorUtils,
        Draw,
        print,
        PrintParameters,
        PrintTemplate,
        esriConfig,
        urlUtils,
        Polyline,
        geometryEngineAsync,
        Point,
        Graphic,
        UniqueValueRenderer,
        SpatialReference,
        Extent,
        Legend,
        Measurement,
        geodesicUtils,
        identify, IdentifyParameters
    ) => {
            esriConfig.request.proxyUrl = services.proxyUrl.url;
            urlUtils.addProxyRule({
                proxyUrl: services.proxyUrl.url,
                urlPrefix: "https://portal.momra.gov.sa"
            });
            urlUtils.addProxyRule({
                proxyUrl: services.proxyUrl.url,
                urlPrefix: "https://app1.momra.gov.sa"
            });
          
        urlUtils.addProxyRule({
            proxyUrl: services.proxyUrl.url,
            urlPrefix: "https://app3.momra.gov.sa"
        });

            urlUtils.addProxyRule({
                proxyUrl: services.proxyUrl.url,
                urlPrefix: "https://gis65.momra.gov.sa"
            });
            $('#Region1').change(async function () {
                RegionCode = ($(this).val())
                let data = await getdata("REGIONCODE='" + RegionCode + "'");
                console.log(data);

            })



            $('#Region').change(function () {
             //  // //  momraGisCore.Loading("block");
                RegionCode = ($(this).val())
                GetSelesctedRegion(RegionCode);
                //RegionIndex = momraGisCore.findItemInList(AllRegion.map(item => item.attributes), "REGIONCODE", RegionCode);
                //if (!isclicked) {
                //    AddGraphicandZoomNew(AllRegion[RegionIndex].geometry, "Polygon", 7)
                //    //AddGraphicandZoom(AllRegion[RegionIndex]);
                //    GetCitiesByIntersect(AllRegion[RegionIndex]);
                //    $('#City')[0].disabled = false;
                //    selecteddistrictCode = "";

                //}
                //if (!isclicked)
                //    map.remove(districtGraphiclayer)




            });

            $('#City').change(function () {
           //    // //  momraGisCore.Loading("block");
                CityCode = ($(this).val())
                GetSelesctedCity(CityCode)
              


            });

        $('#districts').change(function () {
         //  // //  momraGisCore.Loading("block");

                disCode = ($(this).val())
                GetSelesctedDistrict(disCode)





            });
            $('#streets').change(function () {
                streetCode = ($(this).val())
                var StreetIndex = momraGisCore.findItemInList(StreetsInSelectedDistrict.map(item => item.attributes), "OBJECTID", parseInt(streetCode));
                clipstreet(StreetsInSelectedDistrict[StreetIndex].geometry);
                if (!isclicked)
                    map.remove(districtGraphiclayer)

            });


            let widgetHeaderToggle = document.querySelector('.wh-toggle');
            let widgetBody = document.querySelector('.widget-container.cascading-dropdown > .widget-body');
            let widgetFooter = document.querySelector('.widget-container.cascading-dropdown > .widget-footer');
            let widgetHeaderIcon = document.querySelector('.widget-container.cascading-dropdown .widget-header > .widget-header-icon');
            let searchLoading = document.querySelector('button.search-button > .bx-search');
            Modal = new bootstrap.Modal(document.getElementById('staticBackdrop'), {
                keyboard: false
            })

            widgetHeaderToggle.addEventListener('click', function () {
                widgetBody.classList.toggle('open');
                widgetFooter.classList.toggle('open');
                widgetHeaderIcon.classList.toggle('open');
            });

            let config = {
                proxyURL: services.proxyUrl.url,
                urlPrefix: [ "https://portal.momra.gov.sa"],
                vectorTileURL: services.vectorBasemap1.url,
                title: 'VectorTilebasemap',
                id: 'VectorTilebasemap',
                divContainer: 'view',
                attributionControl: false,
                zoomControl: 'top-left',
                minScale: 18489334.715908278,
                zoomlevel: 5,
                thumbnailUrl: './assets/images/map/vectorTile.png'
            }
            /** map initialization */
            View = momraGisCore.vectorTileMap(config);
            map = new Map({
                // basemap: "streets"
            });
            Layer = new VectorTileLayer({
                url: services.vectorBasemap1.url,
                title: "vector"

            });
            let HazerLayer = new FeatureLayer({
                url: services.Hazer.url,
            });
            HazerLayer.opacity = 0.3;

            map.addMany([Layer, HazerLayer])
            // Create a map view instance
            mapView = new MapView({
                container: "view",
                map: map

            });

            //view.ui.remove("zoom");



            setTimeout(() => {
                $("#l1").css("display", "flex");
                $("#l2").css("display", "flex");
                $("#l3").css("display", "flex");
                $("#l4").css("display", "flex");
                mapView.ui.add("l1", "top-center");
                mapView.ui.add("l2", "top-center");
                mapView.ui.add("l3", "top-center");
                mapView.ui.add("l4", "top-center");
            }, 2000);

        mapView.on("click", async function (event) {
            dataObj = {};
                buttonElem = document.querySelector('.button');
                buttonElem.classList.add('spinning');


                // should be in district level to click
                $('#accept').prop('disabled', true);
                $("#accept").css("background", "#136a6a");
              
                isclicked = true;

                // validate if the district selected
                if (!selecteddistrict) {
                    let alertSettings = {
                        title: 'تنبيه',
                        msgBody: 'يرجى تحديد الحي من قائمة البحث المتقدم ومن ثم الضغط على  الخريطة'
                    }
                    appAlert(alertSettings);
                    isclicked = false
                    var functionName = "Validate if the district selected or not";
                    AddLog("يرجى تحديد الحي من قائمة البحث المتقدم ومن ثم الضغط على  الخريطة", functionName, "49", "1", "Error");

                    return false;
                }
                // initialize the object;
                dataObj.PlanName = "لا يوجد مخطط"
                dataObj.PlanNO = "-1"
            dataObj.ParcelNo = "-1";
            dataObj.LandUsag = "لا يوجد";

                // the main function

                

                init(event);


                IsMins = false;
            
            });

            if (mapView) {
                params = new IdentifyParameters();
                params.tolerance = 0;
                params.layerIds = [1, 2, 3, 4, 5];
                params.layerOption = "all";
                params.width = 571;
                params.height = 754;

                var bounds = {
                    north: 30.644517804598962,
                    south: 16.362291242098962,
                    west: 28.914111237833723,
                    east: 62.22465811283372
                };
                var input = document.getElementById('searchCriteria');
                var autocomplete = new google.maps.places.Autocomplete(input, {
                    bounds: bounds
                    //strictBounds : true			
                });
                autocomplete.bindTo('bounds', mapView.map);
                autocomplete.addListener('place_changed', function () {
                    var place = autocomplete.getPlace();
                    if (!place.geometry) {

                        window.alert("No details available for input: '" + place.name + "'");
                        return;
                    }
                    //const point = {
                    //    type: "point", // autocasts as new Point()
                    //    longitude: place.geometry.location.lng(),
                    //    latitude: place.geometry.location.lat()

                    //};
                    // let webmarkatorPoint=  webMercatorUtils.lngLatToXY(x, y)
                    const point = {
                        "mapPoint": {
                            type: "point", // autocasts as new Point()
                            longitude: place.geometry.location.lat(),//webmarkatorPoint[0],
                            latitude: place.geometry.location.lng()//webmarkatorPoint[1]

                        }
                    };
                    var x = webMercatorUtils.geographicToWebMercator(point.mapPoint)
                    point.mapPoint = x
                    isclicked = true;
                    
                    init(point);


                });






                //get the cities
                // GetAllCities();
                //getdata("1=1");
                //let HazerLayer = new FeatureLayer({
                //     URL to the service
                //    url: "https://app1.momra.gov.sa/arcgis/rest/services/kroki/Kroki_New/MapServer/0"
                //});

                // momraGisCore.createLayer("https://app1.momra.gov.sa/arcgis/rest/services/kroki/Kroki_New/MapServer/0","featureLayer")
                //var map = new Map({

                //});
                //map.add(featureLayer);
                //  mapView.map.add(HazerLayer);
                // GetAllRegion();
                if (Jsonquery.activityids != undefined && Jsonquery.activityids != null && Jsonquery.activityids != "")
                    activtysubids = Jsonquery.activityids.split(',');
                if (Jsonquery.serviceid != undefined && Jsonquery.serviceid != null && Jsonquery.serviceid != "")
                    srvceid = Jsonquery.serviceid;


                if (Jsonquery.investmentSite == undefined && Jsonquery.investmentSite == null) {
                    Jsonquery.investmentSite = "false";
                }


                //filter by amana
                Loadcheckboundaries();












                /** use appAlert for any alert you want error-success-warning */
                let alertSettings = {
                    title: 'رسالة حفظ',
                    msgBody: 'تم حفظ البيانات بنجاح'
                }
                //appAlert(alertSettings);
                /**
                 * loading function to implement loading indicator on any operation you need 
                 * with the following paramter 'none' to hide and 'block' to show
                 *  laoding('none');
                 */
                //laoding('block');
                /**
                 * enable loading on searchCriteria input strat loading 
                 * using startSearchLoading function and endSearchLoading 
                 * function to end loading 
                 * */
                // startSearchLoading();
                //startSearchLoading();
                /** add Home widget */
                //let homeSettings = {
                //    view: mapView,
                //    widgetPosition: "top-left"
                //}
                //momraGisCore.Home(homeSettings);

                ///** add locate widget */
                //momraGisCore.createLocate(mapView, "top-left");

                ///** add google stallite */
                //let baseMapSettings = {
                //    mapView: mapView,
                //    esriBaseMapType: 'googleStallite',
                //    basemapPosition: "bottom-left",
                //    toggled: true,
                //    thumbnailUrl: './assets/images/map/satellite.png',
                //    callbackWhenToggled: mapToggleRespones
                //}
                //  momraGisCore.mapToggled(baseMapSettings);
                //document.getElementById('loadingOverlay').style.display = 'none';
            }

            function startSearchLoading() {
                searchLoading.classList.remove('bx');
                searchLoading.classList.remove('bx-search');
                searchLoading.classList.add('spinner-border');
            }

            function endSearchLoading() {
                searchLoading.classList.remove('spinner-border');
                searchLoading.classList.add('bx');
                searchLoading.classList.add('bx-search');
            }

            function mapToggleRespones(event) {
                console.log(event);
            }

            function laoding(params) {
                document.getElementById('loadingOverlay').style.display = params;
            }

            function appAlert(settings) {
                document.getElementById('staticBackdropLabel').innerHTML = settings.title;
                document.querySelector('.modal-body').innerHTML = settings.msgBody;
                Modal.show();
                buttonElem.classList.remove('spinning');

            }




        })

}


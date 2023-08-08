var AllRegion; var AllCities; var CiteisInSelectedRegion; var DistrictsInSelectedCity; var StreetsInSelectedDistrict; var DistrictGeometryClip;

// general query 
async function Query(QueryURL, where = "1=1", geometry=null, distance="",returnGeometry=true) {

    let options = {
        url: QueryURL,
        where: where,
        geometry: geometry,
        distance: distance,
        units: "esriSRUnit_Meter",
        returnGeometry: returnGeometry
    }
    let data = await momraGisCore.getFeatures(options);
    return data;
    $("#accept").css("background", "#136a6a");

}

// to add graphic , draw and zoom to the feature 
async function AddGraphicandZoom(feature,zoom=true)
{
    let settings =
    {
        feature: feature,
        mapView: mapView,
        polygonSymbol: polylineSymbol,
        polylineSymbol: polylineSymbol,
        pointSymbol: imageSymbol

    }
    momraGisCore.graphicToMap(settings);
    let ZoomSetting =
    {
        geometry: feature,
        mapView: mapView
    }
    if (zoom) 
        momraGisCore.zoomToFeatureOnMap(ZoomSetting);
    
  
    
}
function polylineSymbol() {
    let symbol = {
        type: "simple-fill",  // autocasts as new SimpleFillSymbol()
        color: [227, 139, 79, 0.8],
        style: "none"

    };
    return symbol;
}
function imageSymbol() {
    let symbol = {
        type: "picture-marker",
        url: './images/pin_images.png',
        width: "25px",
        height: "25px"
    };
    return symbol;
}  

function imageSymbol1() {
    let symbol = {
        type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
        style: "square",
        color: "blue",
        size: "8px",  // pixels
        outline: {  // autocasts as new SimpleLineSymbol()
            color: [255, 255, 0],
            width: 3  // points
        }
    };
    return symbol;
}

function getdata(condition)
{
    require(["esri/tasks/QueryTask", "esri/tasks/support/Query"], (QueryTask, Query) =>
    {
        var data;
        let queryTask = new QueryTask({
            url: services.regionLayerUrl.url
        });
       
        let query = new Query();
        query.returnGeometry = true;
        query.outFields = ["*"];
        query.where = condition; 

        queryTask.execute(query).then(function (results) {
          //  console.log(results.features);
            data = results.features;
           
           

            $('#Region').find('option').remove().end().append('<option>' + "اختر المنطقة" + '</option>');
            for (var i = 0; i < results.features.length; i++) {
                $('#Region').append('<option value=' + results.features[i].attributes.REGIONCODE+'>' + results.features[i].attributes.REGIONARNAME + '</option>');

            }
            return data;

        });

        
      
    });


}


//fill all region
async function GetAllRegion() {
   // //  momraGisCore.Loading("block");
    require([
        "esri/rest/query", "esri/rest/support/Query",
    ], function (query, Query) {
        let queryUrl = services.regionLayerUrl.url;
        let queryObject = new Query();
        queryObject.returnGeometry = false;
        queryObject.outFields = ["*"];
        queryObject.where = "1=1";
        query.executeQueryJSON(queryUrl, queryObject).then(function (data) { 
             if (data.features.length != 0) {
                    // AllRegion = data.features;
                     console.log(data.features);
                     $('#Region').find('option').remove().end().append('<option>' + "اختر المنطقة" + '</option>');
        for (var i = 0; i < data.features.length; i++) {
            $('#Region').append('<option value="' + data.features[i].attributes.REGIONCODE + '">' + data.features[i].attributes.REGIONARNAME + '</option>');

        }
       
    }
    else
        $('#Region').find('option').remove().end().append('<option>' + "لا يوجد المنطقة" + '</option>');

            if (Jsonquery.x != undefined && Jsonquery.x != null && Jsonquery.x != "" && Jsonquery.y != undefined && Jsonquery.y != null && Jsonquery.y != "") {
                x = Jsonquery.x;
                y = Jsonquery.y;
                const point = {
                    type: "point", // autocasts as new Point()
                    longitude: x,
                    latitude: y

                };

                GetSelesctedRegionByGeomerty(point,true)
            }
            momraGisCore.Loading("none");
        })

 
        })
}
// تعبئة كل المدن
async function GetAllCities() {
   // //  momraGisCore.Loading("block");
    require([
        "esri/rest/query", "esri/rest/support/Query",
    ], function (query, Query) {
        let queryUrl = services.CityLayerUrl.url;
        let queryObject = new Query();
        queryObject.returnGeometry = true;
        queryObject.outFields = ["*"];
        queryObject.where = "1=1";
        query.executeQueryJSON(queryUrl, queryObject).then(function (data) { 
    
    AllCities = data.features;
    if (data.features.length != 0)
    {
        AllCities = data.features;
        console.log(data.features);
        $('#City').find('option').remove().end().append('<option>' + "اختر المدينة" + '</option>');
        for (var i = 0; i < data.features.length; i++)
        {
            $('#City').append('<option value="' + data.features[i].attributes.CITEYCODE + '">' + data.features[i].attributes.CITEYARNAME + '</option>');

        }
    }
    else
        $('#City').find('option').remove().end().append('<option>' + "لا يوجد مدينة" + '</option>');

            momraGisCore.Loading("none");
        })
        })
}

// fill cities
async function GetCitiesByIntersect(feature) {
   // //  momraGisCore.Loading("block");
        require([
            "esri/rest/query", "esri/rest/support/Query", "esri/geometry/geometryEngine"
        ], function (query, Query, geometryEngine) {
            let ptBuff
            if (feature.geometry.rings.length < 2) {
                ptBuff = geometryEngine.geodesicBuffer(feature.geometry, -5, "meters");
            } else 
                ptBuff=feature.geometry
           
        let queryUrl = services.CityLayerUrl.url;
        let queryObject = new Query();
        queryObject.returnGeometry = false;
        queryObject.outFields = ["*"];
        queryObject.where = "1=1";
            queryObject.geometry = ptBuff;
        query.executeQueryJSON(queryUrl, queryObject).then(function (data) { 
   

    //let ptBuff = feature.geometry;
    //require(["esri/geometry/geometryEngine"], function (geometryEngine) {
    //   //  ptBuff = geometryEngine.geodesicBuffer(feature.geometry, -1, "miles");
    // })
       
        //let data = await Query(services.CityLayerUrl.url, "1=1", ptBuff)
            if (data.features.length != 0) {
                CiteisInSelectedRegion = data.features;
                console.log(data.features);
                $('#City').find('option').remove().end().append('<option>' + "اختر المدينة" + '</option>');
                for (var i = 0; i < data.features.length; i++) {
                    $('#City').append('<option value="' + data.features[i].attributes.CITEYCODE + '">' + data.features[i].attributes.CITEYARNAME + '</option>');

                }
            }
            else {
                $('#City').find('option').remove().end().append('<option>' + "لا يوجد مدينة" + '</option>');
                $('#districts').find('option').remove().end().append('<option>' + "اختر الحي" + '</option>');
                $('#streets').find('option').remove().end().append('<option>' + "اختر الشارع" + '</option>');
            }

            if (Jsonquery.x != undefined && Jsonquery.x != null && Jsonquery.x != "" && Jsonquery.y != undefined && Jsonquery.y != null && Jsonquery.y != "") {
                x = Jsonquery.x;
                y = Jsonquery.y;
                // let webmarkatorPoint=  webMercatorUtils.lngLatToXY(x, y)

                const point = {

                        type: "point", // autocasts as new Point()
                        longitude: x,//webmarkatorPoint[0],
                        latitude: y//webmarkatorPoint[1]
                        
                };
                GetSelesctedCitybyGeometry(point);

            }
        momraGisCore.Loading("none");

        })
 })
}

// fill the districts 
async function GetDistrictsByIntersect(feature) {
   // //  momraGisCore.Loading("block");
    require([
        "esri/rest/query", "esri/rest/support/Query", "esri/geometry/support/webMercatorUtils",
    ], function (query, Query, webMercatorUtils) {
        let queryUrl = services.districtsLayerUrl.url;
        let queryObject = new Query();
        queryObject.returnGeometry = false;
        queryObject.outFields = ["*"];
        queryObject.where = "1=1";
        queryObject.geometry = feature.geometry;
        query.executeQueryJSON(queryUrl, queryObject).then(function (data) { 
 
    if (data.features.length != 0) {
      //  DistrictsInSelectedCity = data.features;
        console.log(data.features);
        $('#districts').find('option').remove().end().append('<option>' + "اختر الحي" + '</option>');
        for (var i = 0; i < data.features.length; i++) {
            if (data.features[i].attributes.DISTRICTARNAME == "خارج حدود الاحياء")
            {
                let muncipality;
                if (data.features[i].attributes.SUBMUNICIPALITY==null) 
                    muncipality = data.features[i].attributes.MUNICIPALITY
                else 
                    muncipality = data.features[i].attributes.SUBMUNICIPALITY

                
                $('#districts').append('<option value="' + data.features[i].attributes.OBJECTID + '">' + "" + data.features[i].attributes.DISTRICTARNAME + " - " + muncipality+ '</option>');
            }
            else
            $('#districts').append('<option value="' + data.features[i].attributes.OBJECTID + '">' + data.features[i].attributes.DISTRICTARNAME + '</option>');

        }
    }
    else
        $('#districts').find('option').remove().end().append('<option>' + "لا يوجد أحياء" + '</option>');


            if (Jsonquery.x != undefined && Jsonquery.x != null && Jsonquery.x != "" && Jsonquery.y != undefined && Jsonquery.y != null && Jsonquery.y != "") {
                x = Jsonquery.x;
                y = Jsonquery.y;
                // let webmarkatorPoint=  webMercatorUtils.lngLatToXY(x, y)

                const point = {
                    "mapPoint": {
                        type: "point", // autocasts as new Point()
                        longitude: x,//webmarkatorPoint[0],
                        latitude: y//webmarkatorPoint[1]

                    }
                };
                var x = webMercatorUtils.geographicToWebMercator(point.mapPoint)
                point.mapPoint = x
                isclicked = true;
                dataObj.PlanName = "لا يوجد مخطط"
                dataObj.PlanNO = "-1"
                dataObj.ParcelNo = "-1";
                dataObj.LandUsag = "لا يوجد";

                init(point)
            }
            momraGisCore.Loading("none");
        })
    })
}
 

// fill the streets :
async function GetstreetsByIntersect(feature) {
   // //  momraGisCore.Loading("block");

    require([
        "esri/rest/query", "esri/rest/support/Query", "esri/geometry/geometryEngine"
    ], function (query, Query, geometryEngine) {
        let ptBuff = geometryEngine.geodesicBuffer(feature.geometry, -5, "meters");

        let queryUrl = services.streetLayerUrl.url;
        let queryObject = new Query();
        queryObject.returnGeometry = true;
        queryObject.outFields = ["*"];
        queryObject.where = "1=1";
        queryObject.geometry = ptBuff;
        query.executeQueryJSON(queryUrl, queryObject).then(function (data) { 
    
    if (data.features.length != 0) {
        StreetsInSelectedDistrict = data.features;
        console.log(data.features);
        $('#streets').find('option').remove().end().append('<option>' + "اختر الشارع" + '</option>');
        for (var i = 0; i < data.features.length; i++) {
            $('#streets').append('<option value="' + data.features[i].attributes.OBJECTID + '">' + data.features[i].attributes.STREETNAME + '</option>');

        }
    }
    else
        $('#streets').find('option').remove().end().append('<option>' + "لا يوجد شوارع" + '</option>');

            momraGisCore.Loading("none");
        })
        })
}

async function GetNearestStreetsByIntersect(point) {
    require([
        "esri/rest/query", "esri/rest/support/Query", "esri/geometry/Point", "esri/geometry/geometryEngine", "esri/geometry/Polyline",
    ], function (query, Query, Point, geometryEngine, Polyline) {
       
        var obj1 = [];
        // create point 
        var point1 = new Point({
            x: point.longitude,
            y: point.latitude,
            spatialReference: { wkid: 4326 }
        });
        let queryUrl = services.streetLayerUrl.url;
        let queryObject = new Query();
        queryObject.returnGeometry = true;
        queryObject.outFields = ["*"];
        queryObject.where = "1=1";
        queryObject.distance = "50";
        queryObject.units = "esriSRUnit_Meter";
        queryObject.geometry = point;
        query.executeQueryJSON(queryUrl, queryObject).then(function (Streetdata) {
            for (var i = 0; i < Streetdata.features.length; i++)
            {
                // create polyline 
                var line = new Polyline({
                    paths: Streetdata.features[i].geometry.paths,
                    spatialReference: { wkid: 4326 }
                });
                var distance = geometryEngine.distance(point1, line);
                obj1.push(distance);

                console.log(i, distance)
            }
            var nearestIndex = obj1.indexOf(Math.min.apply(null, obj1))
            if (Streetdata.features.length != 0 && Streetdata.features[nearestIndex].attributes.STREETNAME != null)
            {
                dataObj.Street = Streetdata.features[nearestIndex].attributes.STREETNAME + ""
                dataObj.StreetCode = Streetdata.features[nearestIndex].attributes.STREETCODE + ""
            $('#streets').find('option').remove().end().append('<option value="' + dataObj.StreetCode + '">' + dataObj.Street+"" + '</option>');
          }
          else {
        dataObj.Street = "-1"
        dataObj.StreetCode="-1"
        $('#streets').find('option').remove().end().append('<option value="' + "0" + '">' + "لا يوجد شارع" + '</option>');
           }
           
            console.log("result", dataObj)
            popup(point);
            activateBTN()
        })
    })
}
function activateBTN()
{
    //if (dataObj.imgURL != undefined && dataObj.imgURL != null && dataObj.imgURL != "") {
        console.log("result", dataObj)
        buttonElem.classList.remove('spinning');
        $('#accept').prop('disabled', false);
    $("#accept").css("background", "#136a6a");
    setTimeout(function () {
        isclicked = false
        }, 1000); 
        
    //}
    //else {
    //    setTimeout(function () {
    //        activateBTN()
    //    }, 1000); }

   
}

async function GetSelesctedRegionByGeomerty(point,getCity) {
    require([
        "esri/rest/query", "esri/rest/support/Query", "esri/geometry/Point"
    ], function (query, Query, Point) {

        let queryUrl = services.regionLayerUrl.url;
        let queryObject = new Query();
        queryObject.returnGeometry = true;
        queryObject.outFields = ["*"];
        queryObject.where = "1=1";
        queryObject.geometry = point;
        query.executeQueryJSON(queryUrl, queryObject).then(function (regionData) {

            $('#Region').find('option').remove().end().append('<option value="' + regionData.features[0].attributes.REGIONCODE + '">' + regionData.features[0].attributes.REGIONARNAME + '</option>');
            $('#Region')[0].disabled = true;
            AllRegion = regionData.features;
          //  $('#Region').val(regionData.features[0].attributes.REGIONCODE).trigger('change');
            RegionIndex = 0;

            if (getCity) {
                GetSelesctedCitybyGeometry(point)
            }
            else
            {
                $('#Region').val(regionData.features[0].attributes.REGIONCODE).trigger('change');


            }

        })
    })
}

async function GetSelesctedRegion(REGIONCODE) {
    require([
        "esri/rest/query", "esri/rest/support/Query", "esri/geometry/Point"
    ], function (query, Query, Point) {


        let queryUrl = services.regionLayerUrl.url;
        let queryObject = new Query();
        queryObject.returnGeometry = true;
        queryObject.outFields = ["*"];
        queryObject.where = "REGIONCODE='" + REGIONCODE+"'";
        query.executeQueryJSON(queryUrl, queryObject).then(function (regionData) {
            RegionIndex = 0;
            AllRegion = regionData.features;

            if (!isclicked) {
                AddGraphicandZoomNew(AllRegion[RegionIndex].geometry, "Polygon", 7)
                //AddGraphicandZoom(AllRegion[RegionIndex]);
                GetCitiesByIntersect(AllRegion[RegionIndex]);
                $('#City')[0].disabled = false;
                selecteddistrictCode = "";

            }
            if (!isclicked)
                map.remove(districtGraphiclayer)


        })
    })
}
async function GetSelesctedCitybyGeometry(point) {
    require([
        "esri/rest/query", "esri/rest/support/Query", "esri/geometry/Point", "esri/geometry/support/webMercatorUtils"
    ], function (query, Query, Point, webMercatorUtils) {

        let queryUrl = services.CityLayerUrl.url;
        let queryObject = new Query();
        queryObject.returnGeometry = true;
        queryObject.outFields = ["*"];
        queryObject.where = "1=1";
        queryObject.geometry = point;
        query.executeQueryJSON(queryUrl, queryObject).then(function (cityData) {
            $('#City').find('option').remove().end().append('<option value="' + cityData.features[0].attributes.CITEYCODE + '">' + cityData.features[0].attributes.CITEYARNAME + '</option>');
            $('#City')[0].disabled = true;
            CiteisInSelectedRegion = cityData.features;

            $('#City').val(cityData.features[0].attributes.CITEYCODE).trigger('change');
            
            
            
          
        })
    })
}
async function GetSelesctedCity(CityCode) {
    require([
        "esri/rest/query", "esri/rest/support/Query", "esri/geometry/Point"
    ], function (query, Query, Point) {

        let queryUrl = services.CityLayerUrl.url;
        let queryObject = new Query();
        queryObject.returnGeometry = true;
        queryObject.outFields = ["*"];
        queryObject.where = "CITEYCODE='" + CityCode + "'";
        query.executeQueryJSON(queryUrl, queryObject).then(function (cityData) {
            CitiesIndex = 0
            CiteisInSelectedRegion = cityData.features
            if (!isclicked) {
                if (Jsonquery.x == undefined || Jsonquery.x == null || Jsonquery.x == "" || Jsonquery.y == undefined || Jsonquery.y == null || Jsonquery.y == "")
                    AddGraphicandZoomNew(CiteisInSelectedRegion[CitiesIndex].geometry, "Polygon", 9)
                //AddGraphicandZoom(CiteisInSelectedRegion[CitiesIndex]);

                GetDistrictsByIntersect(CiteisInSelectedRegion[CitiesIndex]);
                $('#districts')[0].disabled = false
                selecteddistrictCode = "";
            }
            if (!isclicked)
                map.remove(districtGraphiclayer)




          

        })
    })
}
async function GetSelesctedDistrict(objectId) {
    require([
        "esri/rest/query", "esri/rest/support/Query", "esri/geometry/Point"
    ], function (query, Query, Point) {

        let queryUrl = services.districtsLayerUrl.url;
        let queryObject = new Query();
        queryObject.returnGeometry = true;
        queryObject.outFields = ["*"];
        queryObject.where = "OBJECTID='" + objectId + "'";
        query.executeQueryJSON(queryUrl, queryObject).then(function (districtData) {
            DistrictIndex = 0
            DistrictsInSelectedCity = districtData.features
            DistrictGeometryClip = districtData.features[0].geometry;
            if (!isclicked) {
                keepDistrict = DistrictsInSelectedCity[DistrictIndex];
                //AddGraphicandZoom(DistrictsInSelectedCity[DistrictIndex]);
                //AddGraphicLayerandZoom(DistrictsInSelectedCity[DistrictIndex]);
                AddGraphicLayerandZoom(DistrictsInSelectedCity[DistrictIndex].geometry, 14)

                GetstreetsByIntersect(DistrictsInSelectedCity[DistrictIndex])
                $('#streets')[0].disabled = false
                selecteddistrict = true;
                selecteddistrictCode = disCode;
            }
        })
    })
}
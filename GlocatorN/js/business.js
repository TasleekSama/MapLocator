var pt;
var districtGraphiclayer;
let DistrictOBJECTID;
let amanaMAZARAMANACODE;
let MuncMAZARAMANACODE;
let template1;
async function init(event)
{
    try { require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/MapImageLayer",
        "esri/rest/identify",
        "esri/rest/support/IdentifyParameters"
    ], function (Map, MapView, MapImageLayer, identify, IdentifyParameters) { 
      //  let point = event.mapPoint;
        let point = {
            type: "point", // autocasts as new Point()
            longitude: event.mapPoint.longitude,
            latitude: event.mapPoint.latitude,
            spatialReference: { wkid: 4326 }
        };
        params.geometry = event.mapPoint;
        params.mapExtent = mapView.extent;
        identify.identify(services.BasemapLayer.url, params).then(function (response)
        {
            for (var i = 0; i < response.results.length; i++) {
                const layerId = response.results[i].layerId;
                const feture = response.results[i].feature;
                switch (layerId) {
                    case 5:
                        dataObj.AmanaName = feture.attributes.AMANAARNAME;
                         amanaMAZARAMANACODE = feture.attributes.MAZARAMANACODE
                        break;
                    case 4:
                        dataObj.Municipality = feture.attributes.MUNICIPALITY ;
                        dataObj.MunicipalityCode = feture.attributes.MUNICIPALITYUNIQUECODE ;
                         MuncMAZARAMANACODE = feture.attributes.MAZARAMANACODE ;
                        break;
                    case 3:
                        
                        dataObj.District = feture.attributes.DISTRICTARNAME;
                        dataObj.DistrictCode = feture.attributes.DISTRICTCODE;
                         DistrictOBJECTID = feture.attributes.OBJECTID;
                        break;
                    case 2:
                             if (feture.attributes.PLANNAME == null) {
                                      dataObj.PlanName = "بدون";
                                  dataObj.PlanNO = feture.attributes.PLANNO + ""
                                }
                              else
                                  {
                                  dataObj.PlanName = feture.attributes.PLANNAME + ""
                                  dataObj.PlanNO = feture.attributes.PLANNO + ""
                                  }
                        break;
                    case 1:
                        dataObj.LandUsag = feture.attributes.LANDUSE + "";
                        dataObj.ParcelNo = feture.attributes.PARCELNO;
                        break;
                 
                }
            }

           

            // validate if the click inside the amana or baladia
            if (Jsonquery.munid != undefined &&( Jsonquery.munid.toUpperCase() == amanaMAZARAMANACODE.toUpperCase() && Jsonquery.munid.toUpperCase() == MuncMAZARAMANACODE.toUpperCase())) {
                let alertSettings = {
                    title: 'تنبيه',
                    msgBody: 'يرجى إختيار الموقع داخل الأمانة أو البلدية المختارة'
                }
                appAlert(alertSettings);
                isclicked = false
                var functionName = "validate if the point inside Amana in identify function ";
                AddLog(" يرجى إختيار الموقع داخل الأمانة أو البلدية المختارة  ", functionName, "49", "1", "Error", JSON.stringify(point));
                return false;
            }
            if (selecteddistrictCode != DistrictOBJECTID && (Jsonquery.x == undefined || Jsonquery.x == "")) {
                let alertSettings = {
                            title: 'تنبيه',
                            msgBody: 'يرجى الإختيار داخل الحي الذي تم إختياره'
                        }
                appAlert(alertSettings);
                isclicked = false
                var functionName = "validate if the point inside selected district in identify function ";
                AddLog("يرجى الإختيار داخل الحي الذي تم إختياره ", functionName, "49", "1", "Error", JSON.stringify(point));

                return false;
            }
            //if (dataObj.ParcelNo == "-1")
            //{
            //    let alertSettings = {
            //                  title: 'تنبيه',
            //                  msgBody: 'يجب اختيار الموقع على قطعة أرض'
            //    }
            //    isclicked = false
            //    appAlert(alertSettings);
            //    var functionName = "validate if the point inside parcel in identify function ";
            //    AddLog("يجب اختيار الموقع على قطعة أرض", functionName, "49", "1", "Error", JSON.stringify(point));

            //    return false;
            //} 
			//else if (dataObj.LandUsag == "سكني")
            //{
             //   let alertSettings = {
             //                   title: 'تنبيه',
             //                   msgBody: 'لا يمكن تحديد المبنى لأن نوع المبنى سكني'
               //             }

              //  appAlert(alertSettings);
              //  isclicked = false
             //   return false;

           // }


            if (Jsonquery.munid == undefined) {
                $('#Region').val(AllRegion[RegionIndex].attributes.REGIONCODE).trigger('change');
                $('#City').val(CiteisInSelectedRegion[CitiesIndex].attributes.CITEYCODE).trigger('change');
            }

            mapView.graphics.removeAll();
            if (Jsonquery.x == undefined || Jsonquery.x == "") {
                $('#districts').val(DistrictOBJECTID).trigger('change');
            }
           

            $('#City').find('option').remove().end().append('<option value="' + CiteisInSelectedRegion[CitiesIndex].attributes.CITEYCODE + '">' + CiteisInSelectedRegion[CitiesIndex].attributes.CITEYARNAME + '</option>');
            $('#districts').find('option').remove().end().append('<option value="' + DistrictOBJECTID + '">' + dataObj.District + '</option>');

            dataObj.RegionName = AllRegion[RegionIndex].attributes.REGIONARNAME
            dataObj.CITEYNAME = CiteisInSelectedRegion[CitiesIndex].attributes.CITEYARNAME;
            dataObj.Location =
                {
                    lat: point.latitude,
                    lng: point.longitude
                };
            //dataObj.imgURL = "https://gisapps.momra.gov.sa/proxy/proxy.ashx?https://gisapps.momra.gov.sa/BaladyImage/2023_4_11_15_35_35_184.jpg";

            dataObj.GIS = "TRUE";
            dataObj.y = point.latitude;
            dataObj.x = point.longitude;
            GetNearestStreetsByIntersect(point);

        })

   
  

  

        })
    } catch 
    {
        var functionName = "identify function ";
        AddLog("خطأ بخدمة معرفة بيانات النقطة", functionName, "49", "1", "Error", JSON.stringify(point));
    }
    }
async function SaveFeature(features_) {
    var returnmessage = "";


    var data = { feature: features_, LayerURL: services.HealthLayer.url };
    $.ajax({
        url: services.Save_Service.url,
        type: "POST",
        crossDomain: true,
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(data),
        success: function (result) {
            if (result.IsSuccessfull) {
                returnmessage = "تم الحفظ بنجاح";
                //   alert(returnmessage);
            }
            else {
                returnmessage = "خطأ أثناء الحفظ "
                //  alert(returnmessage);
            }


            SendBaladyObject();
            return (returnmessage);
        },
        error: function (result) {
            console.log(result);
            SendBaladyObject();
        }
    });
}
async function UpdateFeature(features_) {
    var returnmessage = "";


    var dati = { feature: features_, LayerURL: services.HealthLayer.url };

    $.ajax({
        url: services.UpdateFeature.url,
        type: "POST",
        crossDomain: true,
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(dati),
        success: function (result) {
            if (result.IsSuccessfull) {
                returnmessage = "تم التعديل بنجاح";
                //   alert(returnmessage);

            }
            else {
                returnmessage = "خطأ أثناء التعديل "
                // alert(returnmessage);
            }
            SendBaladyObject();
        },
        error: function (result) {
            console.log(result);
            SendBaladyObject();
        }
    });
}
let popup = (point) => {
    require(["esri/symbols/PictureMarkerSymbol", "esri/geometry/Point", "esri/Graphic", "esri/PopupTemplate", "esri/layers/GraphicsLayer"], (PictureMarkerSymbol, Point, Graphic, PopupTemplate, GraphicsLayer) => {
         template1 =
            `
    <div class="card"> 
    <div class="card-header ">
      <table style="direction: ltr" >
        <tbody>
 <tr>
                <td><h4>الأمانة :</h4>
                </td>
                <td><h5>${dataObj.AmanaName}</h5>
                </td>
            </tr>


   <tr>
                <td><h4>المدينة :</h4>
                </td>
                <td><h5>${dataObj.CITEYNAME}</h5>
                </td>
            </tr>
            <tr>
                <td><h4>بلدية :</h4>  
                </td>
                <td><h5>${dataObj.Municipality}</h5>
                </td>
            </tr>
            <tr>
                <td> <h4>حي  :</h4>
                </td>
                <td><h5>${dataObj.District}</h5>
                </td>
            </tr>
            <tr>
                <td> <h4>مخطط   :</h4>
                </td>
                <td><h5>${dataObj.PlanName}</h5>
                </td>
            </tr>
             <tr>
                <td> <h4>شارع   :</h4>
                </td>
                <td><h5>${dataObj.Street}</h5>
                </td>
            </tr>
             <tr>
                <td> <h4>استعمال الأرض  :</h4>
                </td>
                <td><h5>${dataObj.LandUsag}</h5>
                </td>
            </tr>

            <tr>
            <td><h4>إحداثي :</h4>
            </td>
            <td><h5>${dataObj.Location.lat + "," + dataObj.Location.lng}</h5>
            </td>
        </tr>
        </tbody>
    </table>
    <div class="item-footer ">
    </div>
    </div>
  </div>
 `
        AddGraphicandZoomNew(point,"Point",18)
      
    })
}
let AddGraphicLayerandZoom = (polygon, zoomlevel) => {
    require(["esri/symbols/PictureMarkerSymbol", "esri/geometry/Point", "esri/geometry/Polygon", "esri/Graphic", "esri/PopupTemplate", "esri/layers/GraphicsLayer"], (PictureMarkerSymbol, Point, Polygon, Graphic, PopupTemplate, GraphicsLayer) => {

        mapView.graphics.removeAll();
        map.remove(districtGraphiclayer);
        const polygon_ = {
            type: "polygon",
            rings: polygon.rings,
            spatialReference: { wkid: 4326 } // for example, it can be another CRS that you want to use
        };
        let symbol = {
            type: "simple-fill",  // autocasts as new SimpleFillSymbol()
            color: [227, 139, 79, 0.8],
            style: "none"

        };
        const polygonGraphic = new Graphic({
            geometry: polygon_,
            symbol: symbol
        });

         districtGraphiclayer = new GraphicsLayer({
            graphics: [polygonGraphic]
        });
        map.add(districtGraphiclayer);
       // mapView.graphics.add(polygonGraphic);
        mapView.goTo({
            target: polygonGraphic.geometry.extent,
            zoom: zoomlevel
        });
    })
    
}
let AddGraphicandZoomNew = (geometry,type,zoomlevel) => {
    require(["esri/symbols/PictureMarkerSymbol", "esri/geometry/Point", "esri/geometry/Polygon", "esri/Graphic", "esri/PopupTemplate", "esri/layers/GraphicsLayer"], (PictureMarkerSymbol, Point, Polygon, Graphic, PopupTemplate, GraphicsLayer) => {
        let opts = {
            duration: 500  // Duration of animation will be 5 seconds
        };
        mapView.graphics.removeAll();
        if (type == "Polygon")
        {
            let polygon_ = {
                type: "polygon",
                rings: geometry.rings,
                spatialReference: { wkid: 4326 } // for example, it can be another CRS that you want to use
            };
            let symbol = {
                type: "simple-fill",  // autocasts as new SimpleFillSymbol()
                color: [227, 139, 79, 0.8],
                style: "none"

            };

            const polygonGraphic = new Graphic({
                geometry: polygon_,
                symbol: symbol
            });
            mapView.graphics.add(polygonGraphic);
            mapView.goTo({
                target: polygonGraphic.geometry.extent,
                zoom: zoomlevel
            }, opts);
        }
        else if (type == "Polyline")
        {
            let  polyline = {
                type: "polyline", // autocasts as new Polyline()
                paths: geometry.paths
            };

            let symbol = {
                type: "simple-fill",  // autocasts as new SimpleFillSymbol()
                color: [227, 139, 79, 0.8],
                style: "none"

            };
            const PolyLineGraphic = new Graphic({
                geometry: polyline,
                symbol: symbol
            });

            mapView.graphics.add(PolyLineGraphic);
            mapView.goTo({
                target: PolyLineGraphic.geometry.extent,
                zoom: zoomlevel,

            }, opts);

        }
        else if (type == "Point")
        {
            let point = {
                type: "point", // autocasts as new Point()
                longitude: geometry.longitude,
                latitude: geometry.latitude,
                spatialReference: { wkid: 4326 } 
            };
          
            let symbol = {
                type: "picture-marker",
                url: './images/pin_images.png',
                width: "25px",
                height: "25px"
            };

            const PointGraphic = new Graphic({
                geometry: point,
                symbol: symbol
            });
           
            mapView.graphics.add(PointGraphic);
            mapView.goTo({
                target: PointGraphic.geometry,
                zoom: zoomlevel,
                
            }, opts);
            setTimeout(function () {
                mapView.popup.open({
                    // Set the popup's title to the coordinates of the location
                    title: "تفاصيل الموقع :",
                    location: point, // Set the location of the popup to the clicked location
                    content: template1 // content displayed in the popup
                });
}, 200);
          

        }


      
       
    })
}
 function Loadcheckboundaries ()
 {
    // //  momraGisCore.Loading("block");

    require([
        "esri/rest/query", "esri/rest/support/Query", "esri/geometry/Point"
    ],  function (query, Query, Point) {
        if (Jsonquery.munid != null && Jsonquery.munid != undefined) {
            let mazarCode = Jsonquery.munid.toUpperCase();
            let queryUrl = services.amanaLayerUrl.url;
            let queryObject = new Query();
            queryObject.returnGeometry = true;
            queryObject.outFields = ["*"];
            queryObject.where = "MAZARAMANACODE ='" + mazarCode.toUpperCase() + "' OR MAZARAMANACODE = '" + mazarCode.toLowerCase() + "'";
            query.executeQueryJSON(queryUrl, queryObject).then( function (amanadata)
            {
                if (amanadata.features.length > 0) {
                    // AMana
                    //let regionData = await Query(services.regionLayerUrl.url, "1=1", amanadata.features[0].geometry.centroid)
                    //$('#Region').find('option').remove().end().append('<option value="' + regionData.features[0].attributes.REGIONCODE + '">' + regionData.features[0].attributes.REGIONARNAME + '</option>');
                    //$('#Region')[0].disabled = true;
                    //AllRegion = regionData.features;
                    //$('#Region').val(regionData.features[0].attributes.REGIONCODE).trigger('change');
                    //RegionIndex = 0;


                    GetSelesctedRegionByGeomerty(amanadata.features[0].geometry.centroid,false,true)
                }
                else
                {
                    let queryUrl = services.baladiaLayerUrl.url;
                    let queryObject = new Query();
                    queryObject.returnGeometry = true;
                    queryObject.outFields = ["*"];
                    queryObject.where = "MAZARAMANACODE ='" + mazarCode.toUpperCase() + "' OR MAZARAMANACODE = '" + mazarCode.toLowerCase() + "'";
                    query.executeQueryJSON(queryUrl, queryObject).then( function (Muncdata)
                    {
                        if (Muncdata.features.length > 0) {
                            //Munc
                          //  let regionData = await Query(services.regionLayerUrl.url, "1=1", Muncdata.features[0].geometry.centroid)
                          //  $('#Region').find('option').remove().end().append('<option value="' + regionData.features[0].attributes.REGIONCODE + '">' + regionData.features[0].attributes.REGIONARNAME + '</option>');
                          //  $('#Region')[0].disabled = true;
                          //  AllRegion = regionData.features;
                          //  RegionIndex = 0;
                          ////  let cityData = await Query(services.CityLayerUrl.url, "1=1", Muncdata.features[0].geometry.centroid)
                          //  $('#City').find('option').remove().end().append('<option value="' + cityData.features[0].attributes.CITEYCODE + '">' + cityData.features[0].attributes.CITEYARNAME + '</option>');
                          //  $('#City')[0].disabled = true;
                          //  CiteisInSelectedRegion = cityData.features;
                          //  $('#City').val(cityData.features[0].attributes.CITEYCODE).trigger('change');

                            GetSelesctedRegionByGeomerty(Muncdata.features[0].geometry.centroid, true, false)

                        }
                        else {
                            let alertSettings = {
                                title: 'تنبيه',
                                msgBody: 'كود الأمانة المرسل غير صحيح'
                            }
                            appAlert(alertSettings);
                        }

                    })




                }

            })
        }
        else
        {
            GetAllRegion();
        }
    })
}
async function Loadcheckboundar1ies() { 

if (Jsonquery.munid != null && Jsonquery.munid != undefined) {
    let mazarCode = Jsonquery.munid.toUpperCase();
    let amanadata =await Query(services.amanaLayerUrl.url, "MAZARAMANACODE ='" + mazarCode.toUpperCase() + "' OR MAZARAMANACODE = '" + mazarCode.toLowerCase() + "'","",false)
    //للتأكد من البلدية




    if (amanadata.features.length > 0) {
        // AMana
        let regionData = await Query(services.regionLayerUrl.url, "1=1", amanadata.features[0].geometry.centroid)
        $('#Region').find('option').remove().end().append('<option value="' + regionData.features[0].attributes.REGIONCODE + '">' + regionData.features[0].attributes.REGIONARNAME + '</option>');
        $('#Region')[0].disabled = true;
        AllRegion = regionData.features;
        $('#Region').val(regionData.features[0].attributes.REGIONCODE).trigger('change');
        RegionIndex = 0;
    }
    else {
        let Muncdata = await Query(services.baladiaLayerUrl.url, "MAZARAMANACODE ='" + mazarCode.toUpperCase() + "' OR MAZARAMANACODE = '" + mazarCode.toLowerCase() + "'","",false)
        if (Muncdata.features.length > 0) {
            //Munc
            let regionData = await Query(services.regionLayerUrl.url, "1=1", Muncdata.features[0].geometry.centroid)
            $('#Region').find('option').remove().end().append('<option value="' + regionData.features[0].attributes.REGIONCODE + '">' + regionData.features[0].attributes.REGIONARNAME + '</option>');
            $('#Region')[0].disabled = true;
            AllRegion = regionData.features;
            RegionIndex = 0;
            let cityData = await Query(services.CityLayerUrl.url, "1=1", Muncdata.features[0].geometry.centroid)
            $('#City').find('option').remove().end().append('<option value="' + cityData.features[0].attributes.CITEYCODE + '">' + cityData.features[0].attributes.CITEYARNAME + '</option>');
            $('#City')[0].disabled = true;
            CiteisInSelectedRegion = cityData.features;
            $('#City').val(cityData.features[0].attributes.CITEYCODE).trigger('change');
        }
        else
        {
            let alertSettings = {
                title: 'تنبيه',
                msgBody: 'كود الأمانة المرسل غير صحيح'
            }
            appAlert(alertSettings);
        }
       

    }

}
else {
    //get the cities
    GetAllRegion();
}
}
let SendBaladyObject = () => {
    var functionName = "SendBaladyObject"
    AddLog("تم إرسال البيانات بنجاح", functionName, "49", "1", "Info", JSON.stringify(dataObj));
    setTimeout(function () {
        if (window.opener != null) {
            window.opener.postMessage(dataObj, "*");
            console.log(dataObj);
            buttonElem.classList.remove('spinning');
            self.close();
        }
        else {
            parent.postMessage(dataObj, "*");
            self.close();
            buttonElem.classList.remove('spinning');
            console.log(dataObj);

        }
    }, 1000);
   
  
}
function appAlert(settings) {
    document.getElementById('staticBackdropLabel').innerHTML = settings.title;
    document.querySelector('.modal-body').innerHTML = settings.msgBody;
    Modal.show();
    buttonElem.classList.remove('spinning');

}


let getScreenShot = () => {
    buttonElem.classList.add('spinning');
    $('#accept').prop('disabled', true);
    $("#accept").css("background", "#136a6a");

    let googleimage = "https://maps.googleapis.com/maps/api/staticmap?language=ar&key=AIzaSyA-Hs2J4hgwr1m5ScEnLwpZQpTUdtZfhMI&center=" + dataObj.y + "," + dataObj.x + "&size=500x250&zoom=17&maptype=roadmap&markers=color:red|" + dataObj.y + "," + dataObj.x
    var dati = { imgurl: googleimage };

    $.ajax({
        url: "/GISServices/RestfulService.svc/ImageURL",
        type: "POST",
        crossDomain: true,
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(dati),
        success: function (result)
        {
            scrnShotURL = result;
            dataObj.imgURL = scrnShotURL
            var functionName = "GetScreenShoot";
           // AddLog("تم حفظ الصورة", functionName, "49", "1", "Info", JSON.stringify(dati));

            SendBaladyObject();
        },
        error: function (result) {
            var functionName = "GetScreenShoot";
            AddLog("خطأ عند طباعة الصورة", functionName, "49", "1", "Error", JSON.stringify(dati));


        }

    })
          
        

}

let getEsriScreenShot = () => {
    require(["esri/rest/support/PrintTemplate", "esri/rest/support/PrintParameters", "esri/rest/print"], (PrintTemplate, PrintParameters, print) => {
      
        buttonElem.classList.add('spinning');
        $('#accept').prop('disabled', true);
        $("#accept").css("background", "#136a6a");
        var template = new PrintTemplate();
        template.exportOptions = {
            width: 500,
            height: 250,
            dpi: 96
        };

        template.layout = "MAP_ONLY";
        template.label = "Portrait (Image)";
        template.format = "jpg";
        let params = new PrintParameters({
            view: mapView,
            template: template
        });
        

        //var targetPrint = { ...printTask._getPrintDefinition(map, template), exportOptions: template.exportOptions };

        let generalPrintParam = print.getGpPrintParams(params).then((_generalPrintParam) => {
            let tempWp = JSON.parse(_generalPrintParam.Web_Map_as_JSON);
            tempWp.mapOptions.extent.xmax = mapView.extent.xmax;
            tempWp.mapOptions.extent.ymax = mapView.extent.ymax;
            tempWp.mapOptions.extent.xmin = mapView.extent.xmin;
            tempWp.mapOptions.extent.ymin = mapView.extent.ymin;
            tempWp.operationalLayers[0] = {
                "type": "VectorTileLayer",
                "styleUrl": `${"https://portal.com/hosted/rest/services/Hosted/BaseMap_FinalCart/VectorTileServer"}/resources/styles/root.json`,
                
                "id": "17b546f28af-layer-0",
                "title": "طبقة الأساس",
                "opacity": 1,
                "minScale": 0,
                "maxScale": 0
            };

            var settings = {
                "url":  "/GisServicesApi/api/PrintTask",
                "method": "POST",
                "timeout": 0,
                "headers": {
                    "Content-Type": "application/json",
                    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
                },
                "data": JSON.stringify(tempWp) //wp.value.Web_Map_as_JSON,
            };
            var response = $.ajax(settings).done((_response) => {
                console.log(_response.results[0].value.url)
                dataObj.imgURL = _response.results[0].value.url;
                SendBaladyObject();
            });
        });


        // printTask.execute(params).then(printResult, printError);




    });
}
let AddLog = (message, functionName, messageErrorId, problemTypeId, logType , data = "") =>
{
    var dati = {
            "message": message, "functionName": functionName, "applicationId": 15, "messageErrorId": messageErrorId, "tierId": 1, "componentName": "javascript", "problemTypeId": problemTypeId, "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
        "REQUESTNUMBER": Jsonquery.reqno, "logType": logType, "domain": "https://gisapps.momra.gov.sa", "data": data
        }

        $.ajax({
            url: "/LoggingApi/Logging/add",
            type: "POST",
            crossDomain: true,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(dati),
            success: function (result) {


            },
            error: function (result) {
              

            }
        });


    


}
let clipstreet = (streetGeo)=>
{
    require(["esri/geometry/geometryEngine"], (geometryEngine) => {
        var steetg = geometryEngine.clip(streetGeo, DistrictGeometryClip.extent);/* code goes here */
        AddGraphicandZoomNew(steetg, "Polyline", "15");

});
    


}
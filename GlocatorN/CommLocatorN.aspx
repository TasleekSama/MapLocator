<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="CommLocatorN.aspx.cs" Inherits="GlocatorN.CommLocatorN" %>


<!DOCTYPE html>
<html lang="ar">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>الرخص التجارية التصور الجديد </title>

    <style>
        html,
        body,
        .map {
            height: 100%;
            margin: 0;
        }

   .button {
  display: inline-block;
  outline: none;
  padding: 10px 20px;
  background: #444;
  border-radius: 4px;
  color: #fff;
  border: 0;
  position: relative;
  transition: padding-right 0.3s ease;
  box-shadow: 0 1px 0 #6e6e6e inset, 0px 1px 0 #3b3b3b;
  transition: all 0.3s ease;
}
.button.spinning {
  padding-right: 40px;
}
.button.spinning:after {
  content: "";
  right: 6px;
  top: 50%;
  width: 0;
  height: 0;
  position: absolute;
  border-radius: 50%;
  -webkit-animation: rotate360 0.5s infinite linear, exist 0.1s forwards ease;
          animation: rotate360 0.5s infinite linear, exist 0.1s forwards ease;
}
.button.spinning:before {
  content: "";
  width: 0px;
  height: 0px;
  border-radius: 50%;
  right: 6px;
  top: 50%;
  position: absolute;
  border: 2px solid #000000;
  border-right: 3px solid #27ae60;
  -webkit-animation: rotate360 0.5s infinite linear, exist 0.1s forwards ease;
          animation: rotate360 0.5s infinite linear, exist 0.1s forwards ease;
}
@-webkit-keyframes rotate360 {
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes rotate360 {
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@-webkit-keyframes exist {
  100% {
    width: 15px;
    height: 15px;
    margin: -8px 5px 0 0;
  }
}
@keyframes exist {
  100% {
    width: 15px;
    height: 15px;
    margin: -8px 5px 0 0;
  }
}
.esri-view-user-storage .esri-view-user-storage {
    display: flex;
    flex-direction: row-reverse;
    position: absolute;
    top: 10px;
    right: 50%;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 1px 1px 2px #0000000f;
    padding: 10px;
}
.map-key div {
    width: 20px;
    height: 20px;
    border-radius: 4px;
    margin-left: 5px;
}

.map-key {
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;
    padding: 0 10px;
    border-left: 1px solid #f1f1f1;
    font-family: 'Kufi';
}

.map-key:last-child{
    border-left:0px;
}
    </style>

    <script>
        const urlParams = new URLSearchParams(window.location.search);
        var lang = urlParams.get('lang');
        lang = (lang == null) ? "ar" : lang;
        dojoConfig = {
            locale: lang,
            parseOnLoad: true,
        };
    </script>
    <link rel="stylesheet" href="./style.css">
    <link href="Custom.css" rel="stylesheet" />

    <script src="js/jquery-3.5.1.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>

    <script src="js/select2.min.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA-Hs2J4hgwr1m5ScEnLwpZQpTUdtZfhMI&amp;language=ar&amp;libraries=places"></script>

    <script src="https://js.arcgis.com/4.26/"></script>
</head>

<body>

    
    <div id="view" class="map">
        <div data-wow-delay="0.2s" id="l1" class="wow fadeIn map-key" style="font-size: 12px; display:none;"><div style="background-color: #f1f3f4;"></div> سكني
      </div>
         <div data-wow-delay="0.2s" id="l2" class="wow fadeIn map-key" style="font-size: 12px; display:none;"><div style="background-color: #ebe1e1;"></div> إستعمال مختلط
      </div>
         <div data-wow-delay="0.2s" id="l3" class="wow fadeIn map-key" style="font-size: 12px; display:none;"><div style="background-color: #bdcccc;"></div> الخدمات العامة
      </div>
         <div data-wow-delay="0.2s" id="l4" class="wow fadeIn map-key" style="font-size: 12px; display:none;"><div style="background-color: #fae6c3;"></div> تجاري
      </div>
    </div>


    <!-- widgets-container to add all custome widget inside it -->
    <div class="widgets-container">
        <!-- start widget-container for search elemnt -->
        <div class="widget-container shadow">
            <div style="display: flex;" class="widget-header">
                <!-- start add application home widget -->
                <div class="widget-home-logo">
                    <img src="./assets/images/logo.svg" alt="" style="width: 75px">
                </div>
                <div class="widget-home-title">
                    الرخص التجارية
                </div>
                <!-- end add application home widget -->
            </div>
            <div class="widget-body">
                <div class="search-container">
                    <div class="input-group search-box async-container">
                        <button class="menu-button">
                            <i class='bx bx-menu'></i>
                        </button>
                        <input id="searchCriteria" type="search" placeholder="بحث عن خدمة او مكان" autocomplete="off"
                            class="form-control" />
                        <button class="search-button"><i class='bx bx-search'></i></button>
                    </div>
                </div>
            </div>
            <div style="display: none;" class="widget-footer">
                <span class="widget-footer-item">footer
                </span>
            </div>
        </div>
        <!-- end widget-container for search elemnt -->
        <!-- second widget -->
        <!-- start widget-container for cascading-dropdown elemnt -->
        <div class="widget-container cascading-dropdown">
            <div class="widget-header shadow cPointer wh-toggle">
                <div class="widget-header-title">بحث متقدم</div>
                <div class="widget-header-icon open">
                    <i class='bx bx-chevron-down'></i>
                </div>
            </div>
            <div class="widget-body shadow open">
                <div class="list-body shadow">

                    <div class="form-group" id="RegionCon">
                        <label>المنطقة</label><br />
                        <select class="form-control" id="Region" style="width: 100%;">
                            <option>اختر المنطقة</option>
                        </select>
                    </div>

                    <div class="form-group" id="CityCon">
                        <label>المدينة</label><br />
                        <select class="form-control" id="City" style="width: 100%;" disabled>
                            <option>اختر المدينة</option>
                        </select>
                    </div>
                    <div
                        class="form-group  "
                        id="districtsCon"
                        style="display: block;">
                        <label>الحي</label><br />
                        <select class="form-control" id="districts" style="width: 100%;" disabled>
                            <option>اختر الحي</option>
                        </select>
                    </div>
                    <div
                        class="form-group"
                        id="streetsCon"
                        style="display: block">
                        <label>الشارع</label><br />
                        <select class="form-control" id="streets" style="width: 100%;" disabled>
                            <option>اختر الشارع</option>
                        </select>
                    </div>

                    <div style="padding-top: 10px;">
                        <button id="accept" onclick="getScreenShot()" type="button"  disabled class="btn btn-primary button" 
                            style="background-color: #136a6a; border-color: black; float: left; border: 1px solid #ababab99; font-size: 14px;">موافق</button>
                    </div>
                    <!-- start loading dom -->
                    <div style="display: none;" id="loadingOverlay" class="overlay">
                        <div class="lds-facebook">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <!-- end loading dom -->
                </div>
            </div>
            <div class="widget-footer" style="display: none;">
                <div class="widget-footer-item">
                    kjjakjshdakjsd
                   
                </div>
            </div>
        </div>
        <!-- end widget-container for cascading-dropdown elemnt -->
    </div>

    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">
                        <i class='bx bx-message-check'></i>
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">غلق</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal -->

    <!-- copy-right -->
    <div class="copy-right">
        <p>
            <script>document.write(new Date().getFullYear())</script>
            &copy; وزارة الشؤون البلدية والقروية والإسكان
        </p>
    </div>
    <!-- copy-right -->
     <form id="form1" runat="server">
        <input id="HFT" type="hidden" runat="server" />
    </form>

    <script src="./index.js?v=1.94"></script>
    <script src="js/business.js?v=1.92"></script>
    <script src="js/loadData.js?v=1.92"></script>
    <script src="https://gisapps.momra.gov.sa/momraGisCore/1.0.2/momraGisCore.js"></script>

    <!-- <script src="./app-theme.js"></script> -->
</body>

</html>

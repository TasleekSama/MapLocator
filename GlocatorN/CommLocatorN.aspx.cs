using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace GlocatorN
{
    public partial class CommLocatorN : System.Web.UI.Page
    {
        public string feevalue;

        SSO SSOMOMRA = new SSO();
        IntrospectResponse IntrospectResponse = new IntrospectResponse();
        protected void Page_Load(object sender, EventArgs e)
        {
            HFT.Value = "mahmood";
            // if (Request.Form["authToken"] != null)
           // if (true)
            //{
            //    // string Token = Request.Form["authToken"].ToString();
            //    string Token = "";
            //    IntrospectResponse = SSOMOMRA.validToken(Token);
            //    //if (IntrospectResponse.active == true && IntrospectResponse.client_id == "GisApi view")
            //    if (IntrospectResponse.active == true)
            //    {
            //        Session["NameSSO"] = Token;
            //    }
            //}
            //else
            //{
            //    // Response.Redirect("https://gisapps.momra.gov.sa/ERROR.html");
            //}
        }
    }
}
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web;

namespace GlocatorN
{
public class SSO
    {
   
    string SSOURL = ConfigurationManager.AppSettings.Get("SSO");
    string GisApiSSO = ConfigurationManager.AppSettings.Get("GISClientId");
    string secretSSO = ConfigurationManager.AppSettings.Get("GISClientSecret");

    public IntrospectResponse validToken(string token)
    {

        string introspectEndPoint = $"{SSOURL}/connect/introspect";
        var form = new Dictionary<string, string>
                {
                    {"token", token}
                };
        using (var client = new HttpClient())
        {
            // var clientCredentials = System.Text.Encoding.UTF8.GetBytes($"GisApi:secret");
            var clientCredentials = System.Text.Encoding.UTF8.GetBytes($"{GisApiSSO}:{secretSSO}");
            client.DefaultRequestHeaders.Authorization =
               new AuthenticationHeaderValue("Basic", System.Convert.ToBase64String(clientCredentials));

            HttpResponseMessage tokenResponse = client.PostAsync(introspectEndPoint, new FormUrlEncodedContent(form)).Result;
            var jsonContent = tokenResponse.Content.ReadAsStringAsync().Result;
            IntrospectResponse tok = JsonConvert.DeserializeObject<IntrospectResponse>(jsonContent);
            return tok;
        }

    }
    public bool valdToken(string token)
    {

        string introspectEndPoint = $"{SSOURL}/connect/introspect";
        var form = new Dictionary<string, string>
                {
                    {"token", token}
                };
        using (var client = new HttpClient())
        {
            // var clientCredentials = System.Text.Encoding.UTF8.GetBytes($"GisApi:secret");
            var clientCredentials = System.Text.Encoding.UTF8.GetBytes($"{GisApiSSO}:{secretSSO}");
            client.DefaultRequestHeaders.Authorization =
               new AuthenticationHeaderValue("Basic", System.Convert.ToBase64String(clientCredentials));

            HttpResponseMessage tokenResponse = client.PostAsync(introspectEndPoint, new FormUrlEncodedContent(form)).Result;
            var jsonContent = tokenResponse.Content.ReadAsStringAsync().Result;
            IntrospectResponse tok = JsonConvert.DeserializeObject<IntrospectResponse>(jsonContent);
            return tok.active;
        }

    }
    public async Task<TokenResponse> GetToken()
    {

        string urlString = "https://ssoappdev.momra.gov.sa/connect/token";
        string grant_type = "client_credentials";
        string scope = "GisApi";
        string client_id = "gis.locator";
        string client_secret = "secret";
        using (var client = new HttpClient())
        {
            var clientCreds = System.Text.Encoding.UTF8.GetBytes($"{client_id}:{client_secret}");
            client.DefaultRequestHeaders.Authorization =
              new AuthenticationHeaderValue("Basic", System.Convert.ToBase64String(clientCreds));

            var form = new Dictionary<string, string>
                {
                    {"grant_type", grant_type},
                    {"scope", scope},
                    {"client_id", client_id},
                    {"client_secret", client_secret}
                };
            HttpResponseMessage tokenResponse = await client.PostAsync(urlString, new FormUrlEncodedContent(form));
            var jsonContent = await tokenResponse.Content.ReadAsStringAsync();
            TokenResponse tok = JsonConvert.DeserializeObject<TokenResponse>(jsonContent);
            return tok;
        }
    }

}
public class IntrospectResponse
{
    public string iss { get; set; }
    public int nbf { get; set; }
    public int iat { get; set; }
    public int exp { get; set; }
    public string[] aud { get; set; }
    public string client_id { get; set; }
    public string jti { get; set; }
    public bool active { get; set; }
    public string scope { get; set; }
}
public class TokenResponse
{
    public string access_token { get; set; }
    public int expires_in { get; set; }
    public string token_type { get; set; }
    public string scope { get; set; }
}

}
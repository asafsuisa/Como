using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using Como.utils;
namespace Como.Controllers
{
    public class HomeController : ApiController
    {
        public string GetName()
        {
            return "Hello Como!";
        }

        public List<string> PostFile()
        {
            var httpRequest = HttpContext.Current.Request;

            if(httpRequest.Files.Count > 0)
            {
                foreach (string file in httpRequest.Files)
                {
                    var postedFile = httpRequest.Files[file];

                    Bitmap myImage = (Bitmap)Bitmap.FromStream(postedFile.InputStream);
                    return new PictureAnalysis().GetMostUsedColor(myImage).Select(x => ColorTranslator.ToHtml(x)).ToList();
                }
            }
            return null;
        }
    }
}

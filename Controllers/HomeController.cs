using MVCCockpit.Helpers;
using System.Web.Mvc;

namespace MVCCockpit.Controllers
{
    [SessionAuthorise]
    public class HomeController : Controller
    {
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public ActionResult Index()
        {
            return View();
        }
    }
}
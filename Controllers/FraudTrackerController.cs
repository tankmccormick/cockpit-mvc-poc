using MVCCockpit.Helpers;
using System.Web.Mvc;

namespace MVCCockpit.Controllers
{
    [SessionAuthorise]
    public class FraudTrackerController : Controller
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
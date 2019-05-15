using System.Web.Mvc;

namespace MVCCockpit.Controllers
{
    public class GlobalController : Controller
    {
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        [ChildActionOnly]
        public ActionResult Header()
        {
            return View("Header");
        }
    }
}
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Melonn.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class MelonnController : ControllerBase
    {
        
    }
}
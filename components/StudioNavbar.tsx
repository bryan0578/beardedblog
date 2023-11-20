import Link from "next/link"
import { ArrowLeftCircle } from "lucide-react"
function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex align-middle w-full h-[60px]">
        <Link className="flex items-center text-[#ff6601] px-5" href="/"><span className="flex"><ArrowLeftCircle className="mr-2" /><span>Go Back To Website</span></span></Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavbar

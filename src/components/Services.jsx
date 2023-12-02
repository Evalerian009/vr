import { faCaretRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { services } from "./constants"

const Services = () => {
  return (
    <div className="flex flex-wrap">
      {services.map(service =>(
        <div key={service.id} className={`w-full md:w-1/2 lg:w-1/4 ${service.bgCol} text-[ghostwhite] p-7 flex flex-col gap-3 text-center lg:text-start`}>
          <h3 className="text-7xl font-bold">{service.number}</h3>
          <h4 className="text-xl font-semibold  leading-tight">{service.header}</h4>
          <p className="text-lg">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
          <div className={`${service.arrBg} w-[50px] mx-auto lg:mx-0 h-[50px] rounded-full flex justify-center items-center`}>
            <FontAwesomeIcon icon={faCaretRight} className={`${service.arrColor}`} fontSize={35} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Services
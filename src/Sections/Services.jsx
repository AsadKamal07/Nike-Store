import { services } from "../constaints"
import ServiceCard from "../components/ServiceCard"

const Services = () => {
  return (
    <section className="max-container flex justify-center max-sm:flex-col flex-wrap gap-9">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service}/>
      ))}
    </section>
  )
}

export default Services
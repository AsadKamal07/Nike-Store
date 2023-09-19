import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { socialMedia } from "../constaints"
import { footerLinks } from "../constaints"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex flex-wrap max-lg:flex-col gap-20 items-center justify-between">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="footerLogo" width={150} height={46}/>
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 text-white-40 sm:max-w-sm">Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full" key={icon}>
                <img src={icon.src} alt={icon.alt} width={24} height={24}/>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-white font-montserrat leading-6 mb-6 font-medium text-2xl">{section.title}</h4>
              <ul>
                {section.links.map((link) => (
                  <li className="text-white-400 font-montserrat mt-3 text-base leading-normal hover:text-slate-gray cursor-pointer" key={link.name}>
                    <a href="/">{link.name}</a>
                  </li>
                ))}
              </ul> 
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
         <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img src={copyrightSign} alt="Copy Right Signjustify-center" width={20}
          height={20} className="rounded-full m-0" />
          <p>Copyright. All Rights Reserved</p>
         </div>
         <p className="font-monserrat">Made By AK</p>
      </div>
    </footer>
  )
}

export default Footer
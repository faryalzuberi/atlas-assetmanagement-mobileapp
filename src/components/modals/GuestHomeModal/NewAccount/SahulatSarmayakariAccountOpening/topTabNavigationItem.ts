import { languageTxt } from "../../../../../utils/languageTxt"
import { BankDetails } from "./BankDetails"
import { BasicInformation } from "./BasicInformation"
import { NomineeDetails } from "./NomineeDetails"
const topTabNavigationItem = [
    {
        name: languageTxt.basicInformation,
        component:BasicInformation,
      },
     
      {
        name: languageTxt.nomineeDetails,
        component:  NomineeDetails,
      },
      {
        name: languageTxt.bankDetails,
        component: BankDetails,
      },
     
]

export {
    topTabNavigationItem 
}
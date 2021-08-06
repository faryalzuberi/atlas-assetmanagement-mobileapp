import { languageTxt } from "../../../../../utils/languageTxt"
import { OtpVerify } from "./OtpVerify";
import { BasicInformation } from "./BasicInformation";
import { KycDetails } from "./KycDetails";
import { Fatca } from "./Fatca";
import { RiskProfile } from "./RiskkProfle";
import { NomineeDetails } from "./NomineeDetails";
import {DocumentsUpload} from './DocumentsUpload';
const topTabNavigationItem = [
    {
        name: languageTxt.otpVerify,
        component: OtpVerify,
      },
     
      {
        name: languageTxt.basicInformation,
        component: BasicInformation,
      },
      {
        name: languageTxt.nomineeDetails,
        component: NomineeDetails,
      },
      {
        name: languageTxt.kycDetails,
        component: KycDetails,
      },
      {
        name: languageTxt.fatca,
        component: Fatca,
      },
     
      {
        name: languageTxt.riskProfile,
        component: RiskProfile,
      },
      {
        name: languageTxt.documentsUploads,
        component: DocumentsUpload,
      },
]

export {
    topTabNavigationItem 
}
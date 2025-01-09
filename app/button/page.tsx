"use client"

import { ButtonSuccess, ButtonWarning, ButtonDanger,SuccessOutlaneButton,WarningOutlaneButton,DangerOutlaneButton } from "../../components/button";

const TestButton = () => {
   return(
       <div className="m-10 h-56 grid grid-cols-3 gap-4 content-start ">
           <ButtonSuccess type="button" onClick={() => alert("Success button clicked!")}>
               Success Button
           </ButtonSuccess>
           <ButtonWarning type="button" className="ml-2" onClick={() => alert("Warning button clicked!")}>
               Warning Button
           </ButtonWarning>
           <ButtonDanger type="button" className="ml-2" onClick={() => alert("Danger button clicked!")}>
               Danger Button
           </ButtonDanger>

           <SuccessOutlaneButton type="button" onClick={() => alert("Succes outline button clicked!")}>
           Success Outline Button
           </SuccessOutlaneButton>
           <WarningOutlaneButton type="button" className="ml-2" onClick={() => alert("Warning outline button clicked!")}>
           Warning Outline Button
           </WarningOutlaneButton>
           <DangerOutlaneButton type="button" className="ml-2" onClick={() => alert("Dangger outline button clicked!")}>
           Danger Outline Button
           </DangerOutlaneButton>
       </div>
   )
}

export default TestButton;
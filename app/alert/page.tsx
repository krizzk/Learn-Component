import { AlertDangger, AlertInfo, AlertSuccess, AlertWarning } from "@/components/alert";

const TestAlert = () => {
   return(
       <div className="m-10">
           <AlertInfo title="Alert Info">
            Ini adalah alert dengan tipe info
           </AlertInfo>

           <AlertSuccess title="Alert Success">
            Ini adalah alert dengan tipe Success
           </AlertSuccess>

           <AlertWarning title="Alert Warning">
            Ini adalah alert dengan tipe Warnig
           </AlertWarning>

           <AlertDangger title="Alert Dangger">
            Ini adalah alert dengan tipe Dangger
           </AlertDangger>
           
       </div>
   )
}

export default TestAlert;
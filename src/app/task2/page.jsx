
import Fetch from "@/components/Fetch";
import { Suspense } from "react";
import Loading from '@/app/loading';
const page = async () => {


  return (
    <>
      <div className="container-1">
        <div className="flex flex-col gap-10">
          <div className="w-[100%]">
            <div className="flex gap-5 overflow-auto">
              <Suspense fallback={<Loading />}>
              <Loading />
              </Suspense>
            </div>
          </div>

          <div className="w-[100%]">
            <div className="flex gap-5 overflow-auto">
              <Suspense fallback={<Loading />}>
                <Fetch />
              </Suspense>
            </div>
          </div>



        </div>
      </div>

    </>
  )
}

export default page
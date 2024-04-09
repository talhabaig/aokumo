import React from "react";
import { AokumoLogo as Aokumo, Tick } from "../ui-icons";
const TimeLineDeploy = () => {
  return (
    <div className="flex px-5">
      <div className="mr-6">
        <div className="w-[50px] h-[50px] flex items-center justify-center border border-[#CAD2DE] rounded-full">
          <Aokumo className="w-[27px]" />
        </div>
      </div>
      <div>
        <ul className="time-line-deploy relative">
          <Tick className="absolute z-10 top-2 left-[-5px]" />
          <li className="pl-[24px] pb-3 border-l-2 border-primary-blue">
            <h1 className="text-[18px] font-bold mb-2 text-navy-blue">
              Review Kubernetes Release Notes
            </h1>
            <p className="text-[18px] text-navy-blue">
              Agent Activity: Analyzing the release notes Kubernetes versbns
              1.25 through 1.29
            </p>
          </li>

          <li className="pl-[24px] pb-3 border-l-2 border-primary-blue">
            <h1 className="text-[18px] font-bold mb-2 text-navy-blue">
              Analyze Workload Compatibility
            </h1>
            <p className=" mb-2 text-[18px] text-navy-blue">
              Agent Activity: Scanning for deprecated APIs and non-compatible
              workloads.
            </p>
            <span className="block text-base font-bold mb-[6px] text-light-gray">
              Commands
            </span>
            <div className="mb-3 rounded-2xl text-base p-[23px_32px_23px_32px] bg-max-light-gray">
              kubectl deprecations ——k8s—version=1.29
            </div>
            <span className="block mb-[6px] text-base font-bold text-light-gray">
              Output
            </span>

            <div className="flex gap-10 flex-wrap rounded-2xl mb-8 text-base p-[23px_32px_23px_32px] bg-max-light-gray">
              <div className="flex flex-col">
                <span className="block">KIND</span>
                <span className="block">HorizontatPodAutoscaler</span>
                <span className="block">Ingress</span>
              </div>
              <div className="flex flex-col">
                <span className="block">NAME</span>
                <span className="block">my—hpa</span>
                <span className="block">my—ingress</span>
              </div>
              <div className="flex flex-col">
                <span className="block">DEPRECATED IN</span>
                <span className="block">vl.25</span>
                <span className="block">vl.25</span>
              </div>
              <div className="flex flex-col">
                <span className="block">REMOVED IN</span>
                <span className="block">VI.29</span>
                <span className="block">vl.29</span>
              </div>
              <div className="flex flex-col">
                <span className="block">Replacement</span>
                <span className="block">autoscale</span>
                <span className="block">networking</span>
              </div>
            </div>
            <div>
              <li>
                <h1 className="text-[18px] mb-2 font-bold text-navy-blue">
                  Identity API and Configuration Changes
                </h1>
                <p className=" mb-[6px] text-[18px] text-navy-blue">
                  Agent Activity: Listing all deployments with deprecated API
                  usage across clusters and AWS accounts.
                </p>
              </li>
              <div className="rounded-2xl mb-8 text-base p-[23px_32px_23px_32px] bg-max-light-gray">
                <span className="block">
                  ./k8s/cartservice/prd/horizontatautoscater. yaml
                </span>
                <span className="block">
                  ./k8s/productcatalogservice/prd/backend-hpa.yamI
                </span>
              </div>
            </div>
          </li>

          <li className="pl-[24px] pb-3  border-primary-blue">
            <h1 className="text-[18px] font-bold text-navy-blue">
              Update Deployment Configurations and Helm Charts
            </h1>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TimeLineDeploy;

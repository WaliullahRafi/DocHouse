import React from "react";

function Overview() {
  return (
    <div>
      <div className="space-y-4">
        <h3 className="text-xl font-bold">About Me</h3>

        <p className="text-[]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className="flex gap-12 mt-8">
        <div className="w-1/3 space-y-8">
          <ul>
            <h3 className="text-xl font-bold">Education</h3>
            <div>
              <li className="list-disc font-bold">American Dental Medical University</li>
              <p>BDS</p>
              <p>1998 - 2003</p>
            </div>
            <div>
              <li className="list-disc font-bold">American Dental Medical University</li>
              <p>BDS</p>
              <p>1998 - 2005</p>
            </div>
          </ul>

          <ul className="space-y-4">
            <h3 className="text-xl font-bold">Work & Experience</h3>
            <div>
              <li className="list-disc font-bold">Glowing Smiles Family Dental Clinic</li>
              <p>2010 - Present (5 years)</p>
            </div>
            <div>
              <li className="list-disc font-bold">Comfort Care Dental Clinic</li>
              <p>2007 - 2010 (3 years)</p>
            </div>
            <div>
              <li className="list-disc font-bold">Dream Smile Dental Practice</li>
              <p>2005 - 2007 (2 years)</p>
            </div>
          </ul>

          <ul>
            <h3 className="text-xl font-bold">Services</h3>
            <div className="ml-8 mt-2">
              <li className="list-disc">Tooth cleaning</li>
              <li className="list-disc">Root Canal Therapy</li>
              <li className="list-disc">Implants</li>
              <li className="list-disc">Composite Bonding</li>
              <li className="list-disc">Fissure Sealants</li>
              <li className="list-disc">Surgical Extractions</li>
            </div>
          </ul>
        </div>

        <div className="2/3 space-y-6">
          <ul className="space-y-6">
            <h3 className="text-xl font-bold">Awards</h3>
            <div className="space-y-2">
              <li className="list-disc font-bold">Humanitarian Award</li>
              <p>July 2019</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
                ipsum tellus. Interdum et malesuada fames ac ante ipsum primis
                in faucibus.
              </p>
            </div>
            <div className="space-y-2">
              <li className="list-disc font-bold">
                Certificate for International Volunteer Service
              </li>
              <p>March 2011</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
                ipsum tellus. Interdum et malesuada fames ac ante ipsum primis
                in faucibus.
              </p>
            </div>
            <div className="space-y-2">
              <li className="list-disc font-bold">
                The Dental Professional of The Year Award
              </li>
              <p>May 2008</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
                ipsum tellus. Interdum et malesuada fames ac ante ipsum primis
                in faucibus.
              </p>
            </div>
          </ul>

          <ul>
            <h3 className="text-xl font-bold">Specializations</h3>
            <div className="ml-8 mt-2">
              <li className="list-disc">Children Care</li>
              <li className="list-disc">Dental Care</li>
              <li className="list-disc">Oral and Maxillofacial Surgery</li>
              <li className="list-disc">Orthodontist</li>
              <li className="list-disc">Periodontist</li>
              <li className="list-disc">Prosthodontics</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Overview;

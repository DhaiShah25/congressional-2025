import "../../App.css";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

function FaqPart(props) {
  const { question, children } = props;
  return (
    <Accordion.Item value={question} className="border-b border-gray-200">
      <Accordion.Header>
        <Accordion.Trigger className="group flex w-full items-center justify-between px-4 py-3 text-left text-gray-800 hover:bg-gray-50">
          <span className="text-xl font-bold">{question}?</span>
          <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-90" />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="px-4 pb-4">
        <hr className="border border-zinc-200 m-2" />
        {children}
      </Accordion.Content>
    </Accordion.Item>
  );
}

export default function Legal() {
  const [query, setQuery] = useState("");
  return (
    <div className="grid place-content-center py-2">
      <h1 className="text-4xl font-bold text-center p-2">Permit Help</h1>
      <Accordion.Root
        type="single"
        collapsible
        className="w-screen md:w-[80ch] rounded-lg border border-gray-200 bg-white shadow-sm text-black"
      >
        <FaqPart question="When Do You Need A Permit">
          You need a permit when you do major home modifications such as:
          <ol>
            <li>
              Structural Changes
              <span className="opacity-60">
                adding walls, changing the foundation, or adding a floor
              </span>
            </li>
            <li>
              Electrical Work
              <span className="opacity-60">
                new wiring, service panel upgrades, or installing recessed
                lighting
              </span>
            </li>
            <li>
              Plumbing Modifications{" "}
              <span className="opacity-60">
                new piping, water heater replacement, relocating fixtures
              </span>
            </li>
            <li>
              HVAC system changes{" "}
              <span className="opacity-60">
                new furnace, air conditioning system, or ductwork
              </span>
            </li>
            <li>Roofing & Siding Modifications</li>
            <li>Decks, porches, and additions</li>
          </ol>
          <br />
          Not for minor stuff like painting, new cabinets, or replacing flooring
        </FaqPart>
        <FaqPart question="How To Get A Permit">
          You need a permit when you do major home modifications such as:
          <ul>
            <li>
              Get Required Documents (blueprints, floor plans, construction
              details)
            </li>
            <li>
              Submit Application (completed construction permit application,
              zoning permit, site plans with property boundaries, and contractor
              indormation)
            </li>
            <li>Get Approved And Pay The Permit Fee</li>
            <li>Inspections To Ensure Compliance</li>
          </ul>
          <br />
          Not for minor stuff like painting, new cabinets, or replacing flooring
        </FaqPart>
      </Accordion.Root>

      <h1 className="text-center font-bold text-3xl font-bold p-2 my-2">
        NJ Permit Application Links
      </h1>
      <table className="rounded">
        <tbody>
          <tr className="odd:bg-gray-50 even:bg-gray-100">
            <td>UCC Form #</td>
            <td>Name</td>
            <td>Print-Ready</td>
            <td>Fillable</td>
          </tr>
          <tr className="odd:bg-gray-50 even:bg-gray-100">
            <td>F100</td>
            <td>Construction Permit Application</td>
            <td>
              <a
                className="underline text-blue-900"
                href="https://www.nj.govhttps://www.nj.govhttps://www.nj.govhttps://www.nj.gov/dca/codes/forms/pdf_ucc_stdforms/pr_f100_cpa.pdf"
                target="_blank"
                rel="noopener"
              >
                F100
              </a>
            </td>
            <td>
              <a
                className="underline text-blue-900"
                href="https://www.nj.govhttps://www.nj.govhttps://www.nj.govhttps://www.nj.gov/dca/codes/forms/pdf_ucc_stdforms/ucc_f100_cpa.pdf"
                target="_blank"
                rel="noopener"
              >
                F100
              </a>
            </td>
          </tr>
          <tr className="odd:bg-gray-50 even:bg-gray-100">
            <td>F101-CUPW</td>
            <td>Consent to Undertake Proposed Work</td>
            <td>
              <a
                className="underline text-blue-900"
                href="https://www.nj.govhttps://www.nj.govhttps://www.nj.govhttps://www.nj.gov/dca/codes/forms/pdf_ucc_stdforms/pr_f101_cupw.pdf"
                target="_blank"
                rel="noopener"
              >
                F101-CUPW
              </a>
            </td>
            <td>
              <a
                className="underline text-blue-900"
                href="https://www.nj.govhttps://www.nj.govhttps://www.nj.govhttps://www.nj.gov/dca/codes/forms/pdf_ucc_stdforms/ucc%20F101_cupw.pdf"
                target="_blank"
                rel="noopener"
              >
                F101-CUPW
              </a>
            </td>
          </tr>
          <tr className="odd:bg-gray-50 even:bg-gray-100">
            <td>F101-HECC</td>
            <td>Home Elevation Contractor Certification</td>
            <td>
              <a
                className="underline text-blue-900"
                href="https://www.nj.govhttps://www.nj.govhttps://www.nj.govhttps://www.nj.gov/dca/codes/forms/pdf_ucc_stdforms/pr_f101_hecc.pdf"
                target="_blank"
                rel="noopener"
              >
                F101-HECC
              </a>
            </td>
            <td>
              <a
                className="underline text-blue-900"
                href="https://www.nj.govhttps://www.nj.govhttps://www.nj.govhttps://www.nj.gov/dca/codes/forms/pdf_ucc_stdforms/ucc%20F101-HECC.pdf"
                target="_blank"
                rel="noopener"
              >
                F101-HECC
              </a>
            </td>
          </tr>
          <tr className="odd:bg-gray-50 even:bg-gray-100">
            <td>F101-LEAD</td>
            <td>
              Certification of Homeowner,Lead Abatement
              <br />
              in Owner-occupied Single-family Dwelling
            </td>
            <td>
              <a
                className="underline text-blue-900"
                href="https://www.nj.govhttps://www.nj.govhttps://www.nj.govhttps://www.nj.gov/dca/codes/forms/pdf_ucc_stdforms/pr_f101_lead.pdf"
                target="_blank"
                rel="noopener"
              >
                F101-LEAD
              </a>
            </td>
            <td>
              <a
                className="underline text-blue-900"
                href="https://www.nj.govhttps://www.nj.govhttps://www.nj.govhttps://www.nj.gov/dca/codes/forms/pdf_ucc_stdforms/ucc%20F101-LEAD.pdf"
                target="_blank"
                rel="noopener"
              >
                F101-LEAD
              </a>
            </td>
          </tr>
          <tr className="odd:bg-gray-50 even:bg-gray-100">
            <td>F102</td>
            <td>Annual Permit Application</td>
            <td>
              <a
                className="underline text-blue-900"
                href="https://www.nj.govhttps://www.nj.govhttps://www.nj.govhttps://www.nj.gov/dca/codes/forms/pdf_ucc_stdforms/pr_f102_annual.pdf"
                target="_blank"
                rel="noopener"
              >
                F102
              </a>
            </td>
            <td>
              <a
                className="underline text-blue-900"
                href="https://www.nj.govhttps://www.nj.govhttps://www.nj.govhttps://www.nj.gov/dca/codes/forms/pdf_ucc_stdforms/f102_annual_perm_app.pdf"
                target="_blank"
                rel="noopener"
              >
                F102
              </a>
            </td>
          </tr>
          <tr className="odd:bg-gray-50 even:bg-gray-100">
            <td>F110</td>
            <td>Building Subcode Technical Section</td>
            <td>
              <a
                className="underline text-blue-900"
                href="https://www.nj.govhttps://www.nj.govhttps://www.nj.govhttps://www.nj.gov/dca/codes/forms/pdf_ucc_stdforms/pr_f110_bldg.pdf"
                target="_blank"
                rel="noopener"
              >
                F110
              </a>
            </td>
            <td>
              <a
                className="underline text-blue-900"
                href="https://www.nj.govhttps://www.nj.govhttps://www.nj.govhttps://www.nj.gov/dca/codes/forms/pdf_ucc_stdforms/ucc_f110_bldg.pdf"
                target="_blank"
                rel="noopener"
              >
                F110
              </a>
            </td>
          </tr>
          <tr className="odd:bg-gray-50 even:bg-gray-100">
            <td>F120</td>
            <td>Electrical Subcode Technical Section</td>
            <td>
              <a
                className="underline text-blue-900"
                href="https://www.nj.govhttps://www.nj.govhttps://www.nj.govhttps://www.nj.gov/dca/codes/forms/pdf_ucc_stdforms/pr_f120_elec.pdf"
                target="_blank"
                rel="noopener"
              >
                F120
              </a>
            </td>
            <td>
              <a
                className="underline text-blue-900"
                href="https://www.nj.govhttps://www.nj.govhttps://www.nj.govhttps://www.nj.gov/dca/codes/forms/pdf_ucc_stdforms/ucc_f120_elec.pdf"
                target="_blank"
                rel="noopener"
              >
                F120
              </a>
            </td>
          </tr>
          <tr className="odd:bg-gray-50 even:bg-gray-100">
            <td>F130</td>
            <td>Plumbing Subcode Technical Section</td>
            <td>
              <a
                className="underline text-blue-900"
                href="https://www.nj.govhttps://www.nj.govhttps://www.nj.govhttps://www.nj.gov/dca/codes/forms/pdf_ucc_stdforms/pr_f130_plumb.pdf"
                target="_blank"
                rel="noopener"
              >
                F130
              </a>
            </td>
            <td>
              <a
                className="underline text-blue-900"
                href="https://www.nj.govhttps://www.nj.govhttps://www.nj.govhttps://www.nj.gov/dca/codes/forms/pdf_ucc_stdforms/ucc_f130_plumb.pdf"
                target="_blank"
                rel="noopener"
              >
                F130
              </a>
            </td>
          </tr>
          <tr className="odd:bg-gray-50 even:bg-gray-100">
            <td>F140</td>
            <td>Fire Protection Subcode Technical Section</td>
            <td>
              <a
                className="underline text-blue-900"
                href="https://www.nj.govhttps://www.nj.govhttps://www.nj.govhttps://www.nj.gov/dca/codes/forms/pdf_ucc_stdforms/pr_f140_fire.pdf"
                target="_blank"
                rel="noopener"
              >
                F140
              </a>
            </td>
            <td>
              <a
                className="underline text-blue-900"
                href="https://www.nj.govhttps://www.nj.govhttps://www.nj.govhttps://www.nj.gov/dca/codes/forms/pdf_ucc_stdforms/ucc_f140_fire_prot.pdf"
                target="_blank"
                rel="noopener"
              >
                F140
              </a>
            </td>
          </tr>
          <tr className="odd:bg-gray-50 even:bg-gray-100">
            <td>F145</td>
            <td>Mechanical Inspection Technical Section</td>
            <td>
              <a
                className="underline text-blue-900"
                href="https://www.nj.govhttps://www.nj.govhttps://www.nj.govhttps://www.nj.gov/dca/codes/forms/pdf_ucc_stdforms/pr_f145_mech.pdf"
                target="_blank"
                rel="noopener"
              >
                F145
              </a>
            </td>
            <td>
              <a
                className="underline text-blue-900"
                href="https://www.nj.govhttps://www.nj.govhttps://www.nj.govhttps://www.nj.gov/dca/codes/forms/pdf_ucc_stdforms/ucc_f145_mech_insp.pdf"
                target="_blank"
                rel="noopener"
              >
                F145
              </a>
            </td>
          </tr>
          <tr className="odd:bg-gray-50 even:bg-gray-100">
            <td>F150</td>
            <td>Elevator Subcode Technical Section</td>
            <td>
              <a
                className="underline text-blue-900"
                href="https://www.nj.govhttps://www.nj.govhttps://www.nj.govhttps://www.nj.gov/dca/codes/forms/pdf_ucc_stdforms/pr_f150_elevator.pdf"
                target="_blank"
                rel="noopener"
              >
                F150
              </a>
            </td>
            <td>
              <a
                className="underline text-blue-900"
                href="https://www.nj.govhttps://www.nj.govhttps://www.nj.govhttps://www.nj.gov/dca/codes/forms/pdf_ucc_stdforms/ucc_f150_elev.pdf"
                target="_blank"
                rel="noopener"
              >
                F150
              </a>
            </td>
          </tr>
          <tr className="odd:bg-gray-50 even:bg-gray-100">
            <td>F155</td>
            <td>
              Elevator Subcode Supplement for Multiple
              <br />
              Equipment
            </td>
            <td>
              <a
                className="underline text-blue-900"
                href="https://www.nj.govhttps://www.nj.govhttps://www.nj.govhttps://www.nj.gov/dca/codes/forms/pdf_ucc_stdforms/pr_f155_elevator_sup.pdf"
                target="_blank"
                rel="noopener"
              >
                F155
              </a>
            </td>
            <td>
              <a
                className="underline text-blue-900"
                href="https://www.nj.govhttps://www.nj.govhttps://www.nj.govhttps://www.nj.gov/dca/codes/forms/pdf_ucc_stdforms/ucc_f155_elev_suppl.pdf"
                target="_blank"
                rel="noopener"
              >
                F155
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <label className="py-2 text-xl">
        Get Legal Task
        <br />
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Changing roofing"
          className="border p-2 w-full rounded"
        />
      </label>
      {query == "Adding a room" && (
        <p>
          <ol className="list-disc">
            <li>Envision your dream</li>
            <li>
              You also need to check if the new room will fit on your property
              boundaries and respect your local zoning laws.
            </li>
            <li>hire a professional</li>
            <li>create stamped architecture</li>
            <li>
              You must get a construction permit which is linked above and fill
              it out
            </li>
            <li>
              Check other relevant codes using the NJ Uniform Construction Code
            </li>
          </ol>
        </p>
      )}
    </div>
  );
}

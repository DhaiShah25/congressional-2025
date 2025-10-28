import React from 'react';
import '../../App.css';
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

function FaqPart(props) {
    const { question, children } = props;
    return (
        <Accordion.Item value={question} className="border-b border-gray-200">
            <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center justify-between px-4 py-3 text-left text-gray-800 hover:bg-gray-50">
                    <span className='text-xl font-bold'>{question}?</span>
                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-90" />
                </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="px-4 pb-4">
                <hr className='border border-zinc-200 m-2' />
                {children}
            </Accordion.Content>
        </Accordion.Item >

    );
}

export default function Legal() {
    return (
        <div className='grid place-content-center py-2'>
            <h1 className='text-4xl font-bold text-center p-2'>Permit Help</h1>
            <Accordion.Root
                type="single"
                collapsible
                className="w-screen md:w-[80ch] rounded-lg border border-gray-200 bg-white shadow-sm text-black"
            >
                <FaqPart question="When Do You Need A Permit">
                    You need a permit when you do major home modifications such as:
                    <ol>
                        <li>Structural Changes <span className='opacity-60'>adding walls, changing the foundation, or adding a floor</span></li>
                        <li>Electrical Work <span className='opacity-60'>new wiring, service panel upgrades, or installing recessed lighting</span></li>
                        <li>Plumbing Modifications <span className='opacity-60'>new piping, water heater replacement, relocating fixtures</span></li>
                        <li>HVAC system changes <span className='opacity-60'>new furnace, air conditioning system, or ductwork</span></li>
                        <li>Roofing & Siding Modifications</li>
                        <li>Decks, porches, and additions</li>
                    </ol>
                    <br />
                    Not for minor stuff like painting, new cabinets, or replacing flooring
                </FaqPart>
                <FaqPart question="How To Get A Permit">
                    You need a permit when you do major home modifications such as:
                    <ul>
                        <li>Get Required Documents (blueprints, floor plans, construction details)</li>
                        <li>Submit Application (completed construction permit application, zoning permit, site plans with property boundaries, and contractor indormation)</li>
                        <li>Get Approved And Pay The Permit Fee</li>
                        <li>Inspections To Ensure Compliance</li>
                    </ul>
                    <br />
                    Not for minor stuff like painting, new cabinets, or replacing flooring
                </FaqPart>
            </Accordion.Root>
        </div>
    );
}



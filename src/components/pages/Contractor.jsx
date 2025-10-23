import React from 'react';
import '../../App.css';
import { ContractorCard } from '../ContractorCard';

export default function Contractor() {
    return (
        <div style={{ padding: '50px', textAlign: 'center' }}>
            <ContractorCard name="Bob" specialty="" location="Edison, New Jersey" rating={5} reviewCount={50} yearsExperience={5} />
        </div>
    );
}

import '../../App.css';
import { ContractorCard } from '../ContractorCard';

export default function Contractor() {
    return (
        <>
            <div className='text-center font-bold bg-yellow-300 w-fit m-auto p-2 rounded my-2'>
                <h1 className='text-2xl'>Disclaimer: These Contractors Are For The Purpose Of This Demonstration</h1>
                <p className='text-md'>Any Resemblance To Real People Is Not Intentional</p>
            </div>
            <div className="text-center p-2 flex flex-wrap flex-col sm:justify-evenly sm:flex-row gap-2">
                <ContractorCard
                    name="Mark Daniels"
                    location="Dallas–Fort Worth, TX"
                    rating={4.8} reviewCount={41}
                    experience="12 Years"
                    phoneNumber="555-0100"
                    email="mark.daniels@example.com" />
                <ContractorCard
                    name="Jamal Brooks"
                    location="Atlanta, GA"
                    rating={4.2} reviewCount={26}
                    experience="14 Years"
                    phoneNumber="555-0172"
                    email="brooks.jamal@example.com" />
                <ContractorCard
                    name="Priya Shah"
                    location="San Diego, CA"
                    rating={4.6} reviewCount={32}
                    experience="9 Years"
                    phoneNumber="555-0148"
                    email="shah.priya@example.com" />
                <ContractorCard
                    name="Luis Romero"
                    location="Phoenix, AZ"
                    rating={4.8} reviewCount={47}
                    experience="15 Years"
                    phoneNumber="555-0129"
                    email="romero.luis@example.com" />
                <ContractorCard
                    name="Elena Rossi"
                    location="Denver, CO"
                    rating={4.9} reviewCount={56}
                    experience="11 Years"
                    phoneNumber="555-0174"
                    email="elena.rossi@example.com" />
            </div>
        </>
    );
}

// 555-0100 through 555-0199

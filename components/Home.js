// components/Home.js
import Image from 'next/image'; // Importing the Image component

export default function Home() {
    return (
        <div>
            <h1>Our Team</h1>
            <Image 
                src="/images/team-member1.jpg,team-member2.jpg,team-member3.jpg" 
                alt="Team Member 1" 
                width={500} 
                height={500} 
                fetchPriority="high" 
            />
        </div>
    );
}

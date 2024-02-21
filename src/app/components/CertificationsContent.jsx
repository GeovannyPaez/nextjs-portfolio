import React from 'react'
import { CertificationsData } from '@/data'
import Link from 'next/link'
export default function CertificationsContent() {
    return (
        <ul className="list-disc pl-2">
            {CertificationsData.map((certification, index) => (
                <li key={index}>
                    <Link className=' hover:text-gray-400' href={certification.link}>
                        {certification.title}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

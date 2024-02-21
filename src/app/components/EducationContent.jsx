import React from 'react'
import { EducationData } from '@/data'

export default function EducationContent() {
    return (
        EducationData.map((education, index) => (
            <ul key={index} className="list-disc pl-2">
                <li className=''>
                    <h3 className="text-xl font-bold text-white mb-2">{education.degree}</h3>
                    <p className=' text-gray-400'>{education.instution} <span>[ {education.date} ]</span></p>
                </li>
            </ul>
        ))
    )
}

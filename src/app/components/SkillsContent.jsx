import React from 'react'
import { SkillsData } from '@/data'
export default function SkillsContent() {
    return (

        <div className="flex flex-col items-center justify-center">
            <div className=" overflow-x-scroll lg:overflow-hidden w-full flex gap-4 lg:flex-wrap">
                {SkillsData.map((skill, index) => {
                    return (
                        <div key={index} className="flex flex-col items-center justify-start">
                            <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
                            <ul className="list pl-2">
                                {skill.skills.map((item, index) => {
                                    return <li key={index}>{item}</li>
                                })}
                            </ul>
                        </div>
                    )
                })}
            </div>
        </div>
    )
} 

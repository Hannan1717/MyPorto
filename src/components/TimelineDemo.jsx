import { useImage } from 'react-image'
import { Timeline } from "../components/ui/timeline";

export function TimelineDemo() {
    const data = [
        {
            title: "PT Awan Network Indonesia",
            content: (
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <p className="text-neutral-500 dark:text-slate-400 text-lg font-bold">
                                Aug 2024 - Present
                            </p>
                        </div>
                        <div>
                            <p className="text-neutral-500 dark:text-slate-400 text-lg font-bold text-right">
                                Backend Developer
                            </p>
                        </div>
                    </div>
                    <p className="text-neutral-800 dark:text-slate-300 text-base font-normal mb-4">
                        I developed and maintained robust APIs to support various services, ensuring high performance and scalability. In collaboration with a cross-functional team, I designed and implemented backend solutions that met client requirements. Additionally, I documented API specifications and workflows to streamline future development and maintenance efforts.
                    </p>
                </div>
            ),
        },
        {
            title: "CV Destinasi Computindo",
            content: (
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <p className="text-neutral-500 dark:text-slate-400 text-lg font-bold">
                                Feb - Apr 2024
                            </p>
                        </div>
                        <div>
                            <p className="text-neutral-500 dark:text-slate-400 text-lg font-bold text-right">
                                Data Entry
                            </p>
                        </div>
                    </div>
                    <p className="text-neutral-800 dark:text-slate-300 text-base font-normal mb-4">
                        I accurately entered over 15,000 birth certificate records into the Simarsip system at the Department of Population and Civil Registration (Dispendukcapil) in Semarang. I ensured data accuracy and precision to optimize data quality and comply with regulatory standards while adhering to applicable policies and procedures to maintain data confidentiality and security. Additionally, I collaborated with the team to improve efficiency in the digital archiving process.
                    </p>
                </div>
            ),
        },
        {
            title: "CV Akuntara Consulting ",
            content: (
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <p className="text-neutral-500 dark:text-slate-400 text-lg font-bold">
                                July - Oct 2022
                            </p>
                        </div>
                        <div>
                            <p className="text-neutral-500 dark:text-slate-400 text-lg font-bold text-right">
                                Frontend Developer
                            </p>
                        </div>
                    </div>
                    <p className="text-neutral-800 dark:text-slate-300 text-base font-normal mb-4">
                        I developed an E-learning platform for an accountant community using the Odoo website builder, implementing various features such as self-paced courses, group courses, a digital marketplace, webinars, forums, job vacancies, internship listings, profiles, and membership. Collaborating through the Scrum methodology, I ensured efficient and timely project delivery while maintaining a responsive design and user-friendly interface for an optimal user experience.
                    </p>
                </div>
            ),
        },
    ];
    return (
        (<div className="w-full">
            <Timeline data={data} />
        </div>)
    );
}

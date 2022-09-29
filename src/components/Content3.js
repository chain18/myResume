import React from "react";

function Content3() {
    return (
        <div className="flex flex-row justify-around">
            <div className="flex flex-col justify-center m-8 ml-11">
                <h1 className="text-6xl hr underline" id="skill">Skill</h1>
                <h2 className="text-4xl text-left mt-8"><span class="material-symbols-outlined">temp_preferences_custom</span> professional Skills</h2>
                <ul className="text-2xl text-left mt-6">
                    <il>
                        - Quick to pick up new skills and eager to learn from others.
                    </il>
                    <li>
                        - Multitasking skill
                    </li>
                    <li>
                        - Emotional control
                    </li>
                    <li>
                        - Soft skill
                    </li>
                </ul>
            </div>
            <div>
                <div className="flex flex-col justify-center m-8 ml-11">
                    <h2 className="text-4xl text-left mt-8"><span class="material-symbols-outlined">temp_preferences_custom</span> Languages</h2>
                    <ul className="text-2xl text-left mt-6">
                        <il>
                            - Thai skills in native.
                        </il>
                        <li>
                            - English skills
                        </li>
                        <li className="indent-6">* Writing in fair level.</li>
                        <li className="indent-6">* Listening in good level.</li>
                        <li className="indent-6">* Reading in good level.</li>
                        <li className="indent-6">* Speaking in good level.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Content3;
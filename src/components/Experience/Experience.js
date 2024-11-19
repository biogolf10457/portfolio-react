import React from 'react';
import './Experience.css';
import logo from '../../assets/companyLogo/arise.jpg';
import {getSkillsLogo} from '../../data/skills';

const Content = () => {
    const skillsLogo = getSkillsLogo();

    return (
        <div className='experinceContainer'>
            <h1 className='title'>Experience</h1>
            <table className='works'>
                <tr>
                    <td className='worksDate'>Dec 2022 - Jul 2024</td>
                    <td className='worksLogo'><img src={logo} alt="arise" width={'48px'} /></td>
                    <td className='worksName'>Arise by Infinitas</td>
                </tr>
                <tr>
                    <td></td>
                    <td className='timelineBarContainer'><div className='timelineBar'></div></td>
                    <td className='worksDescription'>
                        <div>Test Engineer</div>
                        <ul>
                            <li>Design test cases according to requirements</li>
                            <li>Execute Software Integration Test (SIT)</li>
                            <li>Support User Acceptance Test (UAT)</li>
                            <li>Support investigating defects of production issues</li>
                            <li>Execute Integration and Verification Testing (IVT) in deployment</li>
                            <li>Create basic automation test script by Robot Framework</li>
                        </ul>
                    </td>
                </tr>
            </table>
            <div className='skills'>
                <div className='skillsGroup'>
                    <div className='skillsGroupName'>Programming Skills</div>
                    <div className='skillGroupLogo'>
                        {
                            skillsLogo.programming.map(logo => (
                                <img 
                                    key={logo} 
                                    src={require(`../../assets/skillsLogo/${logo}`)} 
                                    alt={logo} 
                                    height='48px'
                                    className='skillLogo'/>
                            ))
                        }
                    </div>
                </div>
                <div className='skillsGroup'>
                    <div className='skillsGroupName'>Other Skills</div>
                    <div className='skillGroupLogo'>
                        {
                            skillsLogo.other.map(logo => (
                                <img 
                                    key={logo} 
                                    src={require(`../../assets/skillsLogo/${logo}`)} 
                                    alt={logo} 
                                    height='48px'
                                    className='skillLogo'/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;